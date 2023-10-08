import styled from '@emotion/styled';

export const FeedbackControls = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 15px;
`;

export const Button = styled.button`
  width: 100px;
  height: 40px;
  padding: 5px;
  border-radius: 5px;
  border: none;
  box-shadow: 0 1px 7px #8a9ec1;
  transition: all 0.3s ease;
  font-size: 20px;

  &:hover {
    color: white;
    background-color: #8a9ec1;
    cursor: pointer;
  }
`;
