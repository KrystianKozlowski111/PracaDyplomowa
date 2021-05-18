import styled from 'styled-components';

import { Media } from '../../assets/Mixins.style';
import { Colors } from '../../assets/Variables.style';

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
