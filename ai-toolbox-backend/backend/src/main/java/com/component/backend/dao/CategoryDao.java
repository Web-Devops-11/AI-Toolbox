package com.component.backend.dao;
import com.component.backend.model.Category;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface  CategoryDao extends JpaRepository<Category, Long> {
    
}
