import React from 'react';
import { Wrapper } from '../GlobalStyle';
import styled from 'styled-components';
import { useQuizContext } from '../context/AppContext';
import { useHistory } from 'react-router-dom';
// import { Content, Question, Answer, AnswerItem } from './QuestionsPage';

const ResultPage = () => {
  const history = useHistory();
  const { questions, results, reset } = useQuizContext();
  const goBack = () => {
    reset();
    history.push('/');
    console.log(reset);
  };
  return (
    <Wrapper>
      <Title>Congratulations!!! You've done your quiz!</Title>
      <Title>
        Total true answers:{' '}
        {
          results.filter((a) => {
            const quesNum = a.index;
            const ansNum = a.chosenOption;
            return questions[quesNum].answers[ansNum].isCorrect;
          })?.length
        }
        /10
      </Title>
      <Button onClick={goBack}>Go back to homepage</Button>
      <Content>
        {questions.map((q, index) => {
          return (
            <>
              <Question
                dangerouslySetInnerHTML={{
                  __html: questions && questions[index]?.label,
                }}
              />
              <Answer>
                {questions &&
                  questions[index]?.answers?.map((a, _index) => {
                    return (
                      <AnswerItem
                        key={_index}
                        isChosen={a.isCorrect}
                        isWrong={
                          !a.isCorrect && results[index].chosenOption === _index
                        }
                        // onClick={() => handleChoseAnswer(index)}
                      >
                        {a.label}
                      </AnswerItem>
                    );
                  })}
              </Answer>

              <div style={{ height: '50px' }}></div>
            </>
          );
        })}
      </Content>
    </Wrapper>
  );
};

const Title = styled.h2`
  color: var(--text-color);
  margin: 5px;
  text-align: center;
`;
export const Button = styled.button`
  padding: 5px 8px;
  border-radius: 4px;
  background-color: var(--text-color);
  color: var(--secondary-color);
  font-size: 12px;
  font-weight: 500;
  margin-top: 10px;
  background-color: var(--secondary-color);
  color: var(--text-color);
  padding: 10px;
  margin-bottom: 30px;
`;
export const Content = styled.div`
  max-width: 95%;
  width: 800px;
`;

export const Question = styled.div`
  width: 100%;
  background-color: var(--dark-color);
  padding: 25px 20px;
  border-radius: 4px;
  font-weight: 500;
  margin-bottom: 20px;

  @media (max-width: 550px) {
    font-size: 14px;
  }
`;

export const Answer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 20px;
  @media (max-width: 500px) {
    grid-template-columns: 1fr;
  }
`;

export const AnswerItem = styled.div`
  background-color: ${({ isChosen, isWrong }) =>
    !isChosen
      ? isWrong
        ? 'var(--secondary-color)'
        : 'var(--text-color)'
      : 'var(--dark-color)'};
  color: ${({ isChosen, isWrong }) =>
    isChosen
      ? 'var(--text-color)'
      : isWrong
      ? 'var(--text-color)'
      : 'var(--secondary-color)'};
  font-size: 14px;
  text-align: center;
  border-radius: 4px;
  padding: 15px 20px;
  transition: all 0.3s;
`;

export default ResultPage;
