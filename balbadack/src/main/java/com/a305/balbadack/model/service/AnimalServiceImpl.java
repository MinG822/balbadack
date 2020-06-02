package com.a305.balbadack.model.service;

import java.util.List;

import javax.transaction.Transactional;

import com.a305.balbadack.model.dto.Animal;
import com.a305.balbadack.repository.AnimalRepository;
import com.a305.balbadack.repository.UserRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class AnimalServiceImpl implements AnimalService {

    @Autowired
    AnimalRepository animalRepository;

    @Override
    public void create(Animal animal) throws Exception {
        try {
            animalRepository.save(animal);
        } catch (Exception e) {
            e.printStackTrace();
            throw new RuntimeException("동물 등록 중 오류가 발생했습니다.");
        }
    }

    @Override
    public void update(Animal animal) throws Exception {
        try {
            animalRepository.save(animal);
        } catch (Exception e) {
            e.printStackTrace();
            throw new RuntimeException("동물정보 수정 중 오류가 발생했습니다.");
        }

    }

    @Transactional
    @Override
    public void delete(String id, String key) throws Exception {
        try {
            animalRepository.delete(id, key);
        } catch (Exception e) {
            e.printStackTrace();
            throw new RuntimeException("동물정보 삭제 중 오류가 발생했습니다.");
        }
    }

    @Override
    public Animal findByACode(String u_id, Integer a_code) throws Exception {
        Animal animal = null;
        try {
            animal = animalRepository.findByACode(u_id, a_code);
        } catch (Exception e) {
            e.printStackTrace();
        }
        return animal;
    }

    @Override
    public List<Animal> findByUid(String u_id) throws Exception {
        List<Animal> animals = null;
        try {
            System.out.println("u_id: "+ u_id);
            animals = animalRepository.findByUList(u_id);
            System.out.println(animals.toString());
        } catch (Exception e) {
            e.printStackTrace();
        }
        return animals;
    }
    
}