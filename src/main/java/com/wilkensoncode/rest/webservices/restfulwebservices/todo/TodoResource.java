package com.wilkensoncode.rest.webservices.restfulwebservices.todo;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@CrossOrigin("http://localhost:4200")
public class TodoResource {

    @Autowired
    private TodoHardcodedService todoService;

    //get all todos for a user
    @GetMapping("/users/{username}/todos")
    public List<Todo> getAllTodos(@PathVariable String username) {

     return todoService.findAll();

    }
}
