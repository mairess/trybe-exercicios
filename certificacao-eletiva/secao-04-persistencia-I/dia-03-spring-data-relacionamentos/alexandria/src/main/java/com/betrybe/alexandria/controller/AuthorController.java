package com.betrybe.alexandria.controller;

import com.betrybe.alexandria.controller.dto.AuthorCreationDto;
import com.betrybe.alexandria.controller.dto.AuthorDto;
import com.betrybe.alexandria.entity.Author;
import com.betrybe.alexandria.service.AuthorService;
import com.betrybe.alexandria.service.excepetion.AuthorNotFoundException;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping(value = "/authors")
public class AuthorController {

  private final AuthorService authorService;

  @Autowired
  public AuthorController(AuthorService authorService) {
    this.authorService = authorService;
  }

  @GetMapping("/{id}")
  public AuthorDto getAuthorById(@PathVariable Long id) throws AuthorNotFoundException {
    return AuthorDto.fromEntity(
        authorService.findById(id)
    );
  }

  @GetMapping
  public List<AuthorDto> getAllAuthors() {
    List<Author> allAuthors = authorService.findAll();
    return allAuthors.stream()
        .map(AuthorDto::fromEntity)
        .toList();
  }

  @PostMapping
  @ResponseStatus(HttpStatus.CREATED)
  public AuthorDto createAuthor(@RequestBody AuthorCreationDto authorCreationDto) {
    return AuthorDto.fromEntity(
        authorService.create(authorCreationDto.toEntity())
    );
  }

  @PutMapping("/{id}")
  public AuthorDto updateAuthor(@PathVariable Long id,
      @RequestBody AuthorCreationDto authorCreationDto) throws AuthorNotFoundException {
    return AuthorDto.fromEntity(
        authorService.update(id, authorCreationDto.toEntity())
    );
  }

  @DeleteMapping("/{id}")
  public AuthorDto deleteAuthorById(@PathVariable Long id) throws AuthorNotFoundException {
    return AuthorDto.fromEntity(
        authorService.deleteById(id)
    );
  }
}