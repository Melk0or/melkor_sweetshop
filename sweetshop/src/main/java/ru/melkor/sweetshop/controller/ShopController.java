package ru.melkor.sweetshop.controller;


import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import ru.melkor.sweetshop.entity.CartItem;
import ru.melkor.sweetshop.entity.OrdersDto;
import ru.melkor.sweetshop.entity.ProductsDTO;
import ru.melkor.sweetshop.entity.ResDTO;
import ru.melkor.sweetshop.repository.OrderRepository;
import ru.melkor.sweetshop.repository.ProductRepository;
import ru.melkor.sweetshop.repository.UserRepository;
import ru.melkor.sweetshop.service.OrderService;

import java.security.Principal;
import java.util.List;

@RestController
@RequiredArgsConstructor
@RequestMapping("/shop")
public class ShopController {

    private final OrderRepository orderRepository;

    private final UserRepository userRepository;

    private final OrderService orderService;
    private final ProductRepository productRepository;


    @GetMapping("/orders")
    public ResponseEntity<?> getOrdersByUser(Principal principal) {
        if(principal == null){
            return new ResponseEntity<>(new ResDTO("none", null, HttpStatus.UNAUTHORIZED), HttpStatus.UNAUTHORIZED);
        }
        var user = userRepository.getUserByName(principal.getName());

        var newNum = new OrdersDto(user.getOrders());

        return new ResponseEntity<>(newNum, HttpStatus.OK);
    }

    @PostMapping("/orders/add")
    public boolean orderAdd(@RequestBody List<CartItem> items, Principal principal) {
        return this.orderService.addOrder(items, principal.getName());
    }

    @GetMapping("/products")
    public ResponseEntity<?> getAllProducts() {
        if(productRepository.findAll().isEmpty()) {
            return new ResponseEntity<>( "Невозможно найти товар",HttpStatus.BAD_REQUEST);
        }
        var productList = new ProductsDTO(productRepository.findAll());
        return new ResponseEntity<>(productList, HttpStatus.OK);
    }

}
