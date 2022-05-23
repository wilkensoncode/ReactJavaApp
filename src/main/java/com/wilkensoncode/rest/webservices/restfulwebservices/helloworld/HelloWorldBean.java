package com.wilkensoncode.rest.webservices.restfulwebservices.helloworld;

public class HelloWorldBean {
    private  String message;

    public HelloWorldBean(String message) {
        this.message =message;

    }

    public String getMessage() {

        return message;
    }

    public void setMessage(String massage) {
        this.message = massage;
    }

    @Override
    public String toString() {
        return "HelloWorldBean{" +
                "massage='" + message + '\'' +
                '}';
    }
}
