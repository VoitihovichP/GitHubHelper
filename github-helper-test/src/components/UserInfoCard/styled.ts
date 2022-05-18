import styled from 'styled-components';

export const UserInfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 292px;
  @media (max-width: 767px) {
    align-items: center;
  }
`;

export const UserInfoPhoto = styled.img`
  width: 280px;
  height: 280px;
  border-radius: 50%;
  @media (max-width: 1024px) {
    width: 250px;
    height: 250px;
  }
  @media (max-width: 768px) {
    width: 240px;
    height: 240px;
  }
  @media (max-width: 575px) {
    width: 230px;
    height: 230px;
  }
`;

export const UserInfoName = styled.h2`
  margin-top: 28px;
  font-weight: 600;
  font-size: 26px;
  color: #000000;
  @media (max-width: 768px) {
    font-size: 23px;
  }
  @media (max-width: 575px) {
    margin-top: 20px;
  }
`;

export const UserInfoGithub = styled.a`
  margin-top: 12px;
  font-weight: 400;
  font-size: 18px;
  color: #0064eb;
  @media (max-width: 768px) {
    font-size: 16px;
  }
`;

export const UserFollowingWrapper = styled.div`
  display: flex;
  gap: 20px;
  margin-top: 25px;
  width: 100%;
  @media (max-width: 767px) {
    gap: 0;
    justify-content: space-around;
  }
`;

export const UserFollowingInfo = styled.p`
  font-weight: 400;
  font-size: 16px;
  color: #000000;
  @media (max-width: 768px) {
    font-size: 14px;
  }
`;
