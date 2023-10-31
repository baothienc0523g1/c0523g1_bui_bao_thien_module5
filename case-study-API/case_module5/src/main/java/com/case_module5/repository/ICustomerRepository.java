package com.case_module5.repository;

import com.case_module5.model.Customer;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Transactional
@Repository
public interface ICustomerRepository extends JpaRepository<Customer, Integer> {
    @Query(value = "select customers.* " +
            "    from customers " +
            "    join gender on customers.gender = gender.id " +
            "    join customer_type on customers.customer_type = customer_type.id " +
            "    where (customers.name like :name) and (customer_type.type_name like :type)" +
            "    order by customers.id desc ",
            nativeQuery = true)
    List<Customer> findAllCustomer(@Param("name") String searchName,@Param("type") String type);
}
