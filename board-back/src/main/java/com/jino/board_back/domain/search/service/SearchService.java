package com.jino.board_back.domain.search.service;

import org.springframework.http.ResponseEntity;

import com.jino.board_back.domain.search.dto.GetPopularListResponseDto;

public interface SearchService {

    ResponseEntity<? super GetPopularListResponseDto> getPopularList();
}
