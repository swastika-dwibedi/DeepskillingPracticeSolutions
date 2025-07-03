package com.library.repository;

public class BookRepository {
    public BookRepository() {
        System.out.println("[BookRepository] Initialized");
    }

    public String getBook() {
        return "Clean Code by Robert C. Martin";
    }
}
