package firstsample.demo.Service;
import org.springframework.stereotype.Service;

import org.springframework.beans.factory.annotation.Autowired;

import firstsample.demo.Model.Admin;
import firstsample.demo.Repository.AdminRepository;
import java.util.List;

@Service
public class AdminService{
    @Autowired
    private AdminRepository signRepo;
	public Admin saveSignInDetails(Admin student) {
		// TODO Auto-generated method stub
		return signRepo.save(student) ;
	}
	// public UserModel updateSignInDetails(UserModel student) {
	// 	// TODO Auto-generated method stub
	// 	return signRepo.save(student);
	// }

	public List<Admin> findAllSignInDetails() {
		// TODO Auto-generated method stub
		return (List<Admin>)signRepo.findAll();
	}

	// public Admin findSignInDetails(int roll) {
	// 	// TODO Auto-generated method stub
	// 	return signRepo.findById(roll);
	// }

	// public void deleteSignInDetails(int roll) {
	// 	// TODO Auto-generated method stub
	// 	signRepo.deleteById(roll);
		
	// }
//	public List<Student> getStudentSorted(String field){
//		return studentRepo.findAll(Sort.by(Sort.Direction.DESC,field));
//	}
//
//	//pagination
//	public List<Student> getStudentWithPagination( int offset,int pageSize){
//		Page<Student> page=studentRepo.findAll(PageRequest.of(offset, pageSize));
//		return page.getContent();
//	}
////	//sorting and paging
//	public List<Student> getStudentWithPagingAndSorting(int offset,int pageSize,String field){
//		PageRequest paging =PageRequest.of(offset, pageSize,Sort.by(field));
//		Page<Student> page = studentRepo.findAll(paging);
//		return page.getContent();
//	}

}

