package com.paulo.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.paulo.model.Experiencia;

public interface ExperienciaRepository extends JpaRepository<Experiencia, Long> {
}