package com.example.AegleCove.structures;

public class Stack 
{
   private int top;
    private int maxSize;
    private String[] stackArray;

    public Stack(int size)
    {
        maxSize = size;
        stackArray = new String[maxSize];
        top = -1;
    }

    public void push(String value)
    {
        if(top == maxSize - 1)
        {
            System.out.println("Stack is full");
        }
        else
        {
            stackArray[++top] = value;
        }
    }

    public String pop()
    {
        if(top == -1)
        {
            System.out.println("Stack is empty");
            return null;
        }
        else
        {
            return stackArray[top--];
        }
    }

    public String peek()
    {
        if(top == -1)
        {
            System.out.println("Stack is empty");
            return null;
        }
        else
        {
            return stackArray[top];
        }
    }

    public boolean isEmpty()
    {
        return top == -1;
    }

    public boolean isFull()
    {
        return top == maxSize - 1;
    }    
}
