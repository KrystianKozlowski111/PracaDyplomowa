import styled from 'styled-components';

import { Media } from '../../assets/Mixins.style';
import { Colors } from '../../assets/Variables.style';

export const Wrapper = styled.div`
  display: block;
  width: 100%;
  font-size: 16px;
  background-color: ${Colors.silver};
  padding: 10px 30px;
  ${Media.md`
    padding: 5px 10px;
  `}
`;
export const Container = styled.div`
  display: flex;
  width: 100%;
  max-width: 1366px;
  align-items: center;
  margin: 0 auto;
  justify-content: space-between;
`;
export const Logo = styled.img`
  display: block;
  max-width: 80px;
  object-fit: contain;
`;
export const ButtonPlace = styled.form`
  display: flex;
  gap: 10px;
  align-items: center;
`;
export const Button = styled.a`
  padding: 10px 20px;
  background-color: ${Colors.darkBlue};
  border: 0;
  text-decoration: none;
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
export const ButtonW = styled.button`
  padding: 10px 20px;
  background-color: ${Colors.darkBlue};
  border: 0;
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
