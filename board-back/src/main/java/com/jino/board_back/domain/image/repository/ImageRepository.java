package com.jino.board_back.domain.image.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.jino.board_back.domain.image.entity.ImageEntity;

@Repository
public interface ImageRepository extends JpaRepository<ImageEntity, Integer> {

    List<ImageEntity> findByBoardNumber(Integer boardNumber);

}
