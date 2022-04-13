package com.example.api_angular.repository;

import com.example.api_angular.model.Customer;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import javax.transaction.Transactional;
import java.util.List;

@Repository
@Transactional
public interface ICustomerRepository extends JpaRepository<Customer, Integer> {
    List<Customer> findAllByNameContainingAndAddressContaining(String name, String address);


//    @Query(value = "select p from customer p  where CONCAT(p.name,p.address) LIKE %?1%",nativeQuery = true)
    @Query(value = "select * from customer where `name` like %:name% and address like %:address%",nativeQuery = true)
    List<Customer> searchByNameAndAddress(String name, String address);
}
