/*
There is a string, , of lowercase English letters that is repeated infinitely many times. Given an integer, , find and print the number of letter a's in the first  letters of the infinite string.

Example


The substring we consider is , the first  characters of the infinite string. There are  occurrences of a in the substring.

Function Description

Complete the repeatedString function in the editor below.

repeatedString has the following parameter(s):

s: a string to repeat
n: the number of characters to consider
Returns

int: the frequency of a in the substring
Input Format

The first line contains a single string, .
The second line contains an integer, .


*/

function getQtyAs(a,c){
    if(c==="a"){
        a +=1;
    }
    return a;   
}

function repeatedString(s, n) {
   if(s.length===1 && s==="a") return n;
    const letters = s.split("");
    const repeatedTimes = Math.floor(n/s.length);
    const qty  = letters.reduce(getQtyAs,0);
    const resto=n%s.length;
    if(qty ===0) return 0;
    const tail = s.slice(0, resto).split("");
    const qtyTail = tail.reduce(getQtyAs,0);
   
    return   qty * repeatedTimes + qtyTail ;
}
