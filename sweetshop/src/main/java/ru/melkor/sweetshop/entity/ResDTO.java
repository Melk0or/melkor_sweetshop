package ru.melkor.sweetshop.entity;

import lombok.Data;
import lombok.Getter;
import lombok.Setter;
import org.springframework.http.HttpStatus;

@Data
@Getter
@Setter
public class ResDTO {
    private String  jwt;
    private String body;
    private HttpStatus httpStatus;
    public ResDTO(String jwt, String body, HttpStatus httpStatus) {
        this.jwt = jwt;
        this.body = body;
        this.httpStatus = httpStatus;
    }
}
