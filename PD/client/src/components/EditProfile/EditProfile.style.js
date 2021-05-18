import styled from 'styled-components';

import { Media } from '../../assets/Mixins.style';
import { Colors } from '../../assets/Variables.style';

export const Wrapper = styled.div`
  display: block;
  width: 100%;
  max-width: 100%;
  height: 100%;
  background-color: ${Colors.white};
  padding: 50px 30px;
  ${Media.md`
    padding: 20px 10px;
  `}
`;
export const Modal = styled.div`
  display: flex;
  position: fixed;
  align-items: center;
  top: 0;
  bottom: 0;
  left: 0; 
  right: 0;
  background-color: #00000088;
`;
export const ModalBox = styled.div`
position: relative;

width: 50%;
max-width: 1366px;
padding: 30px;
background-color: ${Colors.white};
margin: auto;
`;
export const Container = styled.div`
  display: block;
  position: relative;
  width: 100%;
  max-width: 1366px;
  margin: 0 auto;
`;
export const ButtonPlace = styled.form`
  display: flex;
  gap: 10px;
  max-width: 100%;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
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
export const Info = styled.div`
  color: ${Colors.green};
  font-size: 20px;
  padding-bottom: 15px;
  font-weight: bold;
  text-align: center;
`;
export const ErrorInfo = styled.div`
  color: ${Colors.red};
  font-size: 20px;
  padding-bottom: 15px;
  text-align: center;
`;