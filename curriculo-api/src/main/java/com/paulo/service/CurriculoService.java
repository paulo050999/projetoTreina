package com.paulo.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.paulo.model.Curriculo;
import com.paulo.repository.CurriculoRepository;

@Service
public class CurriculoService {

    @Autowired
    private CurriculoRepository repository;

    public List<Curriculo> findAll() {
        return repository.findAll();
    }

    public Curriculo save(Curriculo curriculo) {
        return repository.save(curriculo);
    }

    public Curriculo update(Curriculo curriculo) {
        return repository.save(curriculo);
    }

    public void deleteById(Long id) {
        repository.deleteById(id);
    }

    public Curriculo findById(Long id) {
        return repository.findById(id).orElse(null);
    }
}