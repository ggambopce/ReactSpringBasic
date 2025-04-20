package com.jino.board_back.domain.user.service.implement;

import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import com.jino.board_back.domain.user.dto.response.GetSignInUserResponseDto;
import com.jino.board_back.domain.user.entity.UserEntity;
import com.jino.board_back.domain.user.repository.UserRepository;
import com.jino.board_back.domain.user.service.UserService;
import com.jino.board_back.global.dto.response.ResponseDto;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class UserServiceImplement implements UserService {

    private final UserRepository userRepository;

    @Override
    public ResponseEntity<? super GetSignInUserResponseDto> getSignInUser(String email) {

        UserEntity userEntity = null;
        try {

            userEntity = userRepository.findByEmail(email);
            if (userEntity == null)
                return GetSignInUserResponseDto.notExistUser();

        } catch (Exception exception) {
            exception.printStackTrace();
            return ResponseDto.databaseError();
        }

        return GetSignInUserResponseDto.success(userEntity);
    }

}
