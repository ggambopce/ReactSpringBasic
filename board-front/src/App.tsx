import React from 'react';
import './App.css';
import { commentListMock, top3BoardListMock } from 'mocks';
import Top3Item from 'components/top3Item';
import CommentItem from 'components/commentItem';

function App() {
  return (
    <>
    <div style={{padding: '0 20px', display: 'flex', flexDirection: 'column', gap: '30px'}}>
      {commentListMock.map(commentListItem => <CommentItem commentListItem={commentListItem}/>)}
    </div>
      
    </>
  );
}

export default App;
