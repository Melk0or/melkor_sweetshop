package ru.melkor.sweetshop.config;

import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;
import org.json.JSONException;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.security.core.Authentication;
import org.springframework.stereotype.Component;
import ru.melkor.sweetshop.service.ServUserDetails;

import java.util.Base64;

@Component
public class JWTCore {
    @Value("${app.secret}")
    private String secret;
    @Value("${app.lifetime}")
    private int lifetime;

    public String generateToken(Authentication authentication){
        ServUserDetails servUserDetails = (ServUserDetails) authentication.getPrincipal();
        return Jwts.builder()
                .setSubject(servUserDetails.getUsername())
                .signWith(SignatureAlgorithm.HS256, secret)
                .compact();
    }

    public String getNameFromJwt(String token) throws JSONException {
        String[] chunks = token.split("\\.");
        Base64.Decoder decoder = Base64.getUrlDecoder();
        String payload = new String(decoder.decode(chunks[1]));
        org.json.JSONObject jsonObject = new org.json.JSONObject(payload);
        return jsonObject.getString("sub");
    }
}
