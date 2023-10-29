package com.case_module5.service;

import com.case_module5.model.Customer;

import java.util.List;

public interface ICustomerService {
    List<Customer> findAll();
    void add(Customer customer);
    void edit(Customer customer);
    void remove(int id);
    Customer findById(int id);
}
