import styled from 'styled-components';
import { Wrapper } from '../GlobalStyle';
import { useHistory } from 'react-router-dom';
import { useEffect } from 'react';
import { useQuizContext } from '../context/AppContext';
const HomePage = () => {
  const { reset } = useQuizContext();
  const history = useHistory();
  const handleStart = () => history.push('/category');
  return (
    <Wrapper>
      <Title>Welcome to the quiz!</Title>
      <SubTitle>Create by @daovanluong</SubTitle>
      <Button onClick={handleStart}>Start quiz</Button>
    </Wrapper>
  );
};

const Title = styled.h2`
  font-size: 50px;
  font-weight: 600;

  @media (max-width: 750px) {
    font-size: 32px;
  }

  @media (max-width: 550px) {
    font-size: 28px;
  }
`;

const SubTitle = styled.h4`
  font-size: 20px;
  font-weight: 500;
  margin: 16px;
`;

const Button = styled.button`
  background-color: var(--secondary-color);
  padding: 16px 32px;
  color: var(--text-color);
  font-size: 18px;
  border-radius: 40px;
  text-transform: uppercase;
  @media (max-width: 750px) {
    padding: 12px 24px;
  }
`;

export default HomePage;
