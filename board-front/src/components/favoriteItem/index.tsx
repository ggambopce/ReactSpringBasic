import React from 'react'
import './style.css'

//          component: Favorite List Item           //
export default function FavoriteItem() {
  
    //          render: Top 3 LIst Item 컴포넌트 랜더링         // 
    return (
    <div className='favorite-list-item'>
        <div className='favorite-list-item-profile-box'>
            <div className='favorite-list-item-profile-image' style={{ backgroundImage: `url()` }}></div>
        </div>
        <div className='favorite-list-item-nickname'>{'안녕! 나는JINO'}</div>
    </div>
  )
}
