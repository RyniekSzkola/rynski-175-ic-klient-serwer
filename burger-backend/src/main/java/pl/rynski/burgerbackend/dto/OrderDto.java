package pl.rynski.burgerbackend.dto;

import lombok.Data;
import lombok.ToString;
import pl.rynski.burgerbackend.model.Orderr;

import java.time.LocalDateTime;

@Data
@ToString
public class OrderDto {
    private Long id;
    private Ingredients ingredients;
    private Double price;
    private Customer customer;
    private String deliveryMethod;
    private LocalDateTime orderDate;

    @Data
    public static class Customer {
        private String name;
        private Address address;
        private String email;

        @Data
        public static class Address {
            private String street;
            private String zipCode;
            private String country;
        }
    }

    @Data
    public static class Ingredients {
        private Integer salad;
        private Integer bacon;
        private Integer cheese;
        private Integer meat;
    }

    public static OrderDto fromOrder(Orderr order) {
        OrderDto orderDto = new OrderDto();
        orderDto.setId(order.getId());
        orderDto.setPrice(order.getPrice());
        orderDto.setDeliveryMethod(order.getDeliveryMethod());
        orderDto.setOrderDate(order.getOrderDate());
        Ingredients ingredients = new Ingredients();
        ingredients.setBacon(order.getBacon());
        ingredients.setCheese(order.getCheese());
        ingredients.setSalad(order.getSalad());
        ingredients.setMeat(order.getMeat());
        orderDto.setIngredients(ingredients);
        Customer customer = new Customer();
        customer.setName(order.getCustomer().getName());
        customer.setEmail(order.getCustomer().getEmail());
        Customer.Address address = new Customer.Address();
        address.setStreet(order.getCustomer().getStreet());
        address.setZipCode(order.getCustomer().getZipCode());
        address.setCountry(order.getCustomer().getCountry());
        customer.setAddress(address);
        orderDto.setCustomer(customer);
        return orderDto;
    }
}
