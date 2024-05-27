package com.betrybe.collections.set;

public class SomeStudent {

  private String registration;

  private String name;

  public boolean equals(Object obj) {
    if (this == obj)
      return true;
    if (obj == null)
      return false;
    if (getClass() != obj.getClass())
      return false;
    SomeStudent other = (SomeStudent) obj;
    if (registration == null) {
      return false;
    } else if (!registration.equals(other.registration))
      return false;
    return  true;

  }

}