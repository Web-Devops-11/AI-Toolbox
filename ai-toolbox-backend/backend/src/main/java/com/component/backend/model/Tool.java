package com.component.backend.model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;


@Entity
@Table(name = "tools")
public class Tool {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long tool_id;

    private String tool_name;

    private String description;

    private String image_url;
  
    public Tool() {
    }

    public Tool(String toolName, String description, String image_url) {
        this.tool_name = toolName;
        this.description = description;
        this.image_url = image_url;
    }

    // Getters and Setters
    public Long getToolId() { return tool_id; }
    public void setToolId(Long tool_id) { this.tool_id = tool_id; }

    public String getToolName() { return tool_name; }
    public void setToolName(String tool_name) { this.tool_name = tool_name; }

    public String getDescription() { return description; }
    public void setDescription(String description) { this.description = description; }

    public String getImageUrl() { return image_url; }
    public void setImageUrl(String image_url) { this.image_url = image_url; }

}
