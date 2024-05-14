package ru.melkor.sweetshop.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import ru.melkor.sweetshop.entity.Product;

@Repository
public interface ProductRepository extends JpaRepository<Product, Integer> {
    Product getProductsByTitle(String name);
}
