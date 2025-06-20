package com.jino.board_back.domain.board.service;

import org.springframework.http.ResponseEntity;

import com.jino.board_back.domain.board.dto.request.PatchBoardRequestDto;
import com.jino.board_back.domain.board.dto.request.PostBoardRequestDto;
import com.jino.board_back.domain.board.dto.response.DeleteBoardResponseDto;
import com.jino.board_back.domain.board.dto.response.GetBoardResponseDto;
import com.jino.board_back.domain.board.dto.response.GetLatestBoardListResponseDto;
import com.jino.board_back.domain.board.dto.response.GetSearchBoardListResponseDto;
import com.jino.board_back.domain.board.dto.response.GetTop3BoardListResponseDto;
import com.jino.board_back.domain.board.dto.response.GetUserBoardListResponseDto;
import com.jino.board_back.domain.board.dto.response.IncreaseViewCountResponsDto;
import com.jino.board_back.domain.board.dto.response.PatchBoardResponseDto;
import com.jino.board_back.domain.board.dto.response.PostBoardResponseDto;
import com.jino.board_back.domain.favorite.dto.response.GetFavoriteListResponseDto;
import com.jino.board_back.domain.favorite.dto.response.PutFavoriteResponseDto;

public interface BoardService {

    ResponseEntity<? super PostBoardResponseDto> postBoard(PostBoardRequestDto dto, String email);

    ResponseEntity<? super GetBoardResponseDto> getBoard(Integer boardNumber);

    ResponseEntity<? super GetUserBoardListResponseDto> getUserBoardList(String email);

    ResponseEntity<? super PatchBoardResponseDto> patchBoard(PatchBoardRequestDto dto, Integer boardNumber,
            String email);

    ResponseEntity<? super GetLatestBoardListResponseDto> getLatestBoardList();

    ResponseEntity<? super GetTop3BoardListResponseDto> getTop3BoardList();

    ResponseEntity<? super GetSearchBoardListResponseDto> getSearchBoardList(String searchWord, String preSearchWord);

    ResponseEntity<? super PutFavoriteResponseDto> putFavorite(Integer boardNumber, String email);

    ResponseEntity<? super GetFavoriteListResponseDto> getFavoriteList(Integer boardNumber);

    ResponseEntity<? super IncreaseViewCountResponsDto> increaseViewCount(Integer boardNumber);

    ResponseEntity<? super DeleteBoardResponseDto> deleteBoard(Integer boardNumber, String email);

}
