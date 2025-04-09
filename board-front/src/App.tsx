import React from 'react';
import './App.css';
import BoardListItem from 'components/boardListItem';
import { latesBoardListMock } from 'mocks';
import Top3Item from 'components/top3Item';

function App() {
  return (
    <>
      <div style= {{ display: 'flex', justifyContent: 'center', gap: '24px' }}>
        <Top3Item />
        <Top3Item />
        <Top3Item />
      </div>
      
    </>
  );
}

export default App;
