package com.case_module5.repository;

import com.case_module5.model.Gender;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface IGenderRepository extends JpaRepository<Gender, Integer> {
}
