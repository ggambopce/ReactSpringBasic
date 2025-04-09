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
                <div className='top-3-list-item-middle'></div>
                <div className='top-3-list-item-bottom'></div>
            </div>
        </div>
  )
}
