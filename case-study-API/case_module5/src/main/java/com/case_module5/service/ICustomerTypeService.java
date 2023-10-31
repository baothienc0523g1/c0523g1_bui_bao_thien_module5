package com.case_module5.service;

import com.case_module5.model.CustomerType;

import java.util.List;

public interface ICustomerTypeService {
    List<CustomerType> findAll();
    void add(CustomerType customerType);
    void remove(int id);
}
