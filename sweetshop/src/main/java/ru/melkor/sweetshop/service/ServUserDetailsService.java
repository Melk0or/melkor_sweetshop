package ru.melkor.sweetshop.service;

import lombok.RequiredArgsConstructor;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;
import ru.melkor.sweetshop.entity.User;
import ru.melkor.sweetshop.repository.UserRepository;

@Service
@RequiredArgsConstructor
public class ServUserDetailsService implements UserDetailsService {

    private final UserRepository userRepository;

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        User user = userRepository.findUserByName(username).orElseThrow(() -> new UsernameNotFoundException(username + " not found"));
        return ServUserDetails.build(user);
    }
}
