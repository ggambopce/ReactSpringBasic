import React from 'react'
import './style.css';

//          component: Top 3 List Item           //
export default function Top3Item() {

    //          render: Top 3 LIst Item 컴포넌트 랜더링         // 
    return (
        <div className='top-3-list-item'>
            <div className='top-3-list-item-main-box'>
                <div className='top-3-list-item-top'>
                    <div className='top-3-list-item-profile-box'>
                        <div className='top-3-list-item-profile-image' style={{backgroundImage: `url()`}}></div>
                    </div>
                    <div className='top-3-list-item-write-box'>
                        <div className='top-3-list-item-nickname'>{"안녕 나는JINO"}</div>
                        <div className='top-3-list-item-write-date'>{"2025.04.04."}</div>
                    </div>
                </div>
                <div className='top-3-list-item-middle'>
                    <div className='top-3-list-item-title'>{"오늘 공부한 것은 JAVA입니다"}</div>
                    <div className='top-3-list-item-content'>{"제네릭(Generic)은 자바와 같은 언어에서 데이터 타입을 일반화할 수 있는 방법을 제공하는 기능이다. 제네릭을 사용하면..."}</div>
                </div>
                <div className='top-3-list-item-bottom'>
                    <div className='top-3-list-item-counts'>{'댓글 0  좋아요 0 조회수 0'}</div>
                </div>
            </div>
        </div>
  )
}
