package pl.rynski.burgerbackend.service;

import pl.rynski.burgerbackend.dto.OrderDto;

import java.util.List;

public interface OrderService {
    List<OrderDto> getAllOrders();
    OrderDto addOrder(OrderDto orderDto);
}
