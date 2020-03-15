//Regex for positive intigers
const positiveIntPattern = /^[0-9]*[1-9][0-9]*$/;

//A loose and a strict Regex for modern Roman numerals source:
//https://www.oreilly.com/library/view/regular-expressions-cookbook/9780596802837/ch06s09.html
const romanPattern = /^(?=[MDCLXVI])M*(C[MD]|D?C*)(X[CL]|L?X*)(I[XV]|V?I*)$/;
const strictRomanPattern = /^(?=[MDCLXVI])M*(C[MD]|D?C{0,3})(X[CL]|L?X{0,3})(I[XV]|V?I{0,3})$/;

export {positiveIntPattern, romanPattern, strictRomanPattern };
