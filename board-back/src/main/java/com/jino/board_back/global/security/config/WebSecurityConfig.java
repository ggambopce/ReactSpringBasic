package com.jino.board_back.global.security.config;

import java.io.IOException;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpMethod;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.core.AuthenticationException;
import org.springframework.security.web.AuthenticationEntryPoint;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;

import com.jino.board_back.global.security.filter.JwtAuthenticationFilter;

import jakarta.servlet.ServletException;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import lombok.RequiredArgsConstructor;

@Configuration
@EnableWebSecurity
@RequiredArgsConstructor
public class WebSecurityConfig {

        private final JwtAuthenticationFilter jwtAuthenticationFilter;

        @Bean
        protected SecurityFilterChain configure(HttpSecurity httpSecurity) throws Exception {

                httpSecurity
                                .csrf(csrf -> csrf.disable())
                                .cors(cors -> {
                                }) // default cors 설정
                                .httpBasic(httpBasic -> httpBasic.disable())
                                .sessionManagement(session -> session
                                                .sessionCreationPolicy(SessionCreationPolicy.STATELESS))
                                .authorizeHttpRequests(auth -> auth
                                                .requestMatchers("/", "/api/v1/auth/**", "/api/v1/search/**",
                                                                "/file/**")
                                                .permitAll()
                                                .requestMatchers(HttpMethod.GET, "/api/v1/board/**", "/api/v1/user/**")
                                                .permitAll()
                                                .anyRequest().authenticated() // 나머지 요청은 인증 필요
                                )
                                .exceptionHandling(exception -> exception
                                                .authenticationEntryPoint(new FailedAuthenticationEntryPoint()))
                                .addFilterBefore(jwtAuthenticationFilter, UsernamePasswordAuthenticationFilter.class);

                return httpSecurity.build();

        }

}

class FailedAuthenticationEntryPoint implements AuthenticationEntryPoint {

        @Override
        public void commence(HttpServletRequest request, HttpServletResponse response,
                        AuthenticationException authException) throws IOException, ServletException {

                response.setContentType("application/json");
                response.setStatus(HttpServletResponse.SC_UNAUTHORIZED);
                response.getWriter().write("{ \"code\": \"AF\", \"message\": \"Authorization Failed. \" }");
        }
}
