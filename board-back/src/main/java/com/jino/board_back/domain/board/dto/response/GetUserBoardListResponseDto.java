package com.jino.board_back.domain.board.dto.response;

import java.util.List;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;

import com.jino.board_back.domain.board.dto.BoardListItem;
import com.jino.board_back.domain.view.entity.BoardListViewEntity;
import com.jino.board_back.global.common.ResponseCode;
import com.jino.board_back.global.common.ResponseMessage;
import com.jino.board_back.global.dto.response.ResponseDto;

import lombok.Getter;

@Getter
public class GetUserBoardListResponseDto extends ResponseDto {

    private List<BoardListViewEntity> userBoardListItems;

    private GetUserBoardListResponseDto(List<BoardListViewEntity> boardListViewEntities) {
        super(ResponseCode.SUCCESS, ResponseMessage.SUCCESS);
    }

    public static ResponseEntity<GetUserBoardListResponseDto> success(List<BoardListViewEntity> boardListViewEntities) {
        GetUserBoardListResponseDto result = new GetUserBoardListResponseDto(boardListViewEntities);
        return ResponseEntity.status(HttpStatus.OK).body(result);
    }

    public static ResponseEntity<ResponseDto> noExistUser() {
        ResponseDto result = new ResponseDto(ResponseCode.NOT_EXISTED_USER, ResponseMessage.NOT_EXISTED_USER);
        return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(result);
    }

}
