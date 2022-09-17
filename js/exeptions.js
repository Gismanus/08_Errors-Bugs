// function promptNumber(question) {
//     let result = Number(prompt(question));
//     if (Number.isNaN(result)) return null;
//     else return result;
// }
// console.log(promptNumber('How many trees do you see?'));

// function lastElement(array) {
//     if (array.length == 0) {
//         return { failed: true };
//     }
//     else {
//         return { element: array[array.length - 1] };
//     }
// }
// console.log(lastElement([2, 3, 4]))
// console.log(lastElement([]))

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