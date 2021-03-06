module.exports = {
  noRepeatCharLongestSubString,
  KUniqueCharLongestSubString,
  bracketMatcher,
};

/**
 * @param {String} str
 * @return {String} returns the longest substring without two same characters
 */
function noRepeatCharLongestSubString(str) {
  let subString = "";
  let subQueue = [];
  let startIndex = 0;
  let freqChar = {};

  for (let endIndex = 0; endIndex < str.length; endIndex++) {
    let endChar = str[endIndex];

    if (!Object.keys(freqChar).includes(endChar)) {
      freqChar[endChar] = 0;
    }

    freqChar[endChar]++;

    // when we have two same unique characters
    if (freqChar[endChar] > 1) {
      if (subQueue.length == 0) {
        subQueue.push(subString);
      } else {
        if (subQueue[0].length < subString.length) {
          subQueue.pop();
          subQueue.push(subString);
        }
      }
    }

    while (freqChar[endChar] > 1) {
      let startChar = str[startIndex];
      freqChar[startChar]--;
      if (freqChar[startChar] == 0) {
        delete freqChar[startChar];
      }
      startIndex++;
      subString = subString.substring(1, subString.length);
    }

    subString += endChar;
  }

  return subString.length >= (subQueue.length != 0 ? subQueue[0].length : 0)
    ? subString
    : subQueue[0];
}

/**
 * @param {String} str
 * @param {Number} kUniqueChar number of unique characters (by default 2)
 * @param {Number} startAt index in which we start the search (by default 0)
 * @return {String} returns the longest substring with K unique characters of a given string ; otherwise empty
 */
function KUniqueCharLongestSubString(str, kUniqueChar = 2, startAt = 0) {
  let subString = ""; // current substring
  let subQueue = []; // substring queue
  let startIndex = startAt;
  let freqChar = {}; // number of occurrences of unique chars
  let displaySubArray = []; // contains all possible long substrings with 2 unique chars

  for (let endIndex = startAt; endIndex < str.length; endIndex++) {
    let endChar = str[endIndex];

    // this key is not found in obj
    if (!freqChar[endChar]) {
      freqChar[endChar] = 0;
    }

    // increment by 1 the nb of occurrences of a unique char
    freqChar[endChar]++;

    // when exceeds more than K unique chars
    // update subQueue + displaySubArray
    // as long as the condition below is verified
    if (Object.keys(freqChar).length > kUniqueChar) {
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

    // when exceeds more than K unique chars
    // update frequency of unique chars in obj + start index of the string
    // as long as the condition below is verified
    while (Object.keys(freqChar).length > kUniqueChar) {
      let startChar = str[startIndex];
      // decrement by 1 the nb of occurrences of a unique char
      freqChar[startChar]--;
      if (freqChar[startChar] == 0) delete freqChar[startChar]; // remove it from obj when reach 0
      // increment by 1 the start index
      startIndex++;
      // remove first char in the substring until we reach another substring with K diff unique chars
      subString = subString.substring(1, subString.length);
    }

    // update substring
    subString += endChar;
  }

  // add the last subString
  displaySubArray.push(subString);
  // display all possible long substrings with K unique chars
  // console.log(displaySubArray);

  // verify the last subString with the one in queue to return the longest one
  return subString.length >= (subQueue.length > 0 ? subQueue[0].length : 0) // subQueue is empty if we have at most one longest substring
    ? subString
    : subQueue[0];
}

/**
 * @param {String} str
 * @return {Number} returns 1 if no brackets in the stack ; otherwise 0
 */
function bracketMatcher(str) {
  let bracketStack = [];
  const leftBracket = "(",
    rightBracket = ")";

  for (let index = 0; index < str.length; index++) {
    let char = str[index];

    // is leftBracket, push char in the stack
    if (char == leftBracket) bracketStack.push(char);
    // is rightBracket, remove the latest added from the stack
    else if (char == rightBracket) {
      // remove a leftBracket if we have a match with a rightBracket
      if (bracketStack.length > 0) bracketStack.pop();
      else return 0; // false if no leftBrackets in the stack
    }
  }

  // verify if the stack is empty
  return bracketStack.length == 0 ? 1 : 0;
}
