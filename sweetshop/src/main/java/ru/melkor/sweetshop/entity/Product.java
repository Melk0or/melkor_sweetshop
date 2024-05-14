package ru.melkor.sweetshop.entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.Getter;
import lombok.Setter;
@Data
@Entity
@Getter
@Setter
@Table(name = "products")
public class Product {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    @Column(nullable=false, length=25)
    private String title;
    @Column(nullable=false, length=250)
    private String description;
    @Column(nullable=false)
    private int price;
    @Column(nullable=false, length=25)
    private String category;
    @Column(nullable=false, length=250)
    private String imgSrc;

    public Product(String title, String desc, int price, String category, String imgS) {
        this.title = title;
        this.description = desc;
        this.price = price;
        this.category = category;
        this.imgSrc = imgS;
    }

    public Product() {}
}
