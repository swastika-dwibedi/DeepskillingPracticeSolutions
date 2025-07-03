package com.library.service;

import com.library.repository.BookRepository;

public class BookService {
    private BookRepository bookRepository;

    // Constructor injection
    public BookService(BookRepository bookRepository) {
        this.bookRepository = bookRepository;
        System.out.println("[BookService] Repository injected via constructor");
    }

    public void displayBook() {
        System.out.println("Book: " + bookRepository.getBook());
    }
}
