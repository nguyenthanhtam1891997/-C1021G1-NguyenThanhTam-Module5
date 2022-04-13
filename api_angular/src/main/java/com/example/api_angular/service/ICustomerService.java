package com.example.api_angular.service;

import com.example.api_angular.model.Customer;

import java.util.List;

public interface ICustomerService extends IGeneralService<Customer> {
    List<Customer> findAllByNameContainingAndAddressContaining(String name, String address);

    List<Customer> searchByNameAndAddress(String name, String address);
}
