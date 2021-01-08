package pl.rynski.burgerbackend.model;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;
import pl.rynski.burgerbackend.dto.OrderDto;

import javax.persistence.*;
import java.time.LocalDateTime;

@Entity
@Getter
@Setter
public class Orderr {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @Column(name = "price")
    private Double price;
    @Column(name = "delivery_method")
    private String deliveryMethod;
    @Column(name = "salad")
    private Integer salad;
    @Column(name = "bacon")
    private Integer bacon;
    @Column(name = "cheese")
    private Integer cheese;
    @Column(name = "meat")
    private Integer meat;
    @Column(name = "order_date", columnDefinition = "TIMESTAMP")
    private LocalDateTime orderDate;
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "customer")
    private Customer customer;

    public static Orderr fromOrderDto(OrderDto orderDto) {
        Orderr order = new Orderr();
        order.setPrice(orderDto.getPrice());
        order.setDeliveryMethod(orderDto.getDeliveryMethod());
        order.setSalad(orderDto.getIngredients().getSalad());
        order.setBacon(orderDto.getIngredients().getBacon());
        order.setCheese(orderDto.getIngredients().getCheese());
        order.setMeat(orderDto.getIngredients().getMeat());
        return order;
    }
}
