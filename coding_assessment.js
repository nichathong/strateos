// find index of _ ->  look for potential swap from the num
//when rank === index
//do the swap 
//nested or hash

function shortestPossibleMove(containers) { 
    // convert string containers into the ranked array
    let rankArray = convertToNumber(containers); 
    let moveMent = [];
    // console.log(rankArray)

    //find _ =>3 rankArray.length -1
    //find index of _  => 2
    //find rank index to swap
    //e.g if _ is at position 2 -> looking for rank number 2 
    //swap 2, 3 => push position at 2 then position at 3 => [1, 2]
    // [1, 3, 2, 0] 
    // repeat until sorted

    // loop through the ranked array
    for (let i = 0; i < rankArray.length; i++) { 
        let num = rankArray[i];
        const position = i; 
        //find where does underscore is located
        const underScoreIndex = rankArray.indexOf(rankArray.length -1);

        //check if num
        if (num !== position && underScoreIndex !== rankArray.length -1) {
            for (let j = 0; j < rankArray.length; j++ ) {
                if (rankArray[j] === underScoreIndex) { 
                    [rankArray[j], rankArray[underScoreIndex]] = [rankArray[underScoreIndex], rankArray[j]];
                    moveMent.push([j, underScoreIndex]);
                    break;
                }
            }

        } else if (num !== position) {
            for (let j = 1; j < rankArray.length; j++ ) {
                [rankArray[j], rankArray[underScoreIndex]] = [rankArray[underScoreIndex], rankArray[j]];
                moveMent.push([j, underScoreIndex]);
                break;
            } 
        }
        
    }
    return moveMent;
}


function convertToNumber(letters) {
    const alphabets = "abcdefghijklmnopqrstuvwxyz";
    let indexNum = [];

    for (let i = 0;i < letters.length; i++) {
        let letter = letters[i].toLowerCase();
        if (alphabets.includes(letter)) {
            let alphabetNum = letter.charCodeAt(0) - 97;
            indexNum.push(alphabetNum);
        } else {
            indexNum.push(27);
        }
    }

    const rankNum = rankPosition(indexNum);

    return rankNum;
}

function rankPosition(arr) {             
    var sorted = arr.slice().sort(function(a,b){return a-b})
    var ranks = arr.map(function(v){ return sorted.indexOf(v)});
    return ranks;

}

console.log(shortestPossibleMove("BC_A"));
console.log(shortestPossibleMove("A_CB"));
console.log(shortestPossibleMove("_CBA"));
console.log(shortestPossibleMove("ACB_"));
console.log(shortestPossibleMove("_CBA"));  
console.log(shortestPossibleMove("C_BA"));  


