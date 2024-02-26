/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
     s= s.trim()
    let x=s.split(" ")
    let newarr=""
    for(let i=0;i<x.length;i++){
         newarr= x[i]
    }
    console.log(newarr)
    return newarr.length
};