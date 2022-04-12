package com.example.api_angular.model;

import com.fasterxml.jackson.annotation.JsonBackReference;
import org.hibernate.annotations.Cascade;

import javax.persistence.*;
import java.util.Set;

@Entity
@Table(name = "customer_type")
public class CustomerType {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;


    private String nameType;
    @JsonBackReference
    @OneToMany(mappedBy = "customerType")
    @Cascade(org.hibernate.annotations.CascadeType.ALL)
    private Set<Customer> customers;

    public CustomerType() {
    }

    public CustomerType(Integer id, String nameType, Set<Customer> customers) {
        this.id = id;
        this.nameType = nameType;
        this.customers = customers;
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getNameType() {
        return nameType;
    }

    public void setNameType(String nameType) {
        this.nameType = nameType;
    }

    public Set<Customer> getCustomers() {
        return customers;
    }

    public void setCustomers(Set<Customer> customers) {
        this.customers = customers;
    }
}
