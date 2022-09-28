import styled from 'styled-components';

export const ContactWrapper = styled.div`
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
export const ContactList = styled.ul`
  padding: 0;
  margin: 0;
  margin-top: 25px;
`;

export const ContactItem = styled.li`
  display: flex;
  align-items: center;
  margin-top: 5px;
  font-size: 21px;
  font-weight: 600;
  justify-content: space-between;
  :not(:first-child) {
    margin-top: 8px;
  }
`;

export const Delete = styled.button`
  background-color: white;
  margin-left: 20px;
  outline: none;
  border: 1px solid black;
  border-radius: 4px;
  padding: 2px 8px;
  :hover {
    background-color: #4d677c;
    box-shadow: 0.5rem 0.5rem 2rem #a7a4a4, -0.5rem -0.5rem 2rem #acabab;
  }
`;
export const Filter = styled.input`
  width: 200px;
  margin-top: 20px;
  padding: 5px;
  outline: none;
  margin: 0 auto;
`;
