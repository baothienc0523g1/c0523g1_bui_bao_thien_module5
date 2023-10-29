package com.case_module5.model;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;

@Entity
@Setter
@Getter
@NoArgsConstructor
@AllArgsConstructor
public class Customer {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private int id;
    @Column(name = "name", columnDefinition = "VARCHAR(255)", nullable = false)
    private String name;
    @Column(name = "birth_day", columnDefinition = "DATE", nullable = false)
    private String birthDay;
    @Column(name = "identity", columnDefinition = "VARCHAR(50)", nullable = false)
    private String identity;
    @Column(name = "phone_number", columnDefinition = "VARCHAR(50)", nullable = false)
    private String phoneNumber;
    @Column(name = "email", columnDefinition = "VARCHAR(100)", nullable = false)
    private String email;
    @Column(name = "address", columnDefinition = "VARCHAR(100)", nullable = false)
    private String address;

    @ManyToOne
    @JoinColumn(name = "gender", referencedColumnName = "id")
    private Gender gender;

    @ManyToOne
    @JoinColumn(name = "customer_type", referencedColumnName = "id")
    private CustomerType customerType;

}
