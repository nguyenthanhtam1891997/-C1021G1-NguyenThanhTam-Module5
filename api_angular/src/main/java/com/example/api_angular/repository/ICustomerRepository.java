package com.example.api_angular.repository;

import com.example.api_angular.model.Customer;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ICustomer extends JpaRepository<Customer, Integer> {
}
