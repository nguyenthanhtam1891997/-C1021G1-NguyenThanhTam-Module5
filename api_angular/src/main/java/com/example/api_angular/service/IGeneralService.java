package com.example.api_angular.service;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

import java.util.List;

public interface IGeneralService<T> {

    List<T> findAll();

    Page<T> findAllPage(Pageable pageable);

    T findById(Integer id);

    T save(T t);

    void remove(Integer id);

}
