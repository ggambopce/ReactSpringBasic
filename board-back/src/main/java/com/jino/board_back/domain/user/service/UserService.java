package com.jino.board_back.domain.user.service;

import org.springframework.http.ResponseEntity;

import com.jino.board_back.domain.user.dto.response.GetSignInUserResponseDto;

public interface UserService {

    ResponseEntity<? super GetSignInUserResponseDto> getSignInUser(String email);

}
