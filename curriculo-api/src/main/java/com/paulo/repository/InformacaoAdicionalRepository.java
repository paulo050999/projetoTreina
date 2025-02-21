package com.paulo.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.paulo.model.InformacaoAdicional;

public interface InformacaoAdicionalRepository extends JpaRepository<InformacaoAdicional, Long> {
}