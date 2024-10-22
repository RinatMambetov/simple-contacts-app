package dev.rinat.contactapp.dao;

import dev.rinat.contactapp.models.Contact;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ContactRepository extends JpaRepository<Contact, Long>{
}
