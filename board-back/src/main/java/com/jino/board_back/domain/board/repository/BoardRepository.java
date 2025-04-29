package com.jino.board_back.domain.board.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.jino.board_back.domain.board.entity.BoardEntity;

@Repository
public interface BoardRepository extends JpaRepository<BoardEntity, Integer> {

    @Query(value = "SELECT " +
            "B.board_numer AS board_number, " +
            "B.title AS title, " +
            "B.content AS content, " +
            "B.writer_datetime AS write_datetime, " +
            "B.profile_image AS profile_image " +
            "FROM board AS B " +
            "INNER JOIN user AS U " +
            "ON B.writer_email = U.email " +
            "WHERE board_number = 1 ", nativeQuery = true)
    BoardEntity getBoard(Integer boardNumber);
}
