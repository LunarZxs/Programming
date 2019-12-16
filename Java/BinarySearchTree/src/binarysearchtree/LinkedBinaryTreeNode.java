/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package binarysearchtree;

import java.util.Enumeration;
import javax.swing.tree.MutableTreeNode;
import javax.swing.tree.TreeNode;

/**
 *
 * @author PC1
 */
public class LinkedBinaryTreeNode implements MutableTreeNode{

    @Override
    public void insert(MutableTreeNode child, int index) {
        
    }

    @Override
    public void remove(int index) {
    }

    @Override
    public void remove(MutableTreeNode node) {
    }

    @Override
    public void setUserObject(Object object) {
    }

    @Override
    public void removeFromParent() {
    }

    @Override
    public void setParent(MutableTreeNode newParent) {
    }

    @Override
    public TreeNode getChildAt(int childIndex) {
        return null;
        
    }

    @Override
    public int getChildCount() {
        return 0;
    }

    @Override
    public TreeNode getParent() {
        return null;
    }

    @Override
    public int getIndex(TreeNode node) {
        return 0;
    }

    @Override
    public boolean getAllowsChildren() {
        return false;
    }

    @Override
    public boolean isLeaf() {
        return false;
    }

    @Override
    public Enumeration children() {
        return null;
    }
    
}
