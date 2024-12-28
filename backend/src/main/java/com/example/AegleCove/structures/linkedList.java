package com.example.AegleCove.structures;

import com.example.AegleCove.entity.User;
import com.fasterxml.jackson.annotation.JsonValue;

class Node<T>
{
    T data;
    Node<T> next;

    Node(T data)
    {
        this.data = data;
        this.next = null;
    }
    
    public T getData() 
    {
        return data;
    }

    public Node<T> getNext() 
    {
        return next;
    }
}

public class LinkedList<T> 
{
    Node<T> head;

    public void append(T data)
    {
        Node<T> newNode = new Node<T>(data);
        if(head == null)
        {
            head = newNode;
        }
        else
        {
            Node<T> temp = head;
            while(temp.next != null)
            {
                temp = temp.next;
            }
            temp.next = newNode;
        }
    }

    public void delete(T data)
    {
        if(head == null)
        {
            System.out.println("List is empty");
        }
        else if(head.data == data)
        {
            head = head.next;
        }
        else
        {
            Node<T> temp = head;
            while(temp.next != null)
            {
                if(temp.next.data == data)
                {
                    temp.next = temp.next.next;
                    break;
                }
                temp = temp.next;
            }
        }
    }

    public T deleteAthead()
    {
        if(head == null)
        {
            System.out.println("List is empty");
            return null;
        }
        else
        {
            T data = head.data;
            head = head.next;
            return data;
        }
    }

    public T deleteAtTail()
    {
        if(head == null)
        {
            System.out.println("List is empty");
            return null;
        }
        else if(head.next == null)
        {
            T data = head.data;
            head = null;
            return data;
        }
        else
        {
            Node<T> temp = head;
            while(temp.next.next != null)
            {
                temp = temp.next;
            }
            T data = temp.next.data;
            temp.next = null;
            return data;
        }
    }

    public boolean isEmpty()
    {
        return head == null;
    }

    public T find(String data)
    {
        Node<T> temp = head;
        while(temp != null)
        {
            if(temp.data instanceof User)
            {
                User entry = (User) temp.data;
                if(entry.getUsername().equals(data))
                {
                    return temp.data;
                }
            }                         
            temp = temp.next;
        }
        return null;
    }

    public T getHead()
    {
        if(head == null)
        {
            return null;
        }
        return head.data;
    }

    public T getTail()
    {
        if(head == null)
        {
            return null;
        }
        Node<T> temp = head;
        while(temp.next != null)
        {
            temp = temp.next;
        }
        return temp.data;
    }


    public void display()
    {
        Node<T> temp = head;
        while(temp != null)
        {
            System.out.print(temp.data + " ");
            temp = temp.next;
        }
        System.out.println();
    }
    
    // Custom serialization to JSON without using a built-in List
    @JsonValue
    public Object[] toJson() 
    {
        int size = getSize();
        Object[] result = new Object[size];
        Node<T> temp = head;
        int index = 0;
        while (temp != null) 
        {
            result[index++] = temp.data;
            temp = temp.next;
        }
        return result;
    }

    private int getSize() 
    {
        int count = 0;
        Node<T> temp = head;
        while (temp != null) 
        {
            count++;
            temp = temp.next;
        }
        return count;
    }
}

