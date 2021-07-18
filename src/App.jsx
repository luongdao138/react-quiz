import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import CategoryPage from './pages/CategoryPage';
import GlobalStyle from './GlobalStyle';
import DifficultyPage from './pages/DifficultyPage';
import AppContextProvider from './context/AppContext';
import QuestionsPage from './pages/QuestionsPage';
import ResultPage from './pages/ResultPage';

const App = () => {
  return (
    <Router>
      <AppContextProvider>
        <Switch>
          <Route path='/' exact component={HomePage} />
          <Route path='/category' exact component={CategoryPage} />
          <Route path='/difficulty' exact component={DifficultyPage} />
          <Route path='/question' exact component={QuestionsPage} />
          <Route path='/result' exact component={ResultPage} />
        </Switch>
      </AppContextProvider>
      <GlobalStyle />
    </Router>
  );
};

export default App;
