import React from 'react'
import './style.css';


//          component: Footer 레이아웃          //
export default function index() {
  
  //            render: Footer 랜더링           //
    return (
    <div className='footer'>
        <div className='footer-container'>
            <div className='footer-top'>
                <div className='footer-logo-box'>
                    <div className='footer-logo-text'></div>
                </div>
                <div className='footer-link-box'>
                    <div className='footer-randb-link'></div>
                    <div className='icon-button'>
                        <div className='randb-icon'></div>
                    </div>
                    <div className='icon-button'>
                        <div className='youtube-icon'></div>
                    </div>
                </div>
            </div>
            <div className='footer-bottom'>
                <div className='footer-copyright'></div>
            </div>
        </div>
    </div>
  )
}
