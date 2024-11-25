import styled from 'styled-components';


export const MainSection = styled.section`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 50px;
  background-color: #f4f4f4;
`;

export const LeftImage = styled.div`
  flex: 1;
  img {
    width: 100%;
    height: auto;
    border-radius: 8px;
  }
`;

export const RightText = styled.div`
  flex: 1;
  padding-left: 40px;
  h2 {
    color: #23288C;
    font-size: 32px;
    margin-bottom: 20px;
  }
`;

export const Button = styled.button`
  display: flex;
  align-items: center;
  padding: 10px 20px;
  background-color: #23288C;
  color: white;
  border: none;
  border-radius: 30px;
  cursor: pointer;
  font-size: 16px;
  transition: background-color 0.3s;

  &:hover {
    background-color: #1e2570;
  }

  svg {
    margin-left: 10px;
    background-color: white;
    border-radius: 50%;
    padding: 5px;
  }
`;