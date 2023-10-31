package com.case_module5.controller;

import com.case_module5.model.Customer;
import com.case_module5.service.ICustomerService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/customers")
@CrossOrigin("*")
public class RestCustomerController {
    @Autowired
    private ICustomerService customerService;

    @GetMapping()
    public ResponseEntity<List<Customer>> getList(
            @RequestParam(required = false, defaultValue = "", name = "name_like") String searchName,
            @RequestParam(required = false, defaultValue = "", name = "customerType.typeName_like") String type) {
        List<Customer> customers = this.customerService.findAll(searchName, type);
        if (customers.isEmpty()) {
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        } else {
            return new ResponseEntity<>(customers, HttpStatus.OK);
        }
    }

    @PostMapping()
    public ResponseEntity<?> add(@RequestBody Customer customer) {
        this.customerService.add(customer);
        return new ResponseEntity<>(HttpStatus.CREATED);
    }

    @GetMapping("/{id}")
    public ResponseEntity<Customer> findById(@PathVariable(name = "id") int id) {
        Customer customer = this.customerService.findById(id);
        if (customer == null) {
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        } else {
            return new ResponseEntity<>(customer, HttpStatus.OK);
        }
    }

    @PutMapping()
    public ResponseEntity<?> edit(@RequestBody Customer customer) {
        if (this.customerService.edit(customer)) {
            return new ResponseEntity<>(HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        }
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<?> remove(@PathVariable(name = "id") int id) {
        if (this.customerService.remove(id)) {
            return new ResponseEntity<>(HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }


}
