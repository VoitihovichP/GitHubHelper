import styled from 'styled-components';

export const SearchInputWrapper = styled.div`
  position: relative;
`;

export const InputForSearch = styled.input<{ isEmpty: boolean }>`
  padding: 8px 0 9px 42px;
  width: 500px;
  min-height: 40px;
  font-weight: 400;
  font-size: 14px;
  letter-spacing: 0.01em;
  box-shadow: ${(props) => (props.isEmpty ? 'inset 0px 0px 10px #ff0000' : 'none')};
  border: none;
  border-radius: 6px;
  outline: none;
  transition: 0.3s all;
  @media (max-width: 768px) {
    min-height: 30px;
  }
  @media (max-width: 576px) {
    padding-left: 26px;
    width: 250px;
  }
`;

export const SearchIcon = styled.img`
  position: absolute;
  top: 50%;
  left: 3%;
  transform: translateY(-50%);
`;
