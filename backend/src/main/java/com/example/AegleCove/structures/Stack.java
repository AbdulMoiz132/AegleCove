package com.example.AegleCove.structures;

public class Stack<T> 
{
    private LinkedList<T> stackList;

    public Stack() 
    {
        stackList = new LinkedList<>();
    }

    public void push(T value) 
    {
        stackList.append(value);
    }

    public T pop() 
    {
        if (isEmpty()) 
        {
            System.out.println("Stack is empty");
            return null;
        } 
        return stackList.deleteAtTail();
    }

    public T peek() 
    {
        if (isEmpty()) 
        {
            System.out.println("Stack is empty");
            return null;
        }
        return stackList.getTail();
    }

    public boolean isEmpty() 
    {
        return stackList.isEmpty();
    }
}
