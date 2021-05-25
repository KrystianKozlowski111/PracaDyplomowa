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
export const Container = styled.div`
  display: block;
  position: relative;
  width: 100%;
  max-width: 1366px;
  margin: 0 auto;
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
export const ButtonPlace = styled.form`
  display: flex;
  gap: 10px;
  max-width: 100%;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
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
