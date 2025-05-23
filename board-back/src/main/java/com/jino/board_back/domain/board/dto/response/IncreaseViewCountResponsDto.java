package com.jino.board_back.domain.board.dto.response;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;

import com.jino.board_back.global.common.ResponseCode;
import com.jino.board_back.global.common.ResponseMessage;
import com.jino.board_back.global.dto.response.ResponseDto;

public class IncreaseViewCountResponsDto extends ResponseDto {

    private IncreaseViewCountResponsDto() {
        super(ResponseCode.SUCCESS, ResponseMessage.SUCCESS);
    }

    public static ResponseEntity<IncreaseViewCountResponsDto> success() {
        IncreaseViewCountResponsDto result = new IncreaseViewCountResponsDto();
        return ResponseEntity.status(HttpStatus.OK).body(result);
    }

    public static ResponseEntity<ResponseDto> noExistBoard() {
        ResponseDto result = new ResponseDto(ResponseCode.NOT_EXISTED_BOARD, ResponseMessage.NOT_EXISTED_BOARD);
        return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(result);
    }

}
