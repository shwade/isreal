function legitimize(input) {
    let outputElem = document.getElementById('output');
    let text = input.value;
    let regex = /[\wа-я]+/ig;
    let replacementsArray = Array.from(new Set([...text.matchAll(regex)].flat(1)));

    replacementsArray.sort((a,b) => {return b.length - a.length})

    for (word of replacementsArray) {
        let regexRep = new RegExp(word + '\\b', "g");
        text = text.replace(regexRep, '(((' + word + ')))');
    }

    outputElem.innerText = text;
}
