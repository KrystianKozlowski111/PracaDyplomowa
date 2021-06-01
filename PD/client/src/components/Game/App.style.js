import styled from 'styled-components';

import { Media } from '../../assets/Mixins.style';
import { Colors } from '../../assets/Variables.style';
export const GridPlace = styled.div`
  display: grid;
  margin-top: 15px;
  margin-bottom: 15px;
  gap: 10px;
  max-width: 100%;
  grid-template-columns: 1fr 3fr 2fr;
  align-items: top;
  justify-items: center;
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
export const Input = styled.input`
  padding: 10px;
  border: 1px solid ${Colors.dove};
  border-radius: 8px;
  font-size: 16px;
  width: 200px;
  max-width: 100%;
`;
export const Table = styled.table`
  border-collapse: collapse;
  margin: 0 auto;
  border: 1px solid ${Colors.darkBlue};
  width: 700px;
  font-size: 22px;
`;
export const Td = styled.td`
  padding: 10px;
  text-align: center;

  border: 1px solid ${Colors.darkBlue};
`;
export const Th = styled.th`
  padding: 10px;
  border: 1px solid ${Colors.darkBlue};
  background-color: ${Colors.white};
`;
export const Tr = styled.tr`
  &:nth-child(2n-1) {
    background-color: #f5f5f5;
  }
`;
export const GridHolder = styled.div`
  padding-top: 14px;
  max-width: 100%;
`;
export const GridRightHolder = styled.div`
  padding-top: 14px;
`;
export const ErrorText = styled.h1`
  width: 100%;
  color: ${Colors.red};
  font-size: 14px;
  font-weight: bold;
  text-align: left;
`;
export const ButtonPlace = styled.div`
  display: flex;
  margin-top: 15px;
  margin-bottom: 15px;
  gap: 10px;
  max-width: 100%;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
`;
export const InputCheck = styled.input`
  position: absolute;
  z-index: -1;
  opacity: 0;
  &:checked ~ label:before {
    content: '✔️';
  }
`;
export const LabelCheck = styled.label`
  display: block;
  position: relative;
  line-height: 1.6;
  padding: 10px 0px 10px 30px;
  font-size: 16px;
  &:before {
    display: flex;
    left: 0;
    align-items: center;
    justify-items: center;
    position: absolute;
    content: ' ';
    width: 20px;
    height: 20px;
    border: 1px solid ${Colors.darkBlue};
    border-radius: 6px;
  }
`;
export const FormHolder = styled.form`
  max-width: 100%;
  padding-bottom: 20px;
`;
export const Button = styled.button`
  padding: 5px 10px;
  background-color: ${Colors.white};
  border: 1px solid ${Colors.darkBlue};
  cursor: pointer;
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
export const Title = styled.div`
  font-size: 30px;
  text-align: center;
  padding-bottom: 20px;
`;
