function do_alert(input) {
    alert(input.value);
    var outputElem = document.getElementById('output');
    outputElem.value = input.value;
}
