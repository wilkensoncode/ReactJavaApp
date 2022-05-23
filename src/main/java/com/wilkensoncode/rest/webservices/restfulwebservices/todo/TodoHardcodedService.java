package com.wilkensoncode.rest.webservices.restfulwebservices.todo;

import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;

@Service
public class TodoHardcodedService {

    private static List<Todo> todos = new ArrayList();
    private static int idCounter = 0;

    static{
    LocalDate date = LocalDate.now();

        todos.add(new Todo(++idCounter,"will",
                "learn Java",date, false));

        todos.add(new Todo(++idCounter,"will",
                "React", date, false));

        todos.add(new Todo(++idCounter,"will",
                "Spring boot",date, false));
    }

    public List<Todo> findAll(){
        return todos;
    }
}
