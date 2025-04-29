package com.jino.board_back.domain.favorite.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@AllArgsConstructor
@NoArgsConstructor
public class FavoriteListItem {

    private String email;
    private String nickname;
    private String profileImage;
}
