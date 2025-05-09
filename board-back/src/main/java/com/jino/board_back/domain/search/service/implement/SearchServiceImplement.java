package com.jino.board_back.domain.search.service.implement;

import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import com.jino.board_back.domain.search.dto.GetPopularListResponseDto;
import com.jino.board_back.domain.search.repository.SearchRepository;
import com.jino.board_back.domain.search.service.SearchService;
import com.jino.board_back.global.dto.response.ResponseDto;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class SearchServiceImplement implements SearchService {

    private final SearchRepository searchRepository;

    @Override
    public ResponseEntity<? super GetPopularListResponseDto> getPopularList() {

        try {

        } catch (Exception exception) {
            exception.printStackTrace();
            return ResponseDto.databaseError();
        }

        return GetPopularListResponseDto.success();
    }
}