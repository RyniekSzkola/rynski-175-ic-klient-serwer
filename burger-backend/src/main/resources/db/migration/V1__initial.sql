CREATE TABLE `customer` (
    id bigint NOT NULL AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(200),
    email VARCHAR(255),
    street VARCHAR(255),
    zip_code VARCHAR(255),
    country VARCHAR(255),
    UNIQUE (name)
) ENGINE=INNODB AUTO_INCREMENT=1 DEFAULT CHARSET=utf8mb4;

CREATE TABLE `orderr` (
                         id bigint NOT NULL AUTO_INCREMENT PRIMARY KEY,
                         price DOUBLE,
                         delivery_method VARCHAR(255),
                         salad INTEGER,
                         bacon INTEGER,
                         cheese INTEGER,
                         meat INTEGER,
                         customer BIGINT,
                         order_date TIMESTAMP,
                         FOREIGN KEY (customer) REFERENCES customer(id)
) ENGINE=INNODB AUTO_INCREMENT=1 DEFAULT CHARSET=utf8mb4;