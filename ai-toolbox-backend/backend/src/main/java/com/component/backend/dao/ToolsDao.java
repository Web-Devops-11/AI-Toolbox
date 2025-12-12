package com.component.backend.dao;

import com.component.backend.model.*;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;


@Repository
public interface ToolsDao extends JpaRepository<Tool, Long> {

}

