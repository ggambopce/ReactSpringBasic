package com.jino.board_back.domain.user.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import com.jino.board_back.domain.user.entity.UserEntity;

@Repository
public interface UserRepository extends JpaRepository<UserEntity, String> {

    boolean existsByEmail(String email);

    boolean existsByNickname(String nickname);

    boolean existsByTelNumber(String telNumber);
}