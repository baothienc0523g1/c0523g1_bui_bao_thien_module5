package com.case_module5.service;

import com.case_module5.model.Gender;

import java.util.List;

public interface IGenderService {
    List<Gender> findAll();
    void add(Gender gender);
    void remove(int id);
}
