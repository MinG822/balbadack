package com.a305.balbadack.repository;

import java.util.List;

import com.a305.balbadack.model.dto.Hospital;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

@Repository
public interface HospitalRepository extends JpaRepository<Hospital, Integer> {
  

  @Query(value = "select * from hospital h where h.h_name='노엘동물병원'", nativeQuery = true)
  List<Hospital> findByName(@Param("h_name") String h_name);

}