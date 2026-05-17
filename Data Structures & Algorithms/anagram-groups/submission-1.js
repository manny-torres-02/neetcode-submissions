class Solution {
  /**
   * @param {string[]} strs
   * @return {string[][]}
   */
  groupAnagrams(strs) {
    // Identify how many string have a count of  apattern of characters
    // 1 e, 1 a , 1 t  - this will be the key, then this will be followed by the the strings that meet the key
    // object/map to hold the key and the strings that meet the key
    const map = new Map();

    // iterate through the inital array
    for (let i = 0; i < strs.length; i++) {
      let count = new Array(26).fill(0); // 26 letters in the alphabet

      // iterate through each letter in the array
      for (let num = 0; num < strs[i].length; num++) {
        // increment the count of the letter in the array
        count[strs[i].charCodeAt(num) - "a".charCodeAt(0)] += 1;
      }
      // check if the key exists in the map
      // this creates they key, and joins the elements of the array with # as a separator
      let key = count.join("#");
      // if it does not exist, add the key and the string to the map
      if (!map.has(key)) {
        map.set(key, [strs[i]]);
      } else {
        // if it does exist, add the string to the key
        map.get(key).push(strs[i]);
      }
      // map.set(count, map.get(count) ? [...map.get(count), strs[i]] : [strs[i]]);
    }
return Array.from(map.values());
  }
}