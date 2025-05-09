package com.jino.board_back.domain.board.dto.response;

import java.util.List;

import com.jino.board_back.domain.board.dto.BoardListItem;
import com.jino.board_back.domain.view.entity.BoardListViewEntity;
import com.jino.board_back.global.common.ResponseCode;
import com.jino.board_back.global.common.ResponseMessage;
import com.jino.board_back.global.dto.response.ResponseDto;

import lombok.Getter;

@Getter
public class GetLatestBoardListResponseDto extends ResponseDto {

    private List<BoardListItem> latestList;

    private GetLatestBoardListResponseDto(List<BoardListViewEntity> boardEntities) {
        super(ResponseCode.SUCCESS, ResponseMessage.SUCCESS);
        this.latestList = BoardListItem.getList(boardEntities);
    }
}
