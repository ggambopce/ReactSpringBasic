package com.jino.board_back.domain.auth.service.implement;

import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import com.jino.board_back.domain.auth.dto.request.SignUpRequestDto;
import com.jino.board_back.domain.auth.dto.response.SignUpResponseDto;
import com.jino.board_back.domain.auth.service.AuthService;
import com.jino.board_back.domain.user.repository.UserRepository;
import com.jino.board_back.global.dto.response.ResponseDto;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class AuthSecrviceImplement implements AuthService {

    private final UserRepository userRepository;

    @Override
    public ResponseEntity<? super SignUpResponseDto> signUp(SignUpRequestDto dto) {

        try {
            String email = dto.getEmail();
            boolean existedEmail = userRepository.existsByEmail(email);
            if (existedEmail)
                return SignUpResponseDto.duplicateEmail();

            String nickname = dto.getNickname();
            boolean existedNickname = userRepository.existsByNickname(nickname);
            if (existedNickname)
                return SignUpResponseDto.duplicateNickname();

            String telNumber = dto.getTelNumber();
            boolean existedTelNumber = userRepository.existsByTelNumber(telNumber);
            if (existedTelNumber)
                return SignUpResponseDto.duplicateTelNumber();

        } catch (Exception exception) {
            exception.printStackTrace();
            return ResponseDto.databaseError();
        }

        return SignUpResponseDto.success();
    }

}
