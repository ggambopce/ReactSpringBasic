import React from 'react'
import './style.css'

export default function CommentItem() {
  return (
    <div>
        <div className='comment-list-item'>
            <div className='comment-list-item-top'>
                <div className='comment-list-item-profile-box'>
                    <div className='comment-list-item-profile-image' style={{backgroundImage: `url()`}}></div>
                </div>
                <div className='comment-list-item-nickname'>{`안녕!! 나는 JINO`}</div>
                <div className='comment-list-item-divider'>{'\|'}</div>
                <div className='comment-list-item-time'>{`3분전`}</div>
            </div>
            <div className='comment-list-item-main'>
                <div className='comment-list-item-content'>{"제네릭(Generic)은 자바와 같은 언어에서 데이터 타입을 일반화할 수 있는 방법을 제공하는 기능이다. 제네릭을 사용하면 클래스, 인터페이스, 메서드가 다양한 데이터 타입을 처리할 수 있도록 코드의 유연성을 높일 수 있다. 이는 코드의 재사용성을 증가시키고, 컴파일 타임에서 타입 안전성을 보장할 수 있게 해준다."}</div>
            </div>
        </div>
    </div>
  )
}
