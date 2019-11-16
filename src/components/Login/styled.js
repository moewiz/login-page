import styled from 'styled-components';

export const LoginFormWrapper = styled.div`
  flex: 1;
  .forget-pwd {
    display: block;
    font-size: 11px;
    cursor: pointer;
    margin-bottom: 20px;
  }
`;

export const FormTitle = styled.h2`
  font-size: 26px;
  font-weight: 500;
`;

export const SubmitButton = styled.button`
  color: #fff;
  background-color: #009af9;
  padding: 10px 15px
  text-transform: uppercase;
  border: 1px solid #009af9;
  border-radius: 4px;
  min-width: 200px;
  cursor: pointer;
`;

export const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  margin: 5px 0 10px 0;
  
  label {
    font-size: 13px;
  }
  
  input {
    padding: 10px 0px;
    border: none;
    border-bottom: 2px solid #eee;
    font-size: 13px;
    margin: 5px 0;
    color: #333;
    outline: none;
  }
  
  .error {
    color: #d92026;
    font-size: 12px;
  }
`;
