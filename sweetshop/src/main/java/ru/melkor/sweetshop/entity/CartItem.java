package ru.melkor.sweetshop.entity;

import jakarta.persistence.Entity;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class CartItem {
    private String productName;
    private int count;
    private int price;
}
