class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    findMaxConsecutiveOnes(nums) {
        let res = 0 
        let count = 0 

    for (const num of nums) {

       //if there is a current index is 1, then increment count
       //else reset to 0 

       if (num === 1 ) {
        count += 1 
                        res = Math.max(res, count);

       } else (
        count =0
       )
    }
       return res 

}
}
