package pl.rynski.burgerbackend.service;

import lombok.RequiredArgsConstructor;
import org.hibernate.criterion.Order;
import org.springframework.stereotype.Service;
import pl.rynski.burgerbackend.dto.OrderDto;
import pl.rynski.burgerbackend.model.Customer;
import pl.rynski.burgerbackend.model.Orderr;
import pl.rynski.burgerbackend.repository.CustomerRepository;
import pl.rynski.burgerbackend.repository.OrderrRepository;

import java.time.LocalDateTime;
import java.util.List;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class OrderServiceImpl implements OrderService {

    private final CustomerRepository customerRepository;
    private final OrderrRepository orderrRepository;

    @Override
    public List<OrderDto> getAllOrders() {
        List<Orderr> order = orderrRepository.findAll();
        return order.stream().map(or -> OrderDto.fromOrder(or)).collect(Collectors.toList());
    }

    @Override
    public OrderDto addOrder(OrderDto orderDto) {
        Orderr order = Orderr.fromOrderDto(orderDto);
        order.setOrderDate(LocalDateTime.now());
        Customer customer = customerRepository.findByName(orderDto.getCustomer().getName()).orElse(null);
        if(customer == null) {
            customer = Customer.fromOrderDto(orderDto);
            customerRepository.save(customer);
        }
        try {
            Thread.sleep(2000);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
        order.setCustomer(customer);
        orderrRepository.save(order);
        return orderDto;
    }
}
