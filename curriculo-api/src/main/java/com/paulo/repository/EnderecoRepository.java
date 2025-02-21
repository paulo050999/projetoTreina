package com.paulo.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.paulo.model.Endereco;

public interface EnderecoRepository extends JpaRepository<Endereco, Long> {
}