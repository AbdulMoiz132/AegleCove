package com.example.AegleCove.structures;

import java.util.LinkedList;

public class HashMap<K, V> 
{
    private static final int INITIAL_CAPACITY = 50;
    private LinkedList<Entry<K, V>>[] buckets;

    @SuppressWarnings("unchecked")
    public HashMap() 
    {
        buckets = new LinkedList[INITIAL_CAPACITY];
        for (int i = 0; i < INITIAL_CAPACITY; i++) 
        {
            buckets[i] = new LinkedList<>();
        }
    }

    public void put(K key, V value) 
    {
        int bucketIndex = getBucketIndex(key);
        LinkedList<Entry<K, V>> bucket = buckets[bucketIndex];
        for (Entry<K, V> entry : bucket) 
        {
            if (entry.key.equals(key)) 
            {
                entry.value = value;
                return;
            }
        }
        bucket.add(new Entry<>(key, value));
    }

    public V get(K key) 
    {
        int bucketIndex = getBucketIndex(key);
        LinkedList<Entry<K, V>> bucket = buckets[bucketIndex];
        for (Entry<K, V> entry : bucket) 
        {
            if (entry.key.equals(key)) 
            {
                return entry.value;
            }
        }
        return null;
    }

    public boolean remove(K key) 
    {
        int bucketIndex = getBucketIndex(key);
        LinkedList<Entry<K, V>> bucket = buckets[bucketIndex];
        for (Entry<K, V> entry : bucket) 
        {
            if (entry.key.equals(key)) 
            {
                bucket.remove(entry);
                return true;
            }
        }
        return false;
    }

    private int getBucketIndex(K key) 
    {
        return Math.abs(key.hashCode() % buckets.length);
    }

    private static class Entry<K, V> 
    {
        K key;
        V value;

        Entry(K key, V value) {
            this.key = key;
            this.value = value;
        }
    }
}
