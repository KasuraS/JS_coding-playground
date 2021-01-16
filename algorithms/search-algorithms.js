module.exports = {
  twoKUniqueCharLongestSubString,
};

function twoKUniqueCharLongestSubString(str) {
  let subString = ""; // current substring
  let subQueue = []; // substring queue
  let startIndex = 1;
  let freqChar = {}; // number of occurrences of unique chars
  let displaySubArray = []; // contains all possible long substrings with 2 unique chars

  // ignore the first char, we start at the second char of the string
  for (let endIndex = 1; endIndex < str.length; endIndex++) {
    let endChar = str[endIndex];

    // this key is not found in obj
    if (!freqChar[endChar]) {
      freqChar[endChar] = 0;
    }

    // increment by 1 the nb of occurrences of a unique char
    freqChar[endChar]++;

    // when exceeds more than 2 unique chars
    // update subQueue + displaySubArray
    // as long as the condition below is verified
    if (Object.keys(freqChar).length > 2) {
      // add substring in the queue
      if (subQueue.length == 0) {
        subQueue.push(subString);
        displaySubArray.push(subString); // add substring in the queue in the display substring array
      } else {
        // contains one substring in obj
        // replace substring in the queue by the current substring if the length of the former is less than the latter
        if (subQueue[0].length < subString.length) {
          subQueue.pop();
          subQueue.push(subString);
        } else {
          // we keep substring in the queue if its length is equal or greater than the current one
          if (!displaySubArray.includes(subString))
            displaySubArray.push(subString); // add all other substrings in the display substring array
        }
      }
    }

    // when exceeds more than 2 unique chars
    // update frequency of unique chars in obj + start index of the string
    // as long as the condition below is verified
    while (Object.keys(freqChar).length > 2) {
      let startChar = str[startIndex];
      // decrement by 1 the nb of occurrences of a unique char
      freqChar[startChar]--;
      if (freqChar[startChar] == 0) delete freqChar[startChar]; // remove it from obj when reach 0
      // increment by 1 the start index
      startIndex++;
      // remove first char in the substring until we reach another substring with 2 diff unique chars
      subString = subString.substring(1, subString.length);
    }

    // update substring
    subString += endChar;
  }

  // add the last subString
  displaySubArray.push(subString);
  // display all possible long substrings with 2 unique chars
  //console.log(displaySubArray);

  // verify the last subString with the one in queue to return the longest one
  return subString.length > subQueue[0].length ? subString : subQueue[0];
}
