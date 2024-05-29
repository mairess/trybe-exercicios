package com.betrybe.alexandria.controller;

import com.betrybe.alexandria.controller.dto.BookCreationDto;
import com.betrybe.alexandria.controller.dto.BookDetailCreationDto;
import com.betrybe.alexandria.controller.dto.BookDetailDto;
import com.betrybe.alexandria.controller.dto.BookDto;
import com.betrybe.alexandria.entity.Book;
import com.betrybe.alexandria.service.BookService;
import com.betrybe.alexandria.service.exception.AuthorNotFoundException;
import com.betrybe.alexandria.service.exception.BookDetailNotFoundException;
import com.betrybe.alexandria.service.exception.BookNotFoundException;
import com.betrybe.alexandria.service.exception.PublisherNotFoundException;
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
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/books")
public class BookController {

  private final BookService bookService;

  @Autowired
  public BookController(BookService bookService) {
    this.bookService = bookService;
  }

  @GetMapping
  public List<BookDto> getAllBooks(
      @RequestParam(required = false, defaultValue = "0") int pageNumber,
      @RequestParam(required = false, defaultValue = "20") int pageSize
  ) {
    List<Book> paginatedBooks = bookService.findAll(pageNumber, pageSize);
    return paginatedBooks.stream()
        .map(BookDto::fromEntity)
        .toList();
  }

  @GetMapping("/{id}")
  public BookDto getBookById(@PathVariable Long id) throws BookNotFoundException {
    return BookDto.fromEntity(
        bookService.findById(id)
    );
  }

//  @GetMapping
//  public List<BookDto> getAllBooks() {
//    List<Book> allBooks = bookService.findAll();
//
//    return allBooks.stream()
//        .map(BookDto::fromEntity)
//        .toList();
//  }

  @PostMapping
  @ResponseStatus(HttpStatus.CREATED)
  public BookDto createBook(@RequestBody BookCreationDto bookCreationDto) {
    return BookDto.fromEntity(
        bookService.create(bookCreationDto.toEntity())
    );
  }

  @PutMapping("/{id}")
  public BookDto updateBook(@PathVariable Long id, @RequestBody BookCreationDto bookCreationDto)
      throws BookNotFoundException {
    return BookDto.fromEntity(
        bookService.update(id, bookCreationDto.toEntity())
    );
  }

  @DeleteMapping("/{id}")
  public BookDto deleteBookById(@PathVariable Long id) throws BookNotFoundException {
    return BookDto.fromEntity(
        bookService.deleteById(id)
    );
  }

  @PostMapping("/{bookId}/detail")
  @ResponseStatus(HttpStatus.CREATED)
  public BookDetailDto createBookDetail(
      @PathVariable Long bookId,
      @RequestBody BookDetailCreationDto bookDetailCreationDto)
      throws BookNotFoundException {

    return BookDetailDto.fromEntity(
        bookService.createBookDetail(bookId, bookDetailCreationDto.toEntity())
    );

  }

  @GetMapping("/{bookId}/detail")
  public BookDetailDto getBookDetail(@PathVariable Long bookId)
      throws BookNotFoundException, BookDetailNotFoundException {
    return BookDetailDto.fromEntity(
        bookService.getBookDetail(bookId)
    );
  }

  @PutMapping("/{bookId}/detail")
  public BookDetailDto updateBookDetail(
      @PathVariable Long bookId,
      @RequestBody BookDetailCreationDto bookDetailCreationDto)
      throws BookDetailNotFoundException, BookNotFoundException {

    return BookDetailDto.fromEntity(
        bookService.updateBookDetail(bookId, bookDetailCreationDto.toEntity())
    );
  }

  @DeleteMapping("/{bookId}/detail")
  public BookDetailDto removeBookDetail(@PathVariable Long bookId)
      throws BookDetailNotFoundException, BookNotFoundException {

    return BookDetailDto.fromEntity(
        bookService.removeBookDetail(bookId)
    );
  }

  @PutMapping("/{bookId}/publisher/{publisherId}")
  public BookDto setBookPublisher(@PathVariable Long bookId, @PathVariable Long publisherId)
      throws BookNotFoundException, PublisherNotFoundException {

    return BookDto.fromEntity(
        bookService.setBookPublisher(bookId, publisherId)
    );
  }

  @DeleteMapping("/{bookId}/publisher")
  public BookDto removeBookPublisher(@PathVariable Long bookId)
      throws BookNotFoundException {

    return BookDto.fromEntity(
        bookService.removeBookPublisher(bookId)
    );
  }

  @PutMapping("/{bookId}/authors/{authorId}")
  public BookDto addBookAuthor(@PathVariable Long bookId, @PathVariable Long authorId)
      throws BookNotFoundException, AuthorNotFoundException {
    return BookDto.fromEntity(
        bookService.addBookAuthor(bookId, authorId)
    );
  }

  @DeleteMapping("/{bookId}/authors/{authorId}")
  public BookDto removeBookAuthor(@PathVariable Long bookId, @PathVariable Long authorId)
      throws BookNotFoundException, AuthorNotFoundException {
    return BookDto.fromEntity(
        bookService.removeBookAuthor(bookId, authorId)
    );
  }

}