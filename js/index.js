function legitimize(input) {
    let outputElem = document.getElementById('output');
    let text = input.value;
    let regex = /[\wа-я]+/ig;
    let replacementsArray = Array.from(new Set([...text.matchAll(regex)].flat(1)));
    // let textMatches = [...text.matchAll(regex)];
    // let textArr = Array();
    // for (match of textMatches) {
    //     textArr.push(match[0]);
    // }

    replacementsArray.sort((a,b) => {return b.length - a.length})

    for (word of replacementsArray) {
        let regex = new RegExp(word, "g");
        text = text.replace(regex, '(((' + word + ')))');
    }

    outputElem.innerText = text;

}
