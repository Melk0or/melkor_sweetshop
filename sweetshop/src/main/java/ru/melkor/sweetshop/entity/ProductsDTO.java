package ru.melkor.sweetshop.entity;

import lombok.Data;
import lombok.Getter;
import lombok.RequiredArgsConstructor;
import lombok.Setter;
import org.springframework.beans.factory.annotation.Autowired;
import ru.melkor.sweetshop.repository.ProductRepository;

import java.util.List;

@Getter
@Setter
@Data
public class ProductsDTO {
    private List<Product> productList;

    public ProductsDTO(List<Product> productList) {
        this.productList =  productList;
    }
}
