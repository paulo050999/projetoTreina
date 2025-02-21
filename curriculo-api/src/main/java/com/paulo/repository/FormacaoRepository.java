package com.paulo.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.paulo.model.Formacao;

public interface FormacaoRepository extends JpaRepository<Formacao, Long> {
}