package com.component.backend.model;

import jakarta.persistence.*;

@Entity
@Table(name = "tool_categories")
public class Category {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long category_id;

    private String category_name;

    private String icon;

    public Category() {
    }

    public Category(String categoryName, String icon) {
        this.category_name = categoryName;
        this.icon = icon;
    }

    // Getters & Setters
    public Long getCategoryId() { return category_id; }
    public void setCategoryId(Long category_id) { this.category_id = category_id; }

    public String getCategoryName() { return category_name; }
    public void setCategoryName(String category_name) { this.category_name = category_name; }

    public String getIcon() { return icon; }
    public void setIcon(String icon) { this.icon = icon; }
}
