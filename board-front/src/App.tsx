import React from 'react';
import './App.css';
import { commentListMock, favoriteListMock, top3BoardListMock } from 'mocks';
import Top3Item from 'components/top3Item';
import CommentItem from 'components/commentItem';
import FavoriteItem from 'components/favoriteItem';

function App() {
  return (
    <>
    <div style={{padding: '0 20px', display: 'flex', columnGap: '30px', rowGap: '20px'}}>
      {favoriteListMock.map(favoriteListItem => <FavoriteItem favoriteListItem={favoriteListItem}/>)}
    </div>
      
    </>
  );
}

export default App;
