package firstsample.demo.Model;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity
public class CoursesModel {

    @Id
    @Column(name="course_id")
    @GeneratedValue(strategy = GenerationType.AUTO)
    public long course_id;
    public String course_name;
    public String description;
    public String duration;
    public long fees;
    public String level;
    // public String instructor;
    public String imageUrl;
    // @ManyToOne(cascade=CascadeType.ALL)
    // @JoinColumn(name="admin_id")
    // public Admin admin;
    
    public long getCourse_id() {
        return course_id;
    }
    public void setCourse_id(long course_id) {
        this.course_id = course_id;
    }
    public String getCourse_name() {
        return course_name;
    }
    public void setCourse_name(String course_name) {
        this.course_name = course_name;
    }
    public String getDescription() {
        return description;
    }
    public void setDescription(String description) {
        this.description = description;
    }
    public String getDuration() {
        return duration;
    }
    public void setDuration(String duration) {
        this.duration = duration;
    }
    public long getFees() {
        return fees;
    }
    public void setFees(long fees) {
        this.fees = fees;
    }
    public String getLevel() {
        return level;
    }
    public void setLevel(String level) {
        this.level = level;
    }
    // public String getInstructor() {
    //     return instructor;
    // }
    // public void setInstructor(String instructor) {
    //     this.instructor = instructor;
    // }
    public String getImageUrl() {
        return imageUrl;
    }

    public void setImageUrl(String url) {
        this.imageUrl = url;
    }
}
