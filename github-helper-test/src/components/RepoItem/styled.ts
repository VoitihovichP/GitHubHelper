import styled from 'styled-components';

export const RepoItemWrapper = styled.div`
  padding: 24px 32px;
  width: 100%;
  min-height: 112px;
  background: #ffffff;
  border-radius: 6px;
  @media (max-width: 1024px) {
    min-height: 100px;
  }
  @media (max-width: 575px) {
    padding: 15px;
    overflow-wrap: break-word;
  }
`;

export const RepoItemTitle = styled.a`
  font-weight: 500;
  font-size: 24px;
  line-height: 29px;
  text-decoration: none;
  color: #0064eb;
  @media (max-width: 767px) {
    font-size: 21px;
  }
`;

export const RepoItemDescr = styled.p`
  margin-top: 16px;
  font-weight: 400;
  font-size: 16px;
  color: #000000;
  @media (max-width: 1024px) {
    font-size: 14px;
  }
  @media (max-width: 767px) {
    margin-top: 8px;
  }
`;
