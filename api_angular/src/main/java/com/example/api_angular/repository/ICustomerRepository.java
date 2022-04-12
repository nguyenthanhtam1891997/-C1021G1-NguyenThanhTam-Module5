package com.example.api_angular.repository;

import com.example.api_angular.model.Customer;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import javax.transaction.Transactional;
import java.util.List;

@Repository
@Transactional
public interface ICustomerRepository extends JpaRepository<Customer, Integer> {
    List<Customer> findAllByNameContainingAndAddressContaining(String name,String address);

    List<Customer>searchByNameAndAddress(String name,String address)
}
