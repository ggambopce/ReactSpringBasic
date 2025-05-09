package com.jino.board_back.domain.search.repository;

import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

@Repository
public class SearchLogRepository extends JpaRepository<SearchLogEntity, Integer> {

    @Query (
        value=
        "SELECT search_word, count(search_word) AS count " +
        "FROM search_log " +
        "WHERE relation IS FALSE " +
        "GROUP BY search_word " +
        "ORDER BY count DESC " +
        "LIMIT 15 ",
        nativeQuery=true
    )
}
