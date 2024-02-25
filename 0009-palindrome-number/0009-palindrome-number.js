/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
     let rev = x.toString()
    let newarr=""
    for(let i=rev.length-1;i>=0;i--){
        newarr+=rev[i]
        
    }
     return newarr==rev

    
};