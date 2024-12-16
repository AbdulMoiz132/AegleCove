package com.example.AegleCove.structures;

import java.util.LinkedList;

class HashMap<K, V> 
{
    private static class Node<K, V> 
    {
        K key;
        V value;

        Node(K key, V value) 
        {
            this.key = key;
            this.value = value;
        }
    }

    private LinkedList<Node<K, V>>[] table;
    private int capacity;
    private int size;
    private final float loadFactorThreshold = 0.75f;

    // Constructor to initialize the HashMap with a given capacity
    @SuppressWarnings("unchecked")
    public HashMap(int initialCapacity) 
    {
        this.capacity = initialCapacity;
        this.table = new LinkedList[capacity];
        for (int i = 0; i < capacity; i++) 
        {
            table[i] = new LinkedList<>();
        }
        this.size = 0;
    }

    // Default constructor with a default initial capacity
    public HashMap() 
    {
        this(16);
    }

    // Hash function to get the index for a key
    private int getIndex(K key) 
    {
        return Math.abs(key.hashCode() % capacity);
    }

    // Put method to add a key-value pair
    public void put(K key, V value) 
    {
        int index = getIndex(key);
        LinkedList<Node<K, V>> bucket = table[index];

        for (Node<K, V> node : bucket) 
        {
            if (node.key.equals(key)) 
            {
                node.value = value; // Update value if key already exists
                return;
            }
        }

        bucket.add(new Node<>(key, value));
        size++;

        if ((float) size / capacity >= loadFactorThreshold) 
        {
            resize();
        }
    }

    // Get method to retrieve a value by key
    public V get(K key) 
    {
        int index = getIndex(key);
        LinkedList<Node<K, V>> bucket = table[index];

        for (Node<K, V> node : bucket) 
        {
            if (node.key.equals(key)) 
            {
                return node.value;
            }
        }
        return null;
    }

    // Remove method to delete a key-value pair
    public void remove(K key) 
    {
        int index = getIndex(key);
        LinkedList<Node<K, V>> bucket = table[index];

        Node<K, V> toRemove = null;
        for (Node<K, V> node : bucket) 
        {
            if (node.key.equals(key)) 
            {
                toRemove = node;
                break;
            }
        }

        if (toRemove != null) 
        {
            bucket.remove(toRemove);
            size--;
        }
    }

    // Resize method to increase the capacity of the table
    @SuppressWarnings("unchecked")
    private void resize() 
    {
        int newCapacity = capacity * 2;
        LinkedList<Node<K, V>>[] newTable = new LinkedList[newCapacity];
        for (int i = 0; i < newCapacity; i++) 
        {
            newTable[i] = new LinkedList<>();
        }

        for (LinkedList<Node<K, V>> bucket : table) 
        {
            for (Node<K, V> node : bucket) 
            {
                int newIndex = Math.abs(node.key.hashCode() % newCapacity);
                newTable[newIndex].add(node);
            }
        }

        table = newTable;
        capacity = newCapacity;
    }
}