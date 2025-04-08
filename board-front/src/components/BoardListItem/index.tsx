import React from 'react'
import './style.css';

//          componet: Board List Item 컴포넌트          //
export default function BoardListItem() {
  
    //          render: Board List Item 컴포넌트 랜더링         //
    return (
        <div className='board-list-item'>
            <div className='board-list-item-main-box'>
                <div className= 'board-list-item-top'>
                    <div className='board-list-item-profile-box'>
                        <div className='board-list-item-profile-image' style={{backgroundImage:'url(https://fastly.picsum.photos/id/841/200/200.jpg?hmac=jAPzaXgN_B37gVuIQvmtuRCmYEC0lJP86OZexH1yam4)'}}></div>
                    </div>
                    <div className='board-list-item-write-box'>
                        <div className='board-list-item-nickname'>{'안녕하세요 나는 JINO'}</div>
                        <div className='board-list-item-write-date'>{'2025.04.05'}</div>
                    </div>
                </div>
                <div className='board-list-item-middle'>
                    <div className='board-list-item-title'>{'오늘 공부한 것은 JAVA 입니다. '}</div>
                    <div className='board-list-item-content'>{'로컬 개발에서 사용할 수 있는 이미지 URL은 다음과 같은 방식으로 쉽게 구할 수 있어. 목적에 따라 무료 이미지 호스팅 URL을 쓰거나, 직접 static 디렉토리에 저장한 이미지를 쓸 수도 있어.'}</div>
                </div>
                <div className='board-list-item-bottom'>
                    <div className='board-list-item-counts'>
                        {'댓글 0  좋아요 0  조회수 0'}          
                    </div>
                </div>
            </div>
            <div className= 'board-list-item-image-box'>
                <div className='board-list-item-image' style={{backgroundImage:'url(https://fastly.picsum.photos/id/244/200/200.jpg?hmac=Q1gdvE6ZPZUX3nXkxvmzuc12eKVZ9XVEmSH3nCJ2OOo)'}}></div>
            </div>
        </div>
  )
}
