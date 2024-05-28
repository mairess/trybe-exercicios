package com.maires.productmanagement.controller;

import com.maires.productmanagement.controller.dto.BrandCreationDto;
import com.maires.productmanagement.controller.dto.BrandDto;
import com.maires.productmanagement.entity.Brand;
import com.maires.productmanagement.service.BrandService;
import com.maires.productmanagement.service.execption.BrandNotFoundException;
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
@RequestMapping("/brands")
public class BrandController {

  private final BrandService brandService;

  @Autowired
  public BrandController(BrandService brandService) {
    this.brandService = brandService;
  }

  @GetMapping("/{id}")
  public BrandDto getAuthorById(@PathVariable Long id) throws BrandNotFoundException {
    return BrandDto.fromEntity(
        brandService.findById(id)
    );
  }

  @GetMapping
  public List<BrandDto> getAllAuthors() {
    List<Brand> allBrands = brandService.findAll();
    return allBrands.stream()
        .map(BrandDto::fromEntity)
        .toList();
  }

  @PostMapping
  @ResponseStatus(HttpStatus.CREATED)
  public BrandDto createBrand(@RequestBody BrandCreationDto authorCreationDto) {
    return BrandDto.fromEntity(
        brandService.create(authorCreationDto.toEntity())
    );
  }

  @PutMapping("/{id}")
  public BrandDto updateBrand(@PathVariable Long id,
      @RequestBody BrandCreationDto authorCreationDto) throws BrandNotFoundException {
    return BrandDto.fromEntity(
        brandService.update(id, authorCreationDto.toEntity())
    );
  }

  @DeleteMapping("/{id}")
  public BrandDto deleteBrandById(@PathVariable Long id) throws BrandNotFoundException {
    return BrandDto.fromEntity(
        brandService.deleteById(id)
    );
  }
}