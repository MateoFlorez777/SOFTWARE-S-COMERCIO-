package com.softwares.repository;

import java.util.List;
import java.util.Optional;

import com.softwares.models.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;


public interface UserRepository extends JpaRepository<User, Long> {

	
	public User findByEmail(String username);

}
