import React from 'react'
import './style.css'
import { CommentListItemType } from 'types/interface';
import defaultPofileImage from 'assets/image/default-profile-image.png'

interface Props {
    commentListItem: CommentListItemType;
}

//          component: Comment List Item            //
export default function CommentItem({ commentListItem }: Props) {
  
  //            properties          //
  const { nickname, profileImage, writeDatetime, content } = commentListItem  
  //            render: Commnet List Item 컴포넌트 랜더링           //  
  return (
    <div>
        <div className='comment-list-item'>
            <div className='comment-list-item-top'>
                <div className='comment-list-item-profile-box'>
                    <div className='comment-list-item-profile-image' style={{backgroundImage: `url(${profileImage ? profileImage : defaultPofileImage })`}}></div>
                </div>
                <div className='comment-list-item-nickname'>{nickname}</div>
                <div className='comment-list-item-divider'>{'\|'}</div>
                <div className='comment-list-item-time'>{writeDatetime}</div>
            </div>
            <div className='comment-list-item-main'>
                <div className='comment-list-item-content'>{content}</div>
            </div>
        </div>
    </div>
  )
}
