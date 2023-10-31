package com.case_module5.service.impl;

import com.case_module5.model.Gender;
import com.case_module5.repository.IGenderRepository;
import com.case_module5.service.IGenderService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
public class GenderService implements IGenderService {
    @Autowired
    private IGenderRepository genderRepository;
    @Override
    public List<Gender> findAll() {
        return this.genderRepository.findAll();
    }

    @Transactional
    @Override
    public void add(Gender gender) {
        try {
            this.genderRepository.save(gender);
        } catch (Exception e) {
            System.out.println(e.getMessage());
        }
    }

    @Transactional
    @Override
    public void remove(int id) {
        Gender existedGender = this.genderRepository.findById(id)
                .orElseThrow(() -> new IllegalArgumentException("Data not found"));
        this.genderRepository.delete(existedGender);
    }
}
