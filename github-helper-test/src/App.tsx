import React, { useReducer } from 'react';
import Header from './components/Header/Header';
import { AppContext, initialState } from './context/context';
import reducer from './context/reducer';
import Home from './pages/Home/Home';

const App: React.FC = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <AppContext.Provider value={{ state, dispatch }}>
      <div>
        <Header />
        <Home />
      </div>
    </AppContext.Provider>
  );
};

export default App;
