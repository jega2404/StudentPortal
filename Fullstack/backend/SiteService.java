package firstsample.demo.Service;
import org.springframework.stereotype.Service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;

import firstsample.demo.Model.SiteSettings;

import firstsample.demo.Repository.SiteRepository;


@Service
public class SiteService{
    @Autowired
    private SiteRepository Repo;
	@SuppressWarnings("null")
	public SiteSettings saveSettings(SiteSettings student) {
		// TODO Auto-generated method stub
		return Repo.save(student);
	}
    public List<SiteSettings> getSettings() {
		// TODO Auto-generated method stub
		return Repo.findAll();
	}
}