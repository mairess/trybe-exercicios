package com.betrybe.collections.stream;

public class Student {

  private String registration;

  private String name;

  private String course;

  public Student() {}

  public Student(String registration, String name, String course) {
    this.registration = registration;
    this.name = name;
    this.course = course;
  }

  public String getRegistration() {
    return registration;
  }

  public void setRegistration(String registration) {
    this.registration = registration;
  }

  public String getName() {
    return name;
  }

  public void setName(String name) {
    this.name = name;
  }

  public String getCourse() {
    return course;
  }

  public void setCourse(String course) {
    this.course = course;
  }
}