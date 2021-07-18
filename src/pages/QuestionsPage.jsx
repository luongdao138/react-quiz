import React from 'react';
import { Wrapper } from '../GlobalStyle';
import { useQuizContext } from '../context/AppContext';
import styled from 'styled-components';
import { useHistory } from 'react-router-dom';

const QuestionsPage = () => {
  const {
    loading,
    questions,
    currentQues,
    setCurrentQues,
    results,
    setResults,
  } = useQuizContext();
  const history = useHistory();

  const handleNextQues = () => {
    setCurrentQues((x) => x + 1);
  };

  const handleChoseAnswer = (index) => {
    let newResults = [...results];
    newResults[currentQues].chosenOption = index;
    setResults(newResults);
    console.log(index);
    console.log(results);
  };

  return (
    <Wrapper>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <Content>
          <Question
            dangerouslySetInnerHTML={{
              __html: questions && questions[currentQues]?.label,
            }}
          />
          <Answer>
            {questions &&
              questions[currentQues]?.answers?.map((a, index) => {
                return (
                  <AnswerItem
                    key={index}
                    isChosen={results[currentQues].chosenOption === index}
                    onClick={() => handleChoseAnswer(index)}
                  >
                    {a.label}
                  </AnswerItem>
                );
              })}
          </Answer>
          <Nav>
            {currentQues > 0 ? (
              <Button onClick={() => setCurrentQues((x) => x - 1)}>
                Prev question
              </Button>
            ) : (
              <span></span>
            )}
            {currentQues !== 9 && (
              <Button onClick={handleNextQues}>Next question</Button>
            )}
          </Nav>
          <TrackQues>
            {[...new Array(10)].map((_, index) => {
              return (
                <TrackQuesItem
                  key={index}
                  isChosen={results[index].chosenOption !== null}
                  onClick={() => setCurrentQues(index)}
                >
                  <span>{index + 1}</span>
                </TrackQuesItem>
              );
            })}
          </TrackQues>
          <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
            {results.every((x) => x.chosenOption !== null) && (
              <FinishButton onClick={() => history.push('/result')}>
                Finish the quiz
              </FinishButton>
            )}
          </div>
        </Content>
      )}
    </Wrapper>
  );
};

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
  background-color: ${({ isChosen }) =>
    !isChosen ? 'var(--text-color)' : 'var(--secondary-color)'};
  color: ${({ isChosen }) =>
    isChosen ? 'var(--text-color)' : 'var(--secondary-color)'};
  font-size: 14px;
  text-align: center;
  border-radius: 4px;
  padding: 15px 20px;
  cursor: pointer;
  transition: all 0.3s;

  :hover {
    transform: scale(1.02);
    background-color: var(--secondary-color);
    color: var(--text-color);
  }
`;

export const Nav = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
`;

export const Button = styled.button`
  padding: 5px 8px;
  border-radius: 4px;
  background-color: var(--text-color);
  color: var(--secondary-color);
  font-size: 12px;
  font-weight: 500;
`;

export const TrackQues = styled.div`
  margin-top: 20px;
  display: flex;
  flex-wrap: wrap;
`;

export const TrackQuesItem = styled.span`
  display: block;
  width: 36px;
  height: 36px;
  border-radius: 4px;
  border: 1px solid var(--med-color);
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 10px;
  margin-bottom: 10px;
  cursor: pointer;
  background-color: ${({ isChosen }) =>
    !isChosen ? 'var(--text-color)' : 'var(--secondary-color)'};
  color: ${({ isChosen }) =>
    isChosen ? 'var(--text-color)' : 'var(--secondary-color)'};
`;

const FinishButton = styled(Button)`
  margin-top: 10px;
  background-color: var(--dark-color);
  color: var(--text-color);
  padding: 10px;
`;

export default QuestionsPage;
