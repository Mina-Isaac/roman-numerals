import React, { useState } from "react";
import styled from "styled-components";
import RomanNumerals from "../Utilities/RomanNumerals";
import useDebounce from "../Utilities/debounceHook";

const Container = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: linear-gradient(#5cb8f7, #357dec) fixed;
`;

const Field = styled.div`
  z-index: 1;
  display: flex;
  padding: 1%;
  justify-content: space-around;
  flex-direction: column;
  background: #fff;
  min-width: 30vw;
  max-width: 50vw;
  height: 80vh;
  border-radius: 6px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
  margin: 40px auto;
  overflow: hidden;
`;

const Wrapper = styled.div`
  border: solid 1px black;
  border-radius: 6px;
  padding: 5%;
  dispaly: flex;
  flex-direction: column;
  justify-content: space-evenly;
  height: 40%;
`;

const Input = styled.input`
  display: flex;
  align-items: center;
  border: none;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: space-between;
  width: 100%;
  padding: 15px 15px 15px 20px;
  box-sizing: border-box;
  background: #fff;
  width: 100%;
  border-radius: 100px;
  box-shadow: 0 4px 24px rgba(0, 0, 0, 0.1);
`;

const Err = styled.p`
  color: red;
`;
const Result = styled.p`
  font-weight: bolder;
  word-break: break-all;
`;

const App: React.FC = () => {
  const [decimal, setDecimal] = useState<string>("1");
  const [roman, setRoman] = useState<string>("I");

  function handleChangeRoman(e: React.ChangeEvent<HTMLInputElement>) {
    setRoman(e.target.value);
  }
  function handleChangeDecimal(e: React.ChangeEvent<HTMLInputElement>) {
    setDecimal(e.target.value);
  }

  //Implementing useDebounce hook to enhance both performance and user experience
  const romanErr = RomanNumerals.validateRoman(roman);
  const decimalErr =RomanNumerals.validatePositiveInteger(decimal);
  const debouncedRoman = useDebounce(
    romanErr && RomanNumerals.fromRoman(roman),
    500
  );
  const debouncedDecimal = useDebounce(
    decimalErr && RomanNumerals.toRoman(+decimal),
    500
  );

  return (
    <>
      <Container>
        <h1>Convert integer numbers to Roman numerals and vise versa</h1>
        <Field>
          <Wrapper>
            <Input
              type="number"
              onChange={handleChangeDecimal}
              value={decimal}
              placeholder="Enter an integer"
              min={1}
            />
            {(!debouncedDecimal && (
              <Err>Please enter a valid positive integer</Err>
            )) || <Result>{`In Romans: ${debouncedDecimal}`}</Result>}
          </Wrapper>
          <Wrapper>
            <Input
              type="text"
              onChange={handleChangeRoman}
              value={roman}
              placeholder="Enter a roman numeral"
            />
            {(!debouncedRoman && <Err>Please enter a valid roman numeral</Err>) || (
              <Result>{`In Decimal: ${debouncedRoman}`}</Result>
            )}
          </Wrapper>
        </Field>
      </Container>
    </>
  );
};

export default App;
