import styled from 'styled-components';
import { Field } from 'formik';

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  font-size: 20px;
  font-weight: 700;
`;
export const Input = styled(Field)`
  min-width: 200px;
  margin-top: 20px;
  padding: 5px;
  outline: none;
`;
export const Btn = styled.button`
  font-size: 20px;
  font-weight: 500;
  margin-top: 20px;
  padding: 2px 10px;
  background-color: white;
  border: 1px solid black;
  border-radius: 5px;
  cursor: pointer;
  :hover {
    box-shadow: 0.5rem 0.5rem 2rem #a7a4a4, -0.5rem -0.5rem 2rem #acabab;
  }
`;
export const FormContainer = styled.div`
  margin: o auto;
  text-align: center;
  background-color: #4d677c;
  border: 1px solid #000;
  border-radius: 4px;
  box-shadow: 0.5rem 0.5rem 2rem #a7a4a4, -0.5rem -0.5rem 2rem #acabab;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 20px;
`;
