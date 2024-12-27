package com.example.AegleCove.structures;

public class TreeNode 
{
    private String data;
    private TreeNode left;
    private TreeNode right;

    public TreeNode(String data) 
    {
        this.data = data;
        this.left = null;
        this.right = null;
    }

    public String getData() 
    {
        return data;
    }

    public TreeNode getLeft() 
    {
        return left;
    }

    public TreeNode getRight() 
    {
        return right;
    }

    public void setData(String data) 
    {
        this.data = data;
    }

    public void setLeft(TreeNode left) 
    {
        this.left = left;
    }

    public void setRight(TreeNode right) 
    {
        this.right = right;
    }
    
}
