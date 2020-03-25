import RomanNumerals from "../Utilities/RomanNumerals";
import { sampleRoman, invalidRomans } from "./fixtures/romanStrings";
import { sampleDecimal, invalidDecimals } from "./fixtures/decimalNumbers";

describe(`RomanNumerals.`, () => {
  it(`converts Roman numerals to decimal intigers correctly`, () => {
    const output = sampleRoman.map(item => RomanNumerals.fromRoman(item));
    expect(output).toEqual(sampleDecimal);
  });
  it(`converts decimal intigers to Roman numerals correctly`, () => {
    const output = sampleDecimal.map(item => RomanNumerals.toRoman(item));
    expect(output).toEqual(sampleRoman);
  });
  it(`returns false for invalid Roman numeral strings`, () => {
    const output = invalidRomans.map(item => RomanNumerals.validateRoman(item));
    const expected = invalidRomans.map(item=>false)
    expect(output).toStrictEqual(expected);
  });
  it(`returns undefined for invalid decimals`, () => {
    const output = invalidDecimals.map(item => RomanNumerals.toRoman(item));
    const expected = invalidDecimals.map(item=>undefined)
    expect(output).toStrictEqual(expected);
  });
});
