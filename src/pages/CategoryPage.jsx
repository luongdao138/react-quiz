import React from 'react';
import { Wrapper } from '../GlobalStyle';
import styled from 'styled-components';
import { useHistory } from 'react-router-dom';
import { useQuizContext } from '../context/AppContext';

const categories = [
  {
    value: 'any',
    label: 'Any Category',
  },
  {
    value: '9',
    label: 'General Knowledge',
  },
  {
    value: '10',
    label: 'Books',
  },
  {
    value: '11',
    label: 'Film',
  },
  {
    value: '12',
    label: 'Music',
  },
  {
    value: '13',
    label: 'Musicals & Theatres',
  },
  {
    value: '14',
    label: 'Television',
  },
  {
    value: '15',
    label: 'Video games',
  },
  {
    value: '16',
    label: 'Board games',
  },
  {
    value: '17',
    label: 'Science & Nature',
  },
  {
    value: '18',
    label: 'Science: Computers',
  },
  {
    value: '19',
    label: 'Science: Mathematics',
  },
  {
    value: '20',
    label: 'Mythology',
  },
  {
    value: '21',
    label: 'Sports',
  },
  {
    value: '22',
    label: 'Geography',
  },
  {
    value: 'special',
    label: 'Anh Lương',
  },
];

const CategoryPage = () => {
  const history = useHistory();
  const handleGoBack = () => {
    history.push('/');
    setCategory('any');
    setDifficulty('any');
    reset();
  };
  const handleNextPage = () => history.push('/difficulty');
  const { category, setCategory, setDifficulty, reset } = useQuizContext();
  return (
    <Wrapper>
      <Title>Select your favorite category</Title>
      <CategoryWrapper>
        <CategoryList>
          {categories.map((c, index) => (
            <CategoryItem
              isChosen={c.value === category}
              key={c.value}
              onClick={() => setCategory(c.value)}
            >
              {c.label}
            </CategoryItem>
          ))}
        </CategoryList>
      </CategoryWrapper>
      <div style={{ margin: '20px 0' }}>
        <Button onClick={handleGoBack}>Back</Button>
        <Button onClick={handleNextPage}>Next</Button>
      </div>
    </Wrapper>
  );
};

const Title = styled.h2`
  font-size: 50px;
  font-weight: 600;
  text-align: center;
  margin-bottom: 10px;

  @media (max-width: 750px) {
    font-size: 32px;
  }

  @media (max-width: 550px) {
    font-size: 28px;
  }
`;

const CategoryWrapper = styled.div`
  max-width: 95%;
  width: 800px;
`;

const CategoryList = styled.div`
  padding: 10px;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
  grid-gap: 8px;
`;

const CategoryItem = styled.div`
  border: 2px solid var(--dark-color);
  text-align: center;
  cursor: pointer;
  border-radius: 4px;
  padding: 5px;
  transition: all 0.3s ease-in-out;

  background-color: ${({ isChosen }) =>
    isChosen ? 'var(--secondary-color)' : 'var(--primary-color)'};
`;

const Button = styled.button`
  background-color: var(--secondary-color);
  padding: 12px 24px;
  color: var(--text-color);
  font-size: 18px;
  border-radius: 40px;
  text-transform: uppercase;
  margin-top: 12px;
  margin: 0 5px;
`;

export default CategoryPage;
