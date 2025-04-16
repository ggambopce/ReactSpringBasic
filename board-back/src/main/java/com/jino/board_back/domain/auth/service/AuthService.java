package com.jino.board_back.domain.auth.service;

import org.springframework.http.ResponseEntity;

import com.jino.board_back.domain.auth.dto.request.SignInRequestDto;
import com.jino.board_back.domain.auth.dto.request.SignUpRequestDto;
import com.jino.board_back.domain.auth.dto.response.SignUpResponseDto;
import com.jino.board_back.domain.auth.dto.response.SignInResponseDto;

public interface AuthService {

    ResponseEntity<? super SignUpResponseDto> signUp(SignUpRequestDto dto);

    ResponseEntity<? super SignInResponseDto> signIn(SignInRequestDto dto);

}