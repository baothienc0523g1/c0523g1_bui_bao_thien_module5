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
    public List<Customer> findAll() {
        return this.customerRepository.findAll();
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
    public void edit(Customer customer) {
        int existedId = customer.getId();
        Customer existedCustomer = this.customerRepository.findById(existedId)
                .orElseThrow(() -> new IllegalArgumentException("Customer is not exist"));
        if (existedCustomer != null) {
            this.customerRepository.save(customer);
        }
    }

    @Transactional
    @Override
    public void remove(int id) {
        Customer existedCustomer = this.customerRepository.findById(id)
                .orElseThrow(() -> new IllegalArgumentException("Cant found customer with ID: " + id));
        this.customerRepository.delete(existedCustomer);
    }

    @Override
    public Customer findById(int id) {
        return this.customerRepository.findById(id)
                .orElseThrow(() -> new IllegalArgumentException("Cant found customer with id: " + id));
    }
}
