import React from 'react';
import './styles/css/page/main.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import SeriesState from './context/series/SeriesState';
import TasksState from './context/tasks/TasksState';
import CryptoState from './context/cryptocurrency/CryptoState';
import NavigationState from './context/navigation/NavigationState';
import NotesState from './context/notes/notesState';
import Home from './components/layout/Home';
function App() {
  return (
    <NavigationState>
      <SeriesState>
        <TasksState>
          <CryptoState>
            <NotesState>
              <Home />
            </NotesState>
          </CryptoState>
        </TasksState>
      </SeriesState>
    </NavigationState>
  );
}

export default App;
