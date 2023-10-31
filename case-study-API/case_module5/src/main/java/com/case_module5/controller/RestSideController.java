package com.case_module5.controller;

import com.case_module5.model.CustomerType;
import com.case_module5.model.Gender;
import com.case_module5.service.ICustomerTypeService;
import com.case_module5.service.IGenderService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/api/side")
@CrossOrigin("*")
public class RestSideController {
    @Autowired
    private IGenderService genderService;
    @Autowired
    private ICustomerTypeService customerTypeService;

    @GetMapping("/genders")
    public ResponseEntity<List<Gender>> getAllGender() {
        List<Gender> genderList = this.genderService.findAll();
        if (genderList.isEmpty()) {
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        }
        return new ResponseEntity<>(genderList, HttpStatus.OK);
    }

    @GetMapping("/types")
    public ResponseEntity<List<CustomerType>> getAllType() {
        List<CustomerType> customerTypes = this.customerTypeService.findAll();
        if (customerTypes.isEmpty()) {
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        }
        return new ResponseEntity<>(customerTypes, HttpStatus.OK);
    }



}
