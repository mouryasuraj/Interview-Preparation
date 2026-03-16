


/*

JavaScript Deep Dive

Starting with let, var, const

Hoisting

Promises

Event Loop

null vs undefined

== vs ===

ES6 Features

Output-based questions



React

React vs Angular

Virtual DOM vs Actual DOM

Hooks

Optimization techniques

Props vs State

API was given and I had to make dropdown list and allow selection


Round 2 – Managerial + Technical Round

Deep dive into my projects

My roles and responsibilities

Writing test cases

Code PR and deployment process

He gave a code with a bug and I had to resolve it and explain it


*/



// Write a funtion to find length of the longest balanced subsequence parenthesis eg: "()()()" - 6 length, "(()()) - 6 length"

function findLongestSequenceCharacter(str){

    let opens = 0; 
    let pairs = 0;

    for(let s of str){
        if(s==="("){
            opens++;
        }else if(s===")"){
            console.log("Opens:",opens)
            if(opens>0){
                opens--;
                pairs++
            }
        }
    }
    return 2 * pairs;
}

// console.log(findLongestSequenceCharacter("))))(((("))



function findTheMaxRequestWithinWindowsize (timestamps,windowSize){
    timestamps.sort((a, b) => a - b);

    let left = 0;
    let maxCount = 0;

    for (let right = 0; right < timestamps.length; right++) {

        // Shrink window if it exceeds windowSize
        while (timestamps[right] - timestamps[left] > windowSize) {
            left++;
        }

        // Current window size
        let currentCount = right - left + 1;

        // Update maximum
        maxCount = Math.max(maxCount, currentCount);
    }

    return maxCount;

}

// console.log(findTheMaxRequestWithinWindowsize([1,2,2,3,4,5,6,7,10,12],6))



// Vowel question - find fi

function findTheFirstVowelandAddConsonantAttheendandAddAY (str){
    const vowels = "aeiouAEIOU";

    if(vowels.includes(str[0])){
        return str+"ay"
    }
    

    let consonant = "";
    let newStr = ""

    for(const s of str){
        if(vowels.includes(s)){
            consonant = str.substring(0,str.indexOf(s))
            newStr = str.substring(str.indexOf(s)) + consonant + "ay"
            return newStr;
        }
    }

}
// console.log(findTheFirstVowelandAddConsonantAttheendandAddAY("suraj"));



function findSmallestString (s){
    const arr = s.split("");
    let i=0;

    while(i<arr.length && i==="a"){
        i++
    }
    
    if(i===arr.length && ){
        arr[arr.length-1] = "z"
    }

}

console.log(findSmallestString("asurajmourya"));

// 