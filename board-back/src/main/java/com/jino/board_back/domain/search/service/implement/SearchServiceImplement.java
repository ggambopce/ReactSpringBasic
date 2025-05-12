package com.jino.board_back.domain.search.service.implement;

import java.util.ArrayList;
import java.util.List;

import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import com.jino.board_back.domain.search.dto.response.GetPopularListResponseDto;
import com.jino.board_back.domain.search.dto.response.GetRelationListResponseDto;
import com.jino.board_back.domain.search.repository.SearchLogRepository;
import com.jino.board_back.domain.search.repository.resultSet.GetPopularListResultSet;
import com.jino.board_back.domain.search.repository.resultSet.GetRelationListResultSet;
import com.jino.board_back.domain.search.service.SearchService;
import com.jino.board_back.global.dto.response.ResponseDto;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class SearchServiceImplement implements SearchService {

    private final SearchLogRepository searchLogRepository;

    @Override
    public ResponseEntity<? super GetPopularListResponseDto> getPopularList() {

        List<GetPopularListResultSet> resultSets = new ArrayList<>();

        try {

            resultSets = searchLogRepository.getPopularList();

        } catch (Exception exception) {
            exception.printStackTrace();
            return ResponseDto.databaseError();
        }

        return GetPopularListResponseDto.success(resultSets);
    }

    @Override
    public ResponseEntity<? super GetRelationListResponseDto> getRelationList(String searchWord) {

        List<GetRelationListResultSet> resultSets = new ArrayList<>();

        try {

            resultSets = searchLogRepository.getRelationList(searchWord);

        } catch (Exception exception) {
            exception.printStackTrace();
            return ResponseDto.databaseError();
        }

        return GetRelationListResponseDto.success();
    }
}