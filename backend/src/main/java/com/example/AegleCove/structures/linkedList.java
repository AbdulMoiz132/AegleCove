package com.example.AegleCove.structures;

class Node<T>
{
    T data;
    Node<T> next;

    Node(T data)
    {
        this.data = data;
        this.next = null;
    }
}

public class linkedList<T> 
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

}

