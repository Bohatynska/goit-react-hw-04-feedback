import styled from '@emotion/styled';

export const FeedbackContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
`;

export const FeedbackButton = styled.button`
  margin-right: 20px;
  margin-top: 15px;
  padding: 10px 20px;
  border-radius: 5px;
  border: 1px solid #000;
  color: #000;
  background-color: #fff;
  cursor: pointer;
  transition: all 0.3s ease;
  &:hover {
    background-color: #000;
    color: #fff;
  }
`;
