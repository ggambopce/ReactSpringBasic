import React from 'react';
import './App.css';
import BoardListItem from 'components/boardListItem';
import { latesBoardListMock } from 'mocks';

function App() {
  return (
    <>
      {latesBoardListMock.map(boardListItem => <BoardListItem boardListItem={boardListItem} />)}
      
    </>
  );
}

export default App;
