package com.case_module5.service.impl;

import com.case_module5.model.Customer;
import com.case_module5.repository.ICustomerRepository;
import com.case_module5.service.ICustomerService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
public class CustomerService implements ICustomerService {
    @Autowired
    private ICustomerRepository customerRepository;

    @Override
    public List<Customer> findAll(String searchName, String typeName) {
        return this.customerRepository.findAllCustomer("%" + searchName + "%", "%" + typeName + "%");
    }

    @Transactional
    @Override
    public void add(Customer customer) {
        try {
            this.customerRepository.save(customer);
        } catch (Exception e) {
            System.out.println(e.getMessage());
        }
    }

    @Transactional
    @Override
    public boolean edit(Customer customer) {
        int existedId = customer.getId();
        Customer existedCustomer = this.customerRepository.findById(existedId)
                .orElseThrow(() -> new IllegalArgumentException("Customer is not exist"));
        if (existedCustomer != null) {
            this.customerRepository.save(customer);
            return true;
        } else {
            return false;
        }
    }

    @Transactional
    @Override
    public boolean remove(int id) {
        Customer existedCustomer = this.customerRepository.findById(id)
                .orElseThrow(() -> new IllegalArgumentException("Cant found customer with ID: " + id));
        if (existedCustomer == null) {
            return false;
        } else {
            this.customerRepository.delete(existedCustomer);
            return true;
        }
    }

    @Override
    public Customer findById(int id) {
        return this.customerRepository.findById(id)
                .orElseThrow(() -> new IllegalArgumentException("Cant found customer with id: " + id));
    }
}
