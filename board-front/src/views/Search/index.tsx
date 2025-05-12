import React, { useEffect, useState } from 'react'
import './style.css'
import { useParams } from 'react-router-dom'
import { BoardListItemType } from 'types/interface';
import { latesBoardListMock } from 'mocks';
import BoardListItem from 'components/boardListItem';

//          component: 검색 화면 컴포넌트           //
export default function Search() {
  
  //          state: searchWord path variable 상태          //
  const { searchWord } = useParams();

  //          state: 검색 게시물 개수 상태          //
  const [count, setCount] = useState<number>(2)
  //          state: 검색 게시물 리스트 상태 (임시)          //
  const [searchBoardList, setSearchBoardList] = useState<BoardListItemType[]>([]);

  //          effect: 첫 마운트 시 실행될 함수          //
  useEffect(() => {
    setSearchBoardList(latesBoardListMock);
  }, []);

  //          render: 검색 화면 컴포넌트 렌더링           //
  if (!searchWord) return (<></>)
  return (
    <div id='search-wrapper'>
      <div className='search-container'>
        <div className='search-title-box'>'
          <div className='search-title'><span className='emphasis'>{searchWord}</span>{'에 대한 결과 입니다.'}</div>
          <div className='search-count'>{count}</div>
        </div>
        <div className='search-contents-box'>
          {count === 0 ?
          <div className='search-contents-nothing'>{'검색 결과가 없습니다.'}</div> :
          <div className='search-contents'>{searchBoardList.map(boardListItem => <BoardListItem boardListItem={boardListItem} />)}</div>
          }
          <div className='search-relation-box'>
            <div className='dearch-relation-card'>
              <div className='search-relation-card-container'>
               <div className='search-relation-card-title'></div>
               <div className='search-erlation-card-contents'>

               </div>
              </div>
            </div>  
          </div>  
        </div>
        <div className='search-pagination-box'></div>
      </div>
    </div>
  )
}
