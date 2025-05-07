import { useState } from "react"

const usePagination = <T>() => {
    //          state: 전체 객체 리스트 상태          //
    const [totalList, setTotalList] = useState<T[]>([]);
    //          state: 보여줄 객체 리스트 상태          //
    const [viewList, setViewList] = useState<T[]>([]);
    //          state: 현재 페이지 번호 상태          //
    const [currentPage, setCurrentPsge] = useState<number>(1);
    
    //          state: 전체 페이지 번호 리스트 상태         //
    const[totalPageList, setTotalPageList] = useState<number[]>([1]);
    //          state: 보여줄 페이지 번호 리스트 상태          //
    const[viewPageList, setViewPageList] = useState<number>(1);
    //          state: 현재 섹션 상태            //
    const[currentSection, setCurrentSection] = useState<number>(1);

    //          state; 전체 섹션 상태            //
    const[totalSection, setTotalSection] = useState<number>(1);

};

export default usePagination;