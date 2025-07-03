package com.softwares;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication  // Sin exclude = MailSenderAutoConfiguration
public class ComercioElectronicoApplication {
	public static void main(String[] args) {
		SpringApplication.run(ComercioElectronicoApplication.class, args);
	}
}
