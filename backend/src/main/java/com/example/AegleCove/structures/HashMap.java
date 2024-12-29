package com.example.AegleCove.structures;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import java.util.ArrayList;
import java.util.List;

@JsonIgnoreProperties(ignoreUnknown = true)
public class HashMap<K, V> 
{
    private static final int INITIAL_CAPACITY = 50;
    private List<Entry<K, V>>[] buckets;

    @SuppressWarnings("unchecked")
    public HashMap() 
    {
        buckets = new List[INITIAL_CAPACITY];
        for (int i = 0; i < INITIAL_CAPACITY; i++) 
        {
            buckets[i] = new ArrayList<>();
        }
    }

    public void put(K key, V value) 
    {
        int bucketIndex = getBucketIndex(key);
        List<Entry<K, V>> bucket = buckets[bucketIndex];
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
        List<Entry<K, V>> bucket = buckets[bucketIndex];
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
        List<Entry<K, V>> bucket = buckets[bucketIndex];
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

    public boolean containsKey(K key) 
    {
        int bucketIndex = getBucketIndex(key);
        List<Entry<K, V>> bucket = buckets[bucketIndex];
        for (Entry<K, V> entry : bucket) 
        {
            if (entry.key.equals(key)) 
            {
                return true;
            }
        }
        return false;
    }

    public Iterable<Entry<K, V>> entrySet() 
    {
        List<Entry<K, V>> allEntries = new ArrayList<>();
        for (List<Entry<K, V>> bucket : buckets) 
        {
            allEntries.addAll(bucket);
        }
        return allEntries;
    }

    private int getBucketIndex(K key) 
    {
        return Math.abs(key.hashCode() % buckets.length);
    }

    public static class Entry<K, V> 
    {
        K key;
        V value;

        Entry(K key, V value) {
            this.key = key;
            this.value = value;
        }

        public V getValue() 
        {
            return value;
        }

        public K getKey() 
        {
            return key;
        }
    }
}
