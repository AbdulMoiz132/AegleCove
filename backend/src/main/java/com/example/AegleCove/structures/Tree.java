package com.example.AegleCove.structures;

import com.example.AegleCove.entity.Identifiable;

public class Tree<T extends Identifiable & Comparable<T>> 
{
    private TreeNode<T> root;

    public Tree() 
    {
        this.root = null;
    }

    public TreeNode<T> getRoot() 
    {
        return root;
    }

    public void setRoot(TreeNode<T> root) 
    {
        this.root = root;
    }

    public void insert(T data) 
    {
        root = insertRec(root, data);
    }
    
    public void delete(T data) 
    {
        root = deleteRec(root, data);
    }

    public TreeNode<T> search(T data) 
    {
        return searchRec(root, data);
    }

    public TreeNode<T> search(Long id) 
    {
        return searchRec(root, id);
    }

    private TreeNode<T> insertRec(TreeNode<T> root, T data) 
    {
        if (root == null) 
        {
            root = new TreeNode<>(data);
            return root;
        }

        if (data.compareTo(root.getData()) < 0) 
        {
            root.setLeft(insertRec(root.getLeft(), data));
        } 
        else if (data.compareTo(root.getData()) > 0) 
        {
            root.setRight(insertRec(root.getRight(), data));
        }

        return root;
    }

    private TreeNode<T> searchRec(TreeNode<T> root, T data) 
    {
        if (root == null || root.getData().compareTo(data) == 0) 
        {
            return root;
        }

        if (data.compareTo(root.getData()) < 0) 
        {
            return searchRec(root.getLeft(), data);
        }

        return searchRec(root.getRight(), data);
    }

    private TreeNode<T> searchRec(TreeNode<T> root, Long id) 
    {
        if (root == null || root.getData().getId().equals(id)) 
        {
            return root;
        }

        if (id.compareTo(root.getData().getId()) < 0) 
        {
            return searchRec(root.getLeft(), id);
        }

        return searchRec(root.getRight(), id);
    }

    private TreeNode<T> deleteRec(TreeNode<T> root, T data) 
    {
        if (root == null) 
        {
            return root;
        }

        if (data.compareTo(root.getData()) < 0) 
        {
            root.setLeft(deleteRec(root.getLeft(), data));
        } 
        else if (data.compareTo(root.getData()) > 0) 
        {
            root.setRight(deleteRec(root.getRight(), data));
        } 
        else 
        {
            if (root.getLeft() == null) 
            {
                return root.getRight();
            } 
            else if (root.getRight() == null) 
            {
                return root.getLeft();
            }

            root.setData(minValue(root.getRight()));
            root.setRight(deleteRec(root.getRight(), root.getData()));
        }

        return root;
    }

    private T minValue(TreeNode<T> root) 
    {
        T minv = root.getData();
        while (root.getLeft() != null) 
        {
            minv = root.getLeft().getData();
            root = root.getLeft();
        }
        return minv;
    }
}
