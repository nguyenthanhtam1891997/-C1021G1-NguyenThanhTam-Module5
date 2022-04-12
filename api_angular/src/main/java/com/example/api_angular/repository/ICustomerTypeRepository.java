package com.example.api_angular.repository;

import com.example.api_angular.model.CustomerType;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ICustomerType extends JpaRepository<CustomerType, Integer> {
}
