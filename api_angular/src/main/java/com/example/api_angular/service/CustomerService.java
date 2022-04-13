package com.example.api_angular.service;

import com.example.api_angular.model.Customer;
import com.example.api_angular.repository.ICustomerRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CustomerService implements ICustomerService {
    @Autowired
    private ICustomerRepository customerRepository;

    @Override
    public List<Customer> findAll() {
        return customerRepository.findAll();
    }

    @Override
    public Page<Customer> findAllPage(Pageable pageable) {
        return customerRepository.findAll(pageable);
    }

    @Override
    public Customer findById(Integer id) {
        return customerRepository.findById(id).orElse(null);
    }

    @Override
    public Customer save(Customer customer) {
        return customerRepository.save(customer);
    }

    @Override
    public void remove(Integer id) {
        customerRepository.deleteById(id);
    }

    @Override
    public List<Customer> findAllByNameContainingAndAddressContaining(String name, String address) {
        return customerRepository.findAllByNameContainingAndAddressContaining(name,address);
    }

    @Override
    public List<Customer> searchByNameAndAddress(String name, String address) {
        return customerRepository.searchByNameAndAddress(name,address);
    }
}
