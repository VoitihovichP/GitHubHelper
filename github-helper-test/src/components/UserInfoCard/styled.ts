import styled from 'styled-components';

export const UserInfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 292px;
`;

export const UserInfoPhoto = styled.img`
  width: 280px;
  height: 280px;
  border-radius: 50%;
`;

export const UserInfoName = styled.h2`
  margin-top: 28px;
  font-weight: 600;
  font-size: 26px;
  color: #000000;
`;

export const UserInfoGithub = styled.a`
  margin-top: 12px;
  font-weight: 400;
  font-size: 18px;
  color: #0064eb;
`;

export const UserFollowingWrapper = styled.div`
  display: flex;
  gap: 20px;
  margin-top: 25px;
  width: 100%;
`;

export const UserFollowingInfo = styled.p`
  font-weight: 400;
  font-size: 16px;
  color: #000000;
`;
