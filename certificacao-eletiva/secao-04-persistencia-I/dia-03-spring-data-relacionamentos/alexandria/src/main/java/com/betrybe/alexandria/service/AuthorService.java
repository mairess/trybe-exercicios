package com.betrybe.alexandria.service;

import com.betrybe.alexandria.entity.Author;
import com.betrybe.alexandria.repository.AuthorRepository;
import com.betrybe.alexandria.service.exception.AuthorNotFoundException;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class AuthorService {

  private final AuthorRepository authorRepository;

  @Autowired
  public AuthorService(AuthorRepository authorRepository) {
    this.authorRepository = authorRepository;
  }

  public Author findById(Long id) throws AuthorNotFoundException {
    return authorRepository.findById(id)
        .orElseThrow(AuthorNotFoundException::new);
  }

  public List<Author> findAll() {
    return authorRepository.findAll();
  }

  public Author create(Author author) {
    return authorRepository.save(author);
  }

  public Author update(Long id, Author author) throws AuthorNotFoundException {
    Author authorFromDb = findById(id);
    authorFromDb.setName(author.getName());
    authorFromDb.setNationality(author.getNationality());
    return authorRepository.save(authorFromDb);
  }

  public Author deleteById(Long id) throws AuthorNotFoundException {
    Author author = findById(id);
    authorRepository.deleteById(id);
    return author;
  }
}