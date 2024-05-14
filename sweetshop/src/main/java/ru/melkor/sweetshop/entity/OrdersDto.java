package ru.melkor.sweetshop.entity;

import lombok.Data;
import lombok.Getter;
import lombok.Setter;

import java.util.ArrayList;
import java.util.List;

@Getter
@Setter
@Data
public class OrdersDto {
    private List<Integer> orderNums = new ArrayList<>();

    public OrdersDto(List<Order> orders) {
        for (var order: orders) {
            this.orderNums.add(order.getOrderNum());
        }
    }
}
