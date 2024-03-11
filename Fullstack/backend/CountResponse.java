package firstsample.demo.dto.response;

// Custom DTO class to represent the result of the query
public class CountResponse {
    private Integer courseId;
    private Integer count;

    public CountResponse(Integer courseId, Integer count) {
        this.courseId = courseId;
        this.count = count;
    }

    public Integer getCourseId() {
        return courseId;
    }

    public void setCourseId(Integer courseId) {
        this.courseId = courseId;
    }

    public Integer getCount() {
        return count;
    }

    public void setCount(Integer count) {
        this.count = count;
    }
}
