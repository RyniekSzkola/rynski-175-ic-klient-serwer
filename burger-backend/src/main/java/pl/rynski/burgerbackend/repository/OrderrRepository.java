package pl.rynski.burgerbackend.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import pl.rynski.burgerbackend.model.Orderr;

@Repository
public interface OrderrRepository extends JpaRepository<Orderr, Long> {
}
