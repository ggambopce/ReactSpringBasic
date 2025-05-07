import React from 'react'
import './style.css'
import { CommentListItemType } from 'types/interface';
import defaultPofileImage from 'assets/image/default-profile-image.png'

import customParseFormat from 'dayjs/plugin/customParseFormat';
import dayjs from 'dayjs'
dayjs.extend(customParseFormat);
interface Props {
    commentListItem: CommentListItemType;
}

//          component: Comment List Item            //
export default function CommentItem({ commentListItem }: Props) {
  
  //            state: properties          //
  const { nickname, profileImage, writeDatetime, content } = commentListItem 

  //            function: 작성일 경과시간 함수          //
  const getElapsedTime = () => {
    const now = dayjs();
    const raw = commentListItem.writeDatetime;
    const date = dayjs(raw, 'YY-MM-DD HH:mm:ss');
    const writeTime = dayjs(date);

    const gap = now.diff(writeTime, 's');
    if (gap < 60) return `${gap}초 전`;
    if (gap < 3600) return `${Math.floor(gap / 60)}분 전`;
    if (gap < 86400) return `${Math.floor(gap / 3600)}시간 전`;
    return `${Math.floor(gap / 86400)}일 전`;
  }

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
                <div className='comment-list-item-time'>{getElapsedTime()}</div>
            </div>
            <div className='comment-list-item-main'>
                <div className='comment-list-item-content'>{content}</div>
            </div>
        </div>
    </div>
  )
}
