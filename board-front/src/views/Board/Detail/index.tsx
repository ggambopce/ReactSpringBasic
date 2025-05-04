import { useEffect, useState } from 'react'
import './style.css'
import FavoriteItem from 'components/favoriteItem'
import { Board, CommentListItemType, FavoriteListItemType } from 'types/interface'
import { boardMock, commentListMock, favoriteListMock } from 'mocks'
import CommentItem from 'components/commentItem'
import Pagination from 'components/pagination'
import defaultProfileImage from 'assets/image/default-profile-image.png';
import { useLoginUserStore } from 'stores'
import { useNavigate, useParams } from 'react-router-dom'
import { USER_PATH } from 'constant'


//          component: 게시물 상세 화면 컴포넌트           //
export default function BoardDetail() {

  //          state: 게시물 번호 path variable 상태          //
  const { boardNumber } = useParams();
  //          state: 로그인 유지 상태          //
  const { loginUser } = useLoginUserStore();

  //          function: 네비게이트 함수          //
  const navigator = useNavigate();

  //          component: 게시물 상세 상단 컴포넌트           //
  const BoardDedtailTop = () => {
    
    //          state: 게시물 상태          //
    const [board, setBoard] = useState<Board | null>(null);
    //          state: more 버튼 상태          //
    const [showMore, setShowMore] = useState<boolean>(false);

    //          event handler: 닉네임 클릭 이벤트 처리           //
    const onNicknameClickHandler = () => {
      if (!board) return;
      navigator(USER_PATH(board.writerEmail))
    }

    //          event handler: more 버튼 클릭 이벤트 처리          //
    const onMoreButtonClickHandler = () => {
      setShowMore(!showMore);
    }

    //          effect: 게시물 번호 path variable이 바뀔때 마다 게시물 불러오기          //
    useEffect(()=> {
      setBoard(boardMock);
    }, [boardNumber]);

    //          render: 게시물 상세 상단 컴포넌트 렌더링           //
    if (!board) return <></>
    return (
      <div id='board-detail-top'>
        <div className='board-detail-top-header'>
          <div className='board-detail-title'>{board.title}</div>
          <div className='board-detail-top-sub-box'>
            <div className='board-detail-write-info-box'>
              <div className='board-detail-writer-profile-image' style={{backgroundImage: `url(${board.writerProfileImage ? board. writerProfileImage : defaultProfileImage})`}}></div>
              <div className='board-detail-writer-nickname' onClick={onNicknameClickHandler}>{board.writerNickname}</div>
              <div className='board-detail-info-divider'>{'\|'}</div>
              <div className='board-detail-write-date'>{board.writeDatetime}</div>
            </div>
            <div className='icon-button' onClick={onMoreButtonClickHandler}>
              <div className='icon more-icon'></div>
            </div>
            {showMore &&
            <div className='board-detail-more-box'>
              <div className='board-detail-update-button'>{'수정'}</div>
              <div className='divider'></div>
              <div className='board-detail-delete-button'>{'삭제'}</div>
            </div>
            }
          </div>
        </div>
        <div className='divider'></div>
        <div className='board-detail-top-main'>
          <div className='board-detail-main-text'>{board.content}</div>
          {board.boardImageList.map(image => <img className='board-detail-main-image' src={image} /> )}
          
        </div>
      </div>
    )
  }

  //          component: 게시물 상세 하단 컴포넌트           //
  const BoardDetailBottom = () => {

    const [favoriteList, setFavoriteList] = useState<FavoriteListItemType[]>([]);
    const [commentList, setCommentList] = useState<CommentListItemType[]>([]);
    
    useEffect(() => {
      setFavoriteList(favoriteListMock);
      setCommentList(commentListMock);
    }, []);

    //          render: 게시물 상세 하단 컴포넌트 렌더링           //
    return (
      <div id='board-detail-bottom'>
        <div className='board-detail-bottom-button-box'>
          <div className='board-detail-bottom-button-group'>
            <div className='icon-button'>
              <div className='icon favorite-fill-icon'></div>
            </div>
            <div className='board-detail-bottom-button-text'>{`좋아요 ${12}`}</div>
            <div className='icon-button'>
              <div className='icon up-light-icon'></div>
            </div>
          </div>
          <div className='board-detail-bottom-button-group'>
            <div className='icon-button'>
              <div className='icon comment-icon'></div>
            </div>
            <div className='board-detail-bottom-button-text'>{`댓글 ${12}`}</div>
            <div className='icon-button'>
              <div className='icon up-light-icon'></div>
            </div>
          </div>
        </div>
        <div className='board-detail-bottom-favorite-box'>
          <div className='board-detail-bottom-favorite-container'>
            <div className='board-detail-bottom-favorite-title'>{'좋아요 '}<span className='emphasis'>{12}</span></div>
            <div className='board-detail-bottom-favorite-contents'>
              {favoriteList.map(item => <FavoriteItem favoriteListItem={item} />)} 
            </div>
          </div>
        </div>
        <div className='board-detail-bottom-comment-box'>
          <div className='board-detail-bottom-comment-container'>
            <div className='board-detail-bottom-comment-title'>{'댓글 '}<span className='emphasis'>{12}</span></div>
            <div className='board-detail-bottom-comment-list-container'>
              {commentList.map(item => <CommentItem commentListItem={item} />)}
            </div>
          </div>
          <div className='divider'></div>
          <div className='board-detail-bottom-comment-pagination-box'>
            <Pagination />
          </div>
          <div className='board-detail-bottom-comment-input-box'>
            <div className='board-detail-bottom-comment-input-container'>
              <textarea className='board-detail-bottom-comment-textarea' placeholder='댓글을 작성해주세요.'/>
              <div className='board-detail-bottom-comment-button-box'>
                <div className='disable-button'>{'댓글달기'}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
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
