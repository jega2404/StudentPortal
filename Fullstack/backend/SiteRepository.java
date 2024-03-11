package firstsample.demo.Repository;
import org.springframework.data.jpa.repository.JpaRepository;

import firstsample.demo.Model.SiteSettings;



public interface SiteRepository extends JpaRepository<SiteSettings, Long> {
  
}
