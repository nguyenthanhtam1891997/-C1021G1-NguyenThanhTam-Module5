package com.example.api_angular.service;

import com.example.api_angular.model.Customer;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface ICustomerService extends IGeneralService<Customer> {
    List<Customer> findAllByNameContainingAndAddressContaining(String name, String address);

    List<Customer> searchByNameAndAddress(String name, String address);

    Customer searchCode(String code);

    Customer findByCode(String code);

    Customer searchCard(@Param("card") String card);

    Customer searchAll(@Param("code") String code,@Param("card") String card);
}
