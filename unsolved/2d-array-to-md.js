/**
 * @prop {Array<Array<string>>} arr
 * 
 * Should output a markdown table of the array.
 * 
 * Markdown table should include header generated from first arr index
 */
function renderMarkdownTable(arr) {
    var markdown = '|';
    for (var i = 0; i < arr[0].length; i++) {
        markdown += ' ' + arr[0][i] + ' |';
    }
    markdown += '\n|';
    for (var i = 0; i < arr[0].length; i++) {
        markdown += ' --- |';
    }
    markdown += '\n';
    for (var i = 0; i < arr.length; i++) {
        markdown += '|';
        for (var j = 0; j < arr[i].length; j++) {
            markdown += ' ' + arr[i][j] + ' |';
        }
        markdown += '\n';
    }
    return markdown;
}



// /**
//  * @prop {Array<Array<string>>} arr
//  * 
//  * Should output a markdown table of the array.
//  * 
//  * Markdown table should include header generated from first arr index
//  * 
//  * Table cells should be spaced consistently and align visually
//  */
//  function renderMarkdownTable(arr) {
//     var markdown = '|';
//     for (var i = 0; i < arr[0].length; i++) {
//         markdown += ' ' + arr[0][i] + ' |';
//     }
//     markdown += '\n|';
//     for (var i = 0; i < arr[0].length; i++) {
//         markdown += ' --- |';
//     }
//     markdown += '\n';
//     for (var i = 0; i < arr.length; i++) {
//         markdown += '|';
//         for (var j = 0; j < arr[i].length; j++) {
//             markdown += ' ' + arr[i][j] + ' |';
//         }
//         markdown += '\n';
//     }
//     return markdown;
// }
