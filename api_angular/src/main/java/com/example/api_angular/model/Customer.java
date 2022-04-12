package com.example.api_angular.model;

import com.fasterxml.jackson.annotation.JsonBackReference;
import org.hibernate.annotations.Cascade;

import javax.persistence.*;

@Entity
@Table(name = "customer")
public class Customer {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;


    private String name;
    private String code;
    @Column(columnDefinition = "DATE")
    private String dayOfBirth;
    private String gender;
    private String card;
    private String phone;
    private String email;
    private String address;

//    @JsonBackReference
    @ManyToOne
    @JoinColumn(name = "customer_type_id", referencedColumnName = "id")
//    @Cascade(org.hibernate.annotations.CascadeType.ALL)
    private CustomerType customerType;

    public Customer() {
    }

    public Customer(Integer id, String name, String code, String dayOfBirth, String gender, String card, String phone, String email, String address, CustomerType customerType) {
        this.id = id;
        this.name = name;
        this.code = code;
        this.dayOfBirth = dayOfBirth;
        this.gender = gender;
        this.card = card;
        this.phone = phone;
        this.email = email;
        this.address = address;
        this.customerType = customerType;
    }

    public CustomerType getCustomerType() {
        return customerType;
    }

    public void setCustomerType(CustomerType customerType) {
        this.customerType = customerType;
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getCode() {
        return code;
    }

    public void setCode(String code) {
        this.code = code;
    }

    public String getDayOfBirth() {
        return dayOfBirth;
    }

    public void setDayOfBirth(String dayOfBirth) {
        this.dayOfBirth = dayOfBirth;
    }

    public String getGender() {
        return gender;
    }

    public void setGender(String gender) {
        this.gender = gender;
    }

    public String getCard() {
        return card;
    }

    public void setCard(String card) {
        this.card = card;
    }

    public String getPhone() {
        return phone;
    }

    public void setPhone(String phone) {
        this.phone = phone;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getAddress() {
        return address;
    }

    public void setAddress(String address) {
        this.address = address;
    }


}
