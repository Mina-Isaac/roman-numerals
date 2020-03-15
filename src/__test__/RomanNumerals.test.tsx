import RomanNumerals from "../Utilities/RomanNumerals";
import { sampleRoman } from "./fixtures/romanStrings";
import { sampleDecimal } from "./fixtures/decimalNumbers";

describe(`RomanNumerals.`, () => {
  it(`converts Roman numerals to decimal intigers correctly`, () => {
    const output = sampleRoman.map(item => RomanNumerals.fromRoman(item));
    expect(output).toEqual(sampleDecimal);
  });
  it(`converts decimal intigers to Roman numerals correctly`, () => {
    const output = sampleDecimal.map(item => RomanNumerals.toRoman(item));
    expect(output).toEqual(sampleRoman);
  });
});
