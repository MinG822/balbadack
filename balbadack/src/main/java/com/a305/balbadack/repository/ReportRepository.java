package com.a305.balbadack.repository;

import java.util.List;

import com.a305.balbadack.model.dto.Report;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ReportRepository extends JpaRepository{

    List<Report> findByU_id(String u_id);

    List<Report> findByR_code(int r_code);

}