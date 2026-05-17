class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        
        const exists= new Set(nums)

        console.log(exists)



        //create the hashmap
        //if the map is less than the array then the return true
        //else return false 
        console.log('exists.length', exists.size)
        console.log('nums.length', nums.length)

        if(exists.size < nums.length) {
            return true 
        } else { 
            return false
        }
    }
}
