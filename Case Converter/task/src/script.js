function upperCase(elementId){
    let textarea_el = document.getElementById(elementId);
    textarea_el.value = textarea_el.value.toUpperCase();
}

function lowerCase(elementId) {
    let textarea_el = document.getElementById(elementId);
    textarea_el.value = textarea_el.value.toLowerCase();
}

function properCase(elementId) {
    let textarea_el = document.getElementById(elementId);
    let wordsArray = textarea_el.value.split(' ');
    for (let i = 0; i <= wordsArray.length - 1; i++ ) {
        wordsArray[i] = wordsArray[i][0].toUpperCase() + wordsArray[i].substring(1);

    }
    textarea_el.value = wordsArray.join(' ');
}

function sentenceCase(elementId) {
    let textarea_el = document.getElementById(elementId);
    let wordsArray = textarea_el.value.split('. ');
    console.log(wordsArray)
    for (let i = 0; i <= wordsArray.length - 1; i++ ) {
        wordsArray[i] = wordsArray[i].toLowerCase();
        wordsArray[i] = wordsArray[i][0].toUpperCase() + wordsArray[i].substring(1);
    }

    textarea_el.value = wordsArray.join('. ')
}

function download(filename, text) {
    let element = document.createElement('a');
    element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
    element.setAttribute('download', filename);
    element.style.display = 'none';
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
}