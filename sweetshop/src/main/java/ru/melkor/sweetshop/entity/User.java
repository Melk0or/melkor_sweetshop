package ru.melkor.sweetshop.entity;

import jakarta.persistence.*;
import lombok.Data;
import lombok.Getter;
import lombok.Setter;

import java.util.List;

@Entity
@Table(name = "app_users")
@Getter
@Setter
@Data
public class User
{
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @Column(name="user_name", nullable=false, length=25)
    private String name;
    @Column(nullable=false)
    private String password;

    @OneToMany
    private List<Order> orders;
}
