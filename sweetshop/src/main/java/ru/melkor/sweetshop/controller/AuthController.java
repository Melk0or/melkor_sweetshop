package ru.melkor.sweetshop.controller;

import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.*;
import ru.melkor.sweetshop.config.JWTCore;
import ru.melkor.sweetshop.entity.ResDTO;
import ru.melkor.sweetshop.entity.SignBodyDTO;
import ru.melkor.sweetshop.entity.User;
import ru.melkor.sweetshop.repository.UserRepository;

import java.security.Principal;

@RestController
@RequiredArgsConstructor
@RequestMapping("/auth")
public class AuthController {
    private final UserRepository userRepository;
    private final PasswordEncoder passwordEncoder;
    private final AuthenticationManager authenticationManager;
    private final JWTCore jwtCore;

    @PostMapping("/sign-in")
    public ResponseEntity<?> signin(@RequestBody SignBodyDTO signInRequest){
        Authentication authentication = null;
        try {
            authentication = authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(signInRequest.getUsername(), signInRequest.getPassword()));
        } catch (BadCredentialsException e) {
            return new ResponseEntity<>(new ResDTO("none", "Неправильное имя пользователя или пароль", HttpStatus.UNAUTHORIZED), HttpStatus.UNAUTHORIZED);
        }
        SecurityContextHolder.getContext().setAuthentication(authentication);
        String jwt = jwtCore.generateToken(authentication);
        ResDTO res = new ResDTO(jwt, "success" , HttpStatus.OK);
        return new ResponseEntity<>(res, HttpStatus.OK);
    }

    @PostMapping("/sign-up")
    public ResponseEntity<?> signup(@RequestBody SignBodyDTO signUpRequest){
        if(userRepository.existsByName(signUpRequest.getUsername())){
            return new ResponseEntity<>(new ResDTO("none", "Логин уже существует!", HttpStatus.BAD_REQUEST), HttpStatus.BAD_REQUEST);
        }
        User user = new User();
        user.setName(signUpRequest.getUsername());
        user.setPassword(passwordEncoder.encode(signUpRequest.getPassword()));
        userRepository.save(user);
        Authentication authentication = null;
        authentication = authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(signUpRequest.getUsername(), signUpRequest.getPassword()));
        SecurityContextHolder.getContext().setAuthentication(authentication);
        String jwt = jwtCore.generateToken(authentication);
        ResDTO res = new ResDTO(jwt, "success", HttpStatus.OK);
        return new ResponseEntity<>(res, HttpStatus.OK);
    }

    @GetMapping("/getinfo")
    public ResponseEntity<?> getInfo(Principal principal) {
        if(principal == null){
            return new ResponseEntity<>(new ResDTO("none", null, HttpStatus.OK), HttpStatus.OK);
        }
        String name = principal.getName();
        return new ResponseEntity<>(new ResDTO("none", name, HttpStatus.OK), HttpStatus.OK);
    }
}
