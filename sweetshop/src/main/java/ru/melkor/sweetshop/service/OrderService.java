package ru.melkor.sweetshop.service;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import ru.melkor.sweetshop.entity.*;
import ru.melkor.sweetshop.repository.OrderRepository;
import ru.melkor.sweetshop.repository.ProductRepository;
import ru.melkor.sweetshop.repository.UserRepository;

import java.security.Principal;
import java.util.ArrayList;
import java.util.List;
import java.util.Random;

@Service
@Slf4j
@RequiredArgsConstructor
public class OrderService {

    private final ProductRepository productRepository;
    private final OrderRepository orderRepository;
    private final UserService userService;
    private final UserRepository userRepository;

    public boolean addOrder(List<CartItem> items, String name) {
        try {
            var order = new Order();
            order.setOrderNum(getOrderNum());
            order.setUser(userService.getUserByName(name));
            order.setProductList(getProductList(items));
            orderRepository.save(order);
            userService.addOrder(order, name);
            return true;
        }
        catch (Exception e) {
           e.printStackTrace();
           return false;
        }

    }


    private List<Product> getProductList(List<CartItem> items)
    {
        var products = new ArrayList<Product>();
        for (var item : items)
        {
            var product = productRepository.getProductsByTitle(item.getProductName());
            products.add(product);

        }

        return products;
    }

    private int getOrderNum()
    {
        var random = new Random();
        return random.nextInt(900 - 100 + 1) + 100;
    }

    private boolean getOrdersByUser() {
        return true;
    }

}
