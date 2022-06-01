//==================Exercise #1 ==========//
/*Write a function that takes in the string and the list of dog names, loops through 
the list and checks that the current name is in the string passed in. The output should be:
"Matched dog_name" if name is in the string, if no matches are present console.log "No Matches"
*/
let dog_string = "Hello Max, my name is Dog, and I have purple eyes!"
let dog_names = ["Max","HAS","PuRple","dog"]

function findWords(dn){

    for (let i =0; i < dn.length; i++){
        if (dn[i] === 'dog' || 'Dog'){
            return "Matched dog name";
            break;
        } else;{
            console.log('No Matches')
        }
    }
}


//Call method here with parameters
console.log(findWords(dog_string))
console.log(findWords(dog_names))



//============Exercise #2 ============//
/*Write a fucntion that takes in an array and removes every even index with a splice,
and replaces it with the string "even index" */

// Given 
let arr = ["Max","Baseball","Reboot","Goku","Trucks","Rodger"]

function replaceEvens(ar){
    for(let i = 0; i < ar.length; i += 2) {  
        ar[i]= 'even index'
        return ar;
    }
}
console.log(replaceEvens(arr))

//Expected output
//Given arr == ["Max","Baseball","Reboot","Goku","Trucks","Rodger"]
//Output arr == ["even index","Baseball","even index","Goku","even index","Rodger"]



/* You are given an odd-length array of integers, in which all of them are the same, except for one single number.
Complete the method which accepts such an array, and returns that single different number.
The input array will always be valid! (odd-length >= 3)
Examples
[1, 1, 2] ==> 2
[17, 17, 3, 17, 17, 17, 17] ==> 3 */


let a1 = [1, 1, 2]
let a2 = [17, 17, 19, 17, 17, 17, 17]


function stray(array){
    let a = array.sort();
    if(a[0] != a[1]){
        return a[0]
    }
    return a[a.length-1]
}

console.log(stray(a2))

/*Count the number of divisors of a positive integer n.
Random tests go up to n = 500000.
Examples (input --> output)
4 --> 3 (1, 2, 4)
5 --> 2 (1, 5)
12 --> 6 (1, 2, 3, 4, 6, 12)
30 --> 8 (1, 2, 3, 5, 6, 10, 15, 30)*/

function getDivisorsCnt(n) {
    let div = 0;
    for(let i = 1; i <= n; i++){
    if(n % i == 0) div++;
    }
    return div;
}

console.log(getDivisorsCnt(5))
