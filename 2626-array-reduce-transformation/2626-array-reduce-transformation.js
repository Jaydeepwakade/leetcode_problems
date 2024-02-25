/**
 * @param {number[]} nums
 * @param {Function} fn
 * @param {number} init
 * @return {number}
 */
 nums=[1,2,3,4];
 
// function sum(accum , curr){
//    return accum+curr
//  }
//  function sum2(accum,curr){
//      return accum+curr*curr
//  }
 
 var reduce = function(nums, fn, init) {
    let res= init;
    for(let i=0;i<nums.length;i++){
        res= fn(res,nums[i])

    }
    return res
};
 


