import React, { useState } from 'react';
import './App.css';
import { commentListMock, favoriteListMock, top3BoardListMock } from 'mocks';
import Top3Item from 'components/top3Item';
import CommentItem from 'components/commentItem';
import FavoriteItem from 'components/favoriteItem';
import InputBox from 'components/inputBox';

function App() {
  
  const [value, setValue] = useState<string>('');
  
  return (
    <>
      <InputBox label='이메일' type='text' placeholder='이메일 주소를 입력해주세요' value={value} error={true} setValue={setValue} message='이메일 주소를 입력해주세요'/>
    </>
  );
}

export default App;
