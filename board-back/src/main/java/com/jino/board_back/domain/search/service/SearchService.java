package com.jino.board_back.domain.search.service;

import org.springframework.http.ResponseEntity;

import com.jino.board_back.domain.search.dto.response.GetPopularListResponseDto;
import com.jino.board_back.domain.search.dto.response.GetRelationListResponseDto;

public interface SearchService {

    ResponseEntity<? super GetPopularListResponseDto> getPopularList();

    ResponseEntity<? super GetRelationListResponseDto> getRelationList(String searchWord);
}
