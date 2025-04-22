package com.jino.board_back.domain.board.service;

import org.springframework.http.ResponseEntity;

import com.jino.board_back.domain.board.dto.request.PostBoardRequestDto;
import com.jino.board_back.domain.board.dto.response.PostBoardResponseDto;

public interface BoardService {

    ResponseEntity<? super PostBoardResponseDto> postBoard(PostBoardRequestDto dto, String email);

}
