package com.paulo.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import com.paulo.repository.CurriculoRepository;

@RestController
public class CurriculoController {

    @Autowired
    private CurriculoRepository curriculoRepository;

    @GetMapping("/testeConexao")
    public String testeConexao() {
        try {
            long count = curriculoRepository.count(); 
            return "Conexão com o banco de dados está funcionando. Total de currículos: " + count;
        } catch (Exception e) {
            return "Falha na conexão com o banco de dados: " + e.getMessage();
        }
    }
}