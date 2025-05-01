package com.jino.board_back.domain.comment.service;

import org.springframework.http.ResponseEntity;

import com.jino.board_back.domain.comment.dto.request.PostCommentRequestDto;
import com.jino.board_back.domain.comment.dto.response.PostCommentResponseDto;

public interface CommentService {

    ResponseEntity<? super PostCommentResponseDto> postComment(PostCommentRequestDto dto, Integer boardNumber,
            String email);
}
