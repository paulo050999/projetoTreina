package com.paulo.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.paulo.model.Curriculo;

public interface CurriculoRepository extends JpaRepository<Curriculo, Long> {
}