function legitimize() {
    let input = document.getElementById('input');
    let outputElem = document.getElementById('output');
    let text = input.value;

    text = primaryLegitimize(text)
    text = additionalMissles(text);

    outputElem.innerText = text;
}


function primaryLegitimize(text) {
    let regex = /[\wа-я]+/ig;
    text = makeThisWork(regex, text);

    return text;
}

function additionalMissles(text) {
    let regexRange = /[0-9a-zа-яА-Я]*-[0-9a-zа-яА-Я]*/ig;
    text = makeThisWork(regexRange, text);

    let regexYo = /[0-9a-zа-яА-Я]*ё[0-9a-zа-яА-Я]*/ig;
    text = makeThisWork(regexYo, text);

    return text;
}

function makeThisWork(regex, text) {
    let replacementsArray = Array.from(new Set([...text.matchAll(regex)].flat(1)));

    replacementsArray.sort((a, b) => {
        return b.length - a.length
    })

    for (word of replacementsArray) {
        let regexRep = new RegExp('(?<=[\\s,.:;"\']|^)' + word + '(?=[\\s,.:;"\']|$)', "g");
        text = text.replace(regexRep, '(((' + word + ')))');
    }

    return text;
}
