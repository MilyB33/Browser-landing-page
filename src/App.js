import React from 'react';
import './styles/css/page/main.css';
import SeriesState from './context/Series/SeriesState';
import TasksState from './context/Tasks/TasksState';
import CryptoState from './context/Cryptocurrency/CryptoState';
import NavigationState from './context/navigation/NavigationState';
import Home from './components/layout/Home';
function App() {
  return (
    <NavigationState>
      <SeriesState>
        <TasksState>
          <CryptoState>
            <Home />
          </CryptoState>
        </TasksState>
      </SeriesState>
    </NavigationState>
  );
}

export default App;
