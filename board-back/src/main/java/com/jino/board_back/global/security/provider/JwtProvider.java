package com.jino.board_back.global.security.provider;

import java.util.Date;
import java.time.Instant;
import java.time.temporal.ChronoUnit;

import org.springframework.stereotype.Component;

@Component
public class JwtProvider {

    private String secretKey = "SecretK3y";

    // JWT 생성
    public String create(String email) {

        Date expiredDate = Date.from(Instant.now().plus(1, ChronoUnit.HOURS));


}
