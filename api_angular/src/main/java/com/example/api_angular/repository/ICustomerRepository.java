package com.example.api_angular.repository;

import com.example.api_angular.model.Customer;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import javax.transaction.Transactional;
import java.util.List;

@Repository
@Transactional
public interface ICustomerRepository extends JpaRepository<Customer, Integer> {
    List<Customer> findAllByNameContainingAndAddressContaining(String name, String address);


    //    @Query(value = "select p from customer p  where CONCAT(p.name,p.address) LIKE %?1%",nativeQuery = true)
    @Query(value = "select * from customer where `name` like %:name% and address like %:address%", nativeQuery = true)
    List<Customer> searchByNameAndAddress(@Param("name") String name, @Param("address") String address);

    @Query(value = "select * from customer   where code = :code", nativeQuery = true)
    Customer searchCode(@Param("code") String code);

    Customer findByCode(String code);

    @Query(value = "select * from customer where card = :card",nativeQuery = true)
    Customer searchCard(@Param("card") String card);

    @Query(value = "select * from customer where code = :code and card = :card",nativeQuery = true)
    Customer searchAll(@Param("code") String code,@Param("card") String card);
}
