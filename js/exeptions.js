function promptDirection(question) {
    let result = prompt(question);
    if (result.toLowerCase() == 'left') return 'L';
    if (result.toLowerCase() == 'right') return 'R';
    throw new Error('failed direction: ' + result);
}

function look(){
    if (promptDirection('Where to go?') == 'L'){
        return 'home';
    } else {
        return 'two angry bears';
    }
}

try {
    console.log('In front of you', look());
} catch (error) {
    cconsole.log('Something went wrong: ' + error);
}