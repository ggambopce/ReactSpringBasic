package com.jino.board_back.domain.search.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.jino.board_back.domain.search.entity.SearchLogEntity;
import com.jino.board_back.domain.search.repository.resultSet.GetPopularListResultSet;
import com.jino.board_back.domain.search.repository.resultSet.GetRelationListResultSet;

@Repository
public interface SearchLogRepository extends JpaRepository<SearchLogEntity, Integer> {

    @Query(value = "SELECT search_word AS searchWord, COUNT(search_word) AS count " +
            "FROM search_log " +
            "WHERE relation IS FALSE " +
            "GROUP BY search_word " +
            "ORDER BY count DESC " +
            "LIMIT 15 ", nativeQuery = true)
    List<GetPopularListResultSet> getPopularList();

    @Query(value = "SELECT relation_word,count(search_word) AS count " +
            "FROM search_log " +
            "WHERE search_word = ?1 " +
            "GROUP BY relation_word " +
            "ORDER BY count DESC " +
            "LIMIT 15 ", nativeQuery = true)
    List<GetRelationListResultSet> getRelationList(String searchWord);
}
