import styled from 'styled-components';

import { Media } from '../../assets/Mixins.style';
import { Colors } from '../../assets/Variables.style';

export const Wrapper = styled.div`
  display: block;
  width: 100%;
  height: 100%;
  background-color: ${Colors.white};
  padding: 50px 30px;
  ${Media.md`
    padding: 20px 10px;
  `}
`;
export const Container = styled.div`
  display: block;
  width: 100%;
  max-width: 1366px;
  margin: 0 auto;
`;
export const Text = styled.h1`
  width: 100%;
  font-size: 28px;
  font-weight: bold;
  text-align: center;
`;
export const ErrorText = styled.h1`
  width: 100%;
  color: ${Colors.red};
  font-size: 14px;
  font-weight: bold;
  text-align: left;
`;
export const ButtonPlace = styled.form`
  display: flex;
  gap: 10px;
  max-width: 100%;
  align-items: center;
  flex-wrap: wrap;
  justify-content: flex-start;
`;
export const Input = styled.input`
  padding: 10px;
  border: 1px solid ${Colors.dove};
  border-radius: 8px;
  font-size: 16px;
  width: 400px;
  max-width: 100%;
`;
export const ButtonW = styled.button`
  padding: 10px 20px;
  background-color: ${Colors.darkBlue};
  border: 0;
  font-size: 16px;
  border-radius: 8px;
  color: ${Colors.white};
  &:hover {
    color: ${Colors.white};
    text-decoration: none;
    opacity: 0.9;
  }
  ${Media.md`
    padding: 10px;
  `}
`;
export const ErrorInfo = styled.div`
  color: ${Colors.red};
  font-size: 20px;
  padding-bottom: 15px;
  text-align: center;
`;
