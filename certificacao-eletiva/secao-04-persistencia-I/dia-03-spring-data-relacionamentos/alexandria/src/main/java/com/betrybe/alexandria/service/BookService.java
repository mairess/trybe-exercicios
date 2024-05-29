package com.betrybe.alexandria.service;

import com.betrybe.alexandria.entity.Book;
import com.betrybe.alexandria.entity.BookDetail;
import com.betrybe.alexandria.entity.Publisher;
import com.betrybe.alexandria.repository.BookDetailRepository;
import com.betrybe.alexandria.repository.BookRepository;
import com.betrybe.alexandria.service.excepetion.BookDetailNotFoundException;
import com.betrybe.alexandria.service.excepetion.BookNotFoundException;
import com.betrybe.alexandria.service.excepetion.NotFoundException;
import com.betrybe.alexandria.service.excepetion.PublisherNotFoundException;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class BookService {

  private final BookRepository bookRepository;
  private final BookDetailRepository bookDetailRepository;
  private final PublisherService publisherService;

  @Autowired
  public BookService(
      BookRepository bookRepository,
      BookDetailRepository bookDetailRepository,
      PublisherService publisherService) {
    this.bookRepository = bookRepository;
    this.bookDetailRepository = bookDetailRepository;
    this.publisherService = publisherService;
  }

  public Book findById(Long id) throws BookNotFoundException {
    return bookRepository
        .findById(id)
        .orElseThrow(BookNotFoundException::new);
  }

  public List<Book> findAll() {
    return bookRepository.findAll();
  }

  public Book create(Book book) {
    return bookRepository.save(book);
  }

  public Book update(Long id, Book book) throws BookNotFoundException {
    Book bookFromDb = findById(id);
    bookFromDb.setTitle(book.getTitle());
    bookFromDb.setGenre(book.getGenre());
    return bookRepository.save(bookFromDb);
  }

  public Book deleteById(Long id) throws BookNotFoundException {
    Book book = findById(id);
    bookRepository.deleteById(id);
    return book;
  }

  public BookDetail createBookDetail(Long bookId, BookDetail bookDetail) throws BookNotFoundException {
    Book book = findById(bookId);

    bookDetail.setBook(book);

    return bookDetailRepository.save(bookDetail);
  }

  public BookDetail getBookDetail(Long bookId)
      throws BookNotFoundException,
      BookDetailNotFoundException {

    Book book = findById(bookId);


    BookDetail bookDetail = book.getDetail();

    if (bookDetail == null) {
      throw new BookDetailNotFoundException();
    }

    return bookDetail;

  }

  public BookDetail updateBookDetail(Long bookId, BookDetail bookDetail)
  throws BookNotFoundException, BookDetailNotFoundException {

    BookDetail bookDetailFromDb = getBookDetail(bookId);

    bookDetailFromDb.setSummary(bookDetail.getSummary());
    bookDetailFromDb.setPageCount(bookDetail.getPageCount());
    bookDetailFromDb.setYear(bookDetail.getYear());
    bookDetailFromDb.setIsbn(bookDetail.getIsbn());

    return bookDetailRepository.save(bookDetailFromDb);
  }

  public BookDetail removeBookDetail(Long bookId)
      throws BookNotFoundException, BookDetailNotFoundException {

    Book book = findById(bookId);
    BookDetail bookDetail = book.getDetail();

    if (bookDetail == null) {
      throw new BookDetailNotFoundException();
    }

    book.setDetail(null);
    bookDetail.setBook(null);

    bookDetailRepository.delete(bookDetail);

    return bookDetail;
  }

  public Book setBookPublisher(Long bookId, Long publisherId)
      throws BookNotFoundException, PublisherNotFoundException {
    Book book = findById(bookId);
    Publisher publisher = publisherService.findById(publisherId);

    book.setPublisher(publisher);

    return bookRepository.save(book);
  }

  public Book removeBookPublisher(Long bookId)
      throws BookNotFoundException {
    Book book = findById(bookId);
    book.setPublisher(null);


    return bookRepository.save(book);
  }

}