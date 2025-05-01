package com.jino.board_back.domain.comment.dto.request;

import jakarta.validation.constraints.NotBlank;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
public class PostCommentRequestDto {

    @NotBlank
    private String comment;
}
