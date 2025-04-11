import Footer from 'layouts/footer';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Main from 'views/Main';
import Authentication from 'views/Authentication';
import Search from 'views/Search';
import User from 'views/User';
import BoardDetail from 'views/Board/Detail';
import BoardWrite from 'views/Board/Write';
import BoardUpdate from 'views/Board/Update';

//      component: Application 컴포넌트     //
function App() {
  
  //      render: Application 랜더링      //
  //  description: 메인 화면 : '/' - Main  //
  //  description: 로그인 + 회원가입 화면 : '/auth' - Authentication  //
  //  description: 검색 화면 : '/search/:word' - Search  //
  //  description: 유저 페이지  : '/user/:userEmail' - User //
  //  description: 게시물 상세보기 : '/board/detail/:boardNumber' - BoardDetail //
  //  description: 게시물 상세보기 : '/board/write' - BoardWrite'  //
  //  description: 게시물 상세보기 : '/board/update/:boardNumber' - BoardUpdate //
  return (
    <>
      <Routes>
        <Route path='/' element={ <Main /> } />
        <Route path='/auth' element={ <Authentication />}/>
        <Route path='/search/:word' element={ <Search />}/>
        <Route path='/user/:userEmail' element={ <User />}/>
        <Route path='/board'>
          <Route path='write' element={ <BoardWrite />}/>
          <Route path='detail/:boardNumber' element={ <BoardDetail />}/> 
          <Route path='update/:boardNumber' element={ <BoardUpdate />}/>
        </Route>
      </Routes>
    </>
  );
}

export default App;
