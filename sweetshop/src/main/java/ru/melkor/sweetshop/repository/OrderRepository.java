package ru.melkor.sweetshop.repository;


import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import ru.melkor.sweetshop.entity.Order;
import ru.melkor.sweetshop.entity.User;

import java.util.List;

@Repository
public interface OrderRepository extends JpaRepository<Order, Integer> {
}
