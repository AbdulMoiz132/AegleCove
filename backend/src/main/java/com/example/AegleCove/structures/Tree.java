package com.example.AegleCove.structures;

public class Tree 
{
    private TreeNode root;

    public Tree() 
    {
        this.root = null;
    }

    public TreeNode getRoot() 
    {
        return root;
    }

    public void setRoot(TreeNode root) 
    {
        this.root = root;
    }

    public void insert(String data) 
    {
        root = insertRec(root, data);
    }
    
    public void delete(String data) 
    {
        root = deleteRec(root, data);
    }

    public TreeNode search(String data) 
    {
        return searchRec(root, data);
    }

    private TreeNode insertRec(TreeNode root, String data) 
    {
        if (root == null) 
        {
            root = new TreeNode(data);
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

    private TreeNode searchRec(TreeNode root, String data) 
    {
        if (root == null || root.getData().equals(data)) 
        {
            return root;
        }

        if (data.compareTo(root.getData()) < 0) 
        {
            return searchRec(root.getLeft(), data);
        }

        return searchRec(root.getRight(), data);
    }

    private TreeNode deleteRec(TreeNode root, String data) 
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

    private String minValue(TreeNode root) 
    {
        String minv = root.getData();
        while (root.getLeft() != null) 
        {
            minv = root.getLeft().getData();
            root = root.getLeft();
        }
        return minv;
    }
}
