package com.example.AegleCove.structures;

public class ListNode<T>
{
    T data;
    ListNode<T> next;

    ListNode(T data)
    {
        this.data = data;
        this.next = null;
    }
    
    public T getData() 
    {
        return data;
    }

    public ListNode<T> getNext() 
    {
        return next;
    }
}
