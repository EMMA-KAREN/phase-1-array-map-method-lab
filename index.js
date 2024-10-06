const tutorials = [
  'what does the this keyword mean?',
  "What Is The Constructor OO Pattern?",
  "Implementing Blockchain Web API",
  'the test driven development workflow',
  'What Is NaN And How Can We Check For It',
  'What Is The Difference Between StopPropagation And PreventDefault?',
  'immutable state and pure functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'What Is JSONP?'
];

const titleCased = () => {
  return tutorials.map(tutorial => {
    return tutorial
      .split(' ')
      .map(word => {
        // Capitalize first letter and keep the rest as-is
        return word.replace(/(^\w{1})|\B\w/, match => match.toUpperCase());
      })
      .join(' ');
  });
};
// Example usage
console.log(titleCased());
