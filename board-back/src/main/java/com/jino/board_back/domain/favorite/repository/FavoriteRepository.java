package com.jino.board_back.domain.favorite.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.jino.board_back.domain.favorite.entity.FavoriteEntity;
import com.jino.board_back.domain.favorite.entity.primaryKey.FavoritePK;

@Repository
public interface FavoriteRepository extends JpaRepository<FavoriteEntity, FavoritePK> {

    FavoriteEntity findByBoardNumberAndUserEmail(Integer boardNumber, String userEmail);
}
