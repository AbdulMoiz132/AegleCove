package com.example.AegleCove.structures;

public class TreeNode<T> {
    private T data;
    private TreeNode<T> left, right;

    public TreeNode(T data) {
        this.data = data;
        left = right = null;
    }

    public T getData() {
        return data;
    }

    public void setData(T data) {
        this.data = data;
    }

    public TreeNode<T> getLeft() {
        return left;
    }

    public void setLeft(TreeNode<T> left) {
        this.left = left;
    }

    public TreeNode<T> getRight() {
        return right;
    }

    public void setRight(TreeNode<T> right) {
        this.right = right;
    }
}
