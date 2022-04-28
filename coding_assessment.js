function shortestPossibleMove(containers) { 
    //convert string containers into the ranked array
    //the element of rankArray reperesent which index of that element belong to 
    let rankArray = convertToNumber(containers); 
    let moveMent = [];

    // loop through the ranked array
    for (let i = 0; i < rankArray.length; i++) { 
        let num = rankArray[i];
        const position = i; 
        //find where does underscore is located
        const underScoreIndex = rankArray.indexOf(rankArray.length -1);

        //check if element === position? && if underScore index is not at the end
        // this is mean the array is not sorted and needed to be sorted
        if (num !== position && underScoreIndex !== rankArray.length -1) {
            for (let j = 0; j < rankArray.length; j++ ) {
                //We want to swap at the position where the underscoreIdex value is the same as the element rankArray[j]
                //check if element is the as underscore index. If they are the same. It means that, we want to swap between element and underscore
                if (rankArray[j] === underScoreIndex) { 
                    //swap
                    [rankArray[j], rankArray[underScoreIndex]] = [rankArray[underScoreIndex], rankArray[j]];
                    //push the indices of the swap values
                    moveMent.push([j, underScoreIndex]);
                    break;
                }
            }
        
        //check if element === position? && underScore index can be at the end 
        // I need to create this condition because once the underScore index is at the correct position the array stop sorting
        } else if (num !== position) {
            for (let j = 1; j < rankArray.length; j++ ) {
                //Swap the middle element with underscore even underscore are at the correct position(the end of array)
                //I also avoid swap witht the first index because it will not succesfully sorted 
                [rankArray[j], rankArray[underScoreIndex]] = [rankArray[underScoreIndex], rankArray[j]];
                 //push the indices of the swap values
                moveMent.push([j, underScoreIndex]);
                break;
            } 
        }
        
    }

    //return pairs of indices of robotic arms move;
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
            //if indexNum === "_" then push number 27
            indexNum.push(27);
        }
    }

    const rankNum = rankPosition(indexNum);

    return rankNum;
}

function rankPosition(arr) {
    //call arr.slice to make a copy of arr and then called sort() to return a sorted version of arr sorted in ascending order             
    var sorted = arr.slice().sort((a, b) => a - b)
    //call arr.map that return the position of the sorted array the arr entry 'value' is in
    var ranks = arr.map(value => sorted.indexOf(value));
    return ranks;

}

//Test cases
console.log(shortestPossibleMove("BC_A")); //example
console.log(shortestPossibleMove("A_CB"));
console.log(shortestPossibleMove("_CBA"));
console.log(shortestPossibleMove("ACB_"));
console.log(shortestPossibleMove("_CBA"));  
console.log(shortestPossibleMove("C_BA"));  

//Notes
//If I have more time will try to use hash map to improve the time complexity


