function searchWord(target,str) {
    let count = 0;

    return str.split(" ").map(word => {
        if (word.toLowerCase() === target) return "**" + word.toUpperCase() + "**"
        else return word;
    }).join(" ");
    // for (let i = 0; i < array.length; i++) {
    //     if (array[i] === target) count++;
    // }
    // return count;
}
// function searchWord(target,str) {
//     let count = 0;

//     let array = str.toLowerCase().split(" ");
//     for (let i = 0; i < array.length; i++) {
//         if (array[i] === target) count++;
//     }
//     return count;
// }

const text = 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Sed quis autem vel est, iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur?';
console.log(
searchWord('sed', text),     // 4
// searchWord('est', text),     // 0
// searchWord('est,', text),    // 2
// This is the new Regex method that I keep forgetting how to do which is to make the input parameter without having to quotes around it. The benefit is that you can allow the parameter argument to pass through without much problem.
function searchWord(word, text) {
    let regex = new RegExp(word, "gi");
    return text.replace(regex, `**${word.toUpperCase()}**`);
  }