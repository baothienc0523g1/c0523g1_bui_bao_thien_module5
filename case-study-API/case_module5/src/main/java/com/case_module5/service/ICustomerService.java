package com.case_module5.service;

import com.case_module5.model.Customer;

import java.util.List;

public interface ICustomerService {
    List<Customer> findAll(String searchName, String typeName);
    void add(Customer customer);
    boolean edit(Customer customer);
    boolean remove(int id);
    Customer findById(int id);
}
