import styled from 'styled-components';

export const HeaderBlock = styled.header`
  padding: 14px 41px;
  display: flex;
  align-items: center;
  gap: 22px;
  width: 100%;
  min-height: 72px;
  background: #0064eb;
  @media (max-width: 1024px) {
    justify-content: center;
    min-height: 67px;
  }
  @media (max-width: 768px) {
    gap: 15px;
    min-height: 52px;
  }
  @media (max-width: 567px) {
    padding: 10px 29px;
  }
`;
export const Logo = styled.img`
  @media (max-width: 567px) {
    width: 35px;
  }
`;
