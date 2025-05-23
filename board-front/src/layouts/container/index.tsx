import { AUTH_PATH } from 'constant';
import Footer from 'layouts/footer'
import Header from 'layouts/header'
import { Outlet, useLocation } from 'react-router-dom'


//          component: 레이아웃         //
export default function Container() {

    //          state: 현재 페이지 path name 상태           //
    const { pathname } = useLocation();
  
    //          render: 레이아웃 렌더링            //
    return (
    <>
        
        <Header />
        <Outlet />
        {pathname !== AUTH_PATH() && <Footer />}
    </>
  )
}
