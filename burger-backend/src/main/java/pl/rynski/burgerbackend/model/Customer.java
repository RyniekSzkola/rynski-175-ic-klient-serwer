package pl.rynski.burgerbackend.model;

import lombok.Getter;
import lombok.Setter;
import pl.rynski.burgerbackend.dto.OrderDto;

import javax.persistence.*;
import java.time.LocalDateTime;
import java.util.HashSet;
import java.util.Set;

@Entity
@Getter
@Setter
public class Customer {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @Column(name = "name", unique = true, columnDefinition = "VARCHAR(200)")
    private String name;
    @Column(name = "email")
    private String email;
    @Column(name = "street")
    private String street;
    @Column(name = "zip_code")
    private String zipCode;
    @Column(name = "country")
    private String country;
    @OneToMany(mappedBy = "customer")
    private Set<Orderr> orders = new HashSet<>();

    public static Customer fromOrderDto(OrderDto orderDto) {
        Customer customer = new Customer();
        customer.setName(orderDto.getCustomer().getName());
        customer.setEmail(orderDto.getCustomer().getEmail());
        customer.setStreet(orderDto.getCustomer().getAddress().getStreet());
        customer.setZipCode(orderDto.getCustomer().getAddress().getZipCode());
        customer.setCountry(orderDto.getCustomer().getAddress().getCountry());
        return customer;
    }
}
