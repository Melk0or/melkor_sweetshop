package ru.melkor.sweetshop.service;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;
import ru.melkor.sweetshop.entity.Order;
import ru.melkor.sweetshop.entity.User;
import ru.melkor.sweetshop.repository.UserRepository;

@Service
@RequiredArgsConstructor
@Slf4j
public class UserService {
    private final UserRepository userRepository;

    public User getUserByName(String name) {
        return userRepository.getUserByName(name);
    }

    public void addOrder(Order order, String name) {
        var user = userRepository.getUserByName(name);
        user.getOrders().add(order);
        userRepository.save(user);
    }
}
