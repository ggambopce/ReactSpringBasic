import React from 'react'
import './style.css'
import { useNavigate } from 'react-router-dom'
import { MAIN_PATH } from 'constant';


//          component: Header 레이아웃          //
export default function Header() {
  
    //          function: 네비게이트 함수           //
    const navigator = useNavigate();

    //          event handler: 로고 클릭 이벤트 처리 함수           //
    const onLogoClickHandler = () => {
        navigator(MAIN_PATH());
    }
    //          render: Header 레이아웃 렌더링          //
    return (
    <div id='header'>
        <div className='header-container'>
            <div className='header-left-box' onClick={onLogoClickHandler}>
                <div className='icon-box'>
                    <div className='icon logo-edu-icon'></div>
                </div>
                <div className='header-logo'>{'JINOs Board'}</div>
            </div>
            <div className='header-right-box'></div>
        </div>
    </div>
  )
}

 