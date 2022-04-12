package com.example.api_angular.repository;

import com.example.api_angular.model.CustomerType;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import javax.transaction.Transactional;

@Repository
@Transactional
public interface ICustomerTypeRepository extends JpaRepository<CustomerType, Integer> {
}
