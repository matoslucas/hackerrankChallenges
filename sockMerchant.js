/*
There is a large pile of socks that must be paired by color. Given an array of integers representing the color of each sock, determine how many pairs of socks with matching colors there are.

Example


There is one pair of color  and one of color . There are three odd socks left, one of each color. The number of pairs is .

Function Description

Complete the sockMerchant function in the editor below.

sockMerchant has the following parameter(s):

int n: the number of socks in the pile
int ar[n]: the colors of each sock
Returns

int: the number of pairs
Input Format

The first line contains an integer , the number of socks represented in .
The second line contains  space-separated integers, , the colors of the socks in the pile.
*/
const sockMerchant = (n, ar) => {
    let colors = [];
    return ar.reduce((acc, cur) => {
    let qty = 0;
    if (!colors.includes(cur)) {
        colors.push(cur);
        qty = Math.floor(ar.filter((f) => f === cur).length / 2);
    }
    return (acc += qty);
    }, 0);

}
