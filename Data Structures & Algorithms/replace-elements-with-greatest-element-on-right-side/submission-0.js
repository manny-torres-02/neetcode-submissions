class Solution {
    /**
     * @param {number[]} arr
     * @return {number[]}
     */
    replaceElements(arr) {
        //set up the max value as -1
        let greatestNum = -1;

        //cycle through the array
        //traverse the array from right to left using the index i
        for (let i = arr.length - 1; i >= 0; i--) {
            //set the current value to compare against the latest value
            const currentValue = arr[i];

            // The current index of the array is set to the greatest value 
            // since we are moving right to left, they set the value to -1

            arr[i] = greatestNum;
            
            // if the currentValue is greater than the current greater value 
            //Then set the greatest value to that 
            if (currentValue > greatestNum) {
                greatestNum = currentValue;
            }
        }
        return arr 
    }
}
