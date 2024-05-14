package ru.melkor.sweetshop.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import ru.melkor.sweetshop.entity.User;

import java.util.Optional;

@Repository
public interface UserRepository extends JpaRepository<User,  Long> {
    Optional<User> findUserByName(String username);

    User getUserByName(String username);
    boolean existsByName(String username);
}
