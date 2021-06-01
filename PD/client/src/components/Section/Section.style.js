import styled from 'styled-components';
import { Media } from '../../assets/Mixins.style';
import { Colors } from '../../assets/Variables.style';
export const Wrapper = styled.div`
  display: block;
  width: 100%;
  height: 100%;
  background-color: ${Colors.white};
  padding: 50px 30px;
  box-sizing: border-box;
  ${Media.md`
    padding: 20px 10px;
  `}
`;
export const Container = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  max-width: 1366px;
  margin: 0 auto;
`;
