package com.jino.board_back.domain.user.controller;

import org.springframework.http.ResponseEntity;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.jino.board_back.domain.user.dto.response.GetSignInUserResponseDto;
import com.jino.board_back.domain.user.dto.response.GetUserResponseDto;
import com.jino.board_back.domain.user.service.UserService;

import lombok.RequiredArgsConstructor;

@RestController
@RequestMapping("/api/v1/user")
@RequiredArgsConstructor
public class UserController {

    private final UserService userService;

    @GetMapping("/")
    public ResponseEntity<? super GetSignInUserResponseDto> getSignInUser(@AuthenticationPrincipal String email) {

        ResponseEntity<? super GetSignInUserResponseDto> response = userService.getSignInUser(email);
        return response;

    }

    @GetMapping("/email")
    public ResponseEntity<? super GetUserResponseDto> getUser(@AuthenticationPrincipal String email) {

        ResponseEntity<? super GetUserResponseDto> response = userService.getUser(email);
        return response;

    }
}
