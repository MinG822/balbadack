package com.a305.balbadack.repository;

import java.util.List;

import com.a305.balbadack.model.dto.Careinfo;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface CareinfoRepository extends JpaRepository {
    
    List<Careinfo> findByR_code(int r_code);

}