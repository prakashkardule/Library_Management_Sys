package com.library.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.library.model.Book;

public interface BookRepository extends JpaRepository<Book,Long> {
	 List<Book> findByTitleContainingOrAuthorContaining(String title, String author);
}
