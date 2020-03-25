import { positiveIntPattern, strictRomanPattern } from "../constants";

type indexOfRomanBaseDigits = keyof typeof RomanNumerals.RomanBaseDigits;
const RomanNumerals = {
  RomanBaseDigits: {
    M: 1000,
    CM: 900,
    D: 500,
    CD: 400,
    C: 100,
    XC: 90,
    L: 50,
    XL: 40,
    X: 10,
    IX: 9,
    V: 5,
    IV: 4,
    I: 1
  },
  //This method is internally validated since it returns undefined for negative or floating point numbers
  toRoman(decNum: number): string | undefined {
    if (!Number.isInteger(decNum) || decNum <= 0) return;
    let answer = "";
    for (let digit in this.RomanBaseDigits) {
      const integerQuotient = Math.trunc(
        decNum / this.RomanBaseDigits[digit as indexOfRomanBaseDigits]
      );
      decNum = decNum % this.RomanBaseDigits[digit as indexOfRomanBaseDigits];
      answer += digit.repeat(integerQuotient);
    }
    return answer;
  },
  //This method is internally validated since it returns NaN for an input that is invalid Roman Numeral
  fromRoman(romanString: string): number {
    let sum = 0;
    let max = 0;
    const len = romanString.length;
    for (let i = len - 1; i >= 0; i--) {
      const decimalValue = this.RomanBaseDigits[
        romanString[i] as indexOfRomanBaseDigits
      ];
      sum += decimalValue >= max ? decimalValue : -decimalValue;
      max = Math.max(max, decimalValue);
    }
    return sum;
  },
  //This method validates a user input againist a Regex for positive integers
  validatePositiveInteger(num: string): boolean {
    return positiveIntPattern.test(num);
  },
  //This method validates a user input againist a Regex for Roman numerals
  validateRoman(romanString: string): boolean {
    return strictRomanPattern.test(romanString);
  }
};
export default RomanNumerals;
