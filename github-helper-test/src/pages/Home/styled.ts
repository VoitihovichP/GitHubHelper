import styled from 'styled-components';

export const HomeBlock = styled.div`
  padding: 28px 56px;
  min-height: calc(100vh - 72px);
  background: #f9f9f9;
`;

export const MainInfoWrapper = styled.div`
  display: flex;
  height: 100%;
  gap: 85px;
  @media (max-width: 1024px) {
    justify-content: center;
  }
`;

export const Repos = styled.div`
  width: 100%;
`;

export const ReposTitle = styled.h1`
  margin-bottom: 29px;
  font-weight: 600;
  font-size: 32px;
  color: #000000;
`;

export const ReposWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

export const WarningForRepo = styled.div`
  position: relative;
  width: 100%;
`;
