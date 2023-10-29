package com.case_module5.service.impl;

import com.case_module5.model.CustomerType;
import com.case_module5.repository.ICustomerTypeRepository;
import com.case_module5.service.ICustomerTypeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
@Service
public class CustomerTypeService implements ICustomerTypeService {
    @Autowired
    private ICustomerTypeRepository customerTypeRepository;
    @Override
    public List<CustomerType> findAll() {
        return this.customerTypeRepository.findAll();
    }

    @Transactional
    @Override
    public void add(CustomerType customerType) {
        try {
            this.customerTypeRepository.save(customerType);
        } catch (Exception e) {
            System.out.println(e.getMessage());
        }
    }

    @Transactional
    @Override
    public void remove(int id) {
        CustomerType existedCustomerType = this.customerTypeRepository.findById(id)
                .orElseThrow(() -> new IllegalArgumentException("Cant found customer type"));
        this.customerTypeRepository.delete(existedCustomerType);
    }
}
