package com.example.AegleCove.entity;

import com.example.AegleCove.structures.LinkedList;
import com.example.AegleCove.structures.Stack;
import com.example.AegleCove.structures.Queue;

public class User 
{
    private Long id;
    private String firstname;
    private String lastname;
    private String birthdate;
    private String gender;
    private String address;
    private String contact;
    private String username;
    private String password;
    private String email;
    private String weight;
    private String height;
    private BodyTrack bodyTrack;
    private LinkedList<String> medical_history;
    private Stack<String> taskListCompleted;
    private Queue<String> taskListPending;

    public User()
    {

    }

    public User(Long id, String username, String password)
    {
        this.id = id;
        this.username = username;
        this.password = password;
    }

    public User(String firstname, String lastname, String birthdate, String gender, String address, String contact, String email)
    {
        this.firstname = firstname;
        this.lastname = lastname;
        this.birthdate = birthdate;
        this.gender = gender;
        this.address = address;
        this.contact = contact;
        this.email = email;
    }


    public Long getId()
    {
        return id;
    }

    public void setId(Long id)
    {
        this.id = id;
    }

    public String getFirstname()
    {
        return firstname;
    }

    public void setFirstname(String firstname)
    {
        this.firstname = firstname;
    }

    public String getLastname()
    {
        return lastname;
    }

    public void setLastname(String lastname)
    {
        this.lastname = lastname;
    }

    public String getBirthdate()
    {
        return birthdate;
    }

    public void setBirthdate(String birthdate)
    {
        this.birthdate = birthdate;
    }

    public String getGender()
    {
        return gender;
    }

    public void setGender(String gender)
    {
        this.gender = gender;
    }

    public String getAddress()
    {
        return address;
    }

    public void setAddress(String address)
    {
        this.address = address;
    }

    public String getContact()
    {
        return contact;
    }

    public void setContact(String contact)
    {
        this.contact = contact;
    }

    public String getUsername()
    {
        return username;
    }

    public void setUsername(String username)
    {
        this.username = username;
    }

    public String getPassword()
    {
        return password;
    }

    public void setPassword(String password)
    {
        this.password = password;
    }

    public String getEmail()
    {
        return email;
    }

    public void setEmail(String email)
    {
        this.email = email;
    }

    public String getWeight()
    {
        return weight;
    }

    public void setWeight(String weight)
    {
        this.weight = weight;
    }

    public String getHeight()
    {
        return height;
    }

    public void setHeight(String height)
    {
        this.height = height;
    }

    public LinkedList<String> getMedical_history()
    {
        return medical_history;
    }

    public void setMedical_history(LinkedList<String> medical_history)
    {
        this.medical_history = medical_history;
    }

    public BodyTrack getBodyTrack()
    {
        return bodyTrack;
    }

    public void setBodyTrack(BodyTrack bodyTrack)
    {
        this.bodyTrack = bodyTrack;
    }

    public Stack<String> getTaskListCompleted()
    {
        return taskListCompleted;
    }

    public void setTaskListCompleted(Stack<String> taskListCompleted)
    {
        this.taskListCompleted = taskListCompleted;
    }

    public Queue<String> getTaskListPending()
    {
        return taskListPending;
    }

    public void setTaskListPending(Queue<String> taskListPending)
    {
        this.taskListPending = taskListPending;
    }
}


 