package com.example.AegleCove.structures;

public class Queue<T> 
{
    private LinkedList<T> list;

    public Queue() 
    {
        list = new LinkedList<>();
    }

    public void enqueue(T item) 
    {
        list.append(item);
    }

    public T dequeue() 
    {
        if (isEmpty()) 
        {
            return null;
        }
        return list.deleteAthead();
    }

    public T front() 
    {
        if (isEmpty()) 
        {
            return null;
        }
        return list.getHead();
        
    }

    public T rear() 
    {
        if (isEmpty()) 
        {
            return null;
        }
        return list.getTail();
    }

    public boolean isEmpty() 
    {
        return list.isEmpty();
    }

}