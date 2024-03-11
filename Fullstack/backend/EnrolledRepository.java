package firstsample.demo.Repository;

import java.util.HashMap;
import java.util.List;

import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import firstsample.demo.Model.CoursesModel;
import firstsample.demo.Model.EnrolledcourseModel;
import firstsample.demo.dto.response.*;

@Repository
public interface EnrolledRepository extends CrudRepository<EnrolledcourseModel, Long>{
    @Query(value = "DELETE FROM enrolledcourse_model WHERE enrolled_id = :enrolledId", nativeQuery = true)
    void deleteByEnrolledId(int enrolledId);
    @Query(value = "SELECT * FROM enrolledcourse_model GROUP BY user_id", nativeQuery = true)
    void getAllEnrollsGroup(int enrolledId);

    @Query(value = "SELECT  COUNT(*) as count FROM enrolledcourse_model", nativeQuery = true)
    Integer getCount();

    // @Query(value = "SELECT  COUNT(*) as count FROM enrolledcourse_model", nativeQuery = true)
    // Integer getCount();    
    
    @Query(value = "SELECT * FROM enrolledcourse_model WHERE user_id = :userId", nativeQuery = true)
    List<EnrolledcourseModel> selectByUserId(int userId);

    @Query(value = "SELECT * FROM courses_model WHERE course_id =:courseId", nativeQuery = true)
    List<Object[]> getByCourseId(int courseId);

    // List<HashMap<Integer, Integer>> getCount(int i);

}