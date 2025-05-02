import React from 'react'
import './style.css'


//          component: 게시물 상세 화면 컴포넌트           //
export default function BoardDetail() {

  //          component: 게시물 상세 상단 컴포넌트           //
  const BoardDedtailTop = () => {
    
    //          render: 게시물 상세 상단 컴포넌트 렌더링           //
    return (
      <div id='board-detail-top'>
        <div className='board-detail-top-header'>
          <div className='board-detail-title'>{'제네릭(Generic)은 자바와 같은 언어에서 데이터 타입을 일반화할 수 있는 방법을 제공하는 기능이다'}</div>
          <div className='board-detail-top-sub-box'>
            <div className='board-detail-write-info-box'>
              <div className='board-detail-writer-profile-image'></div>
              <div className='board-detail-writer-nickname'>{'안녕나는지노'}</div>
              <div className='board-detail-info-divider'>{'\|'}</div>
              <div className='board-detail-write-date'>{'2025. 05. 03.'}</div>
            </div>
            <div className='icon-button'>
              <div className='icon more-icon'></div>
            </div>
            <div className='board-detail-more-box'>
              <div className='board-detail-update-button'>{'수정'}</div>
              <div className='divider'></div>
              <div className='board-detail-delete-button'>{'삭제'}</div>
            </div>
          </div>
        </div>
        <div className='divider'></div>
        <div className='board-detail-top-main'>
          <div className='board-detail-main-text'>{'제네릭을 사용하면 클래스, 인터페이스, 메서드가 다양한 데이터 타입을 처리할 수 있도록 코드의 유연성을 높일 수 있다. 이는 코드의 재사용성을 증가시키고, 컴파일 타임에서 타입 안전성을 보장할 수 있게 해준다.'}</div>
          <div className='board-detail-main-image'></div>
        </div>
      </div>
    )
  }

  //          component: 게시물 상세 하단 컴포넌트           //
  const BoardDetailBottom = () => {
    
    //          render: 게시물 상세 하단 컴포넌트 렌더링           //
    return (<></>)
  }

  //          render: 게시물 상세 화면 컴포넌트 렌더링           //
  return (
    <div id='board-detail-wrapper'>
      <div className='board-detail-container'>
        <BoardDedtailTop />
        <BoardDetailBottom />
      </div>
    </div>
  )
}
