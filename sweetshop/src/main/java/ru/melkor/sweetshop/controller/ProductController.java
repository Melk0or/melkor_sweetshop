package ru.melkor.sweetshop.controller;


import lombok.AllArgsConstructor;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import ru.melkor.sweetshop.entity.CartItem;
import ru.melkor.sweetshop.service.OrderService;

import java.security.Principal;
import java.util.List;

@RestController
@AllArgsConstructor
public class ProductController {



    @GetMapping("/")
    public String products() {
        return "products";
    }


}