/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package binarysearchtree;

/**
 *
 * @author PC1
 */
public class ArrayBinaryTree {

    String[] nodes;
    
    public ArrayBinaryTree() {
        int intialRoot;
        nodes = new String[16];
        int counter = 0;
    }
    
    public static void main(String[] args) {
     
        ArrayBinaryTree t = new ArrayBinaryTree();
        
        System.out.println("fly".compareTo("fox"));
    }
    
    /*public String addNode(String key)
    {
        String intialNode = "";
        if(key == null)
        {
            intialNode = key;
            nodes[0] = intialNode;
            return intialNode;           
        }
            
        else
        {
            int index = intialNode.compareTo(key);
            
            if(index < 0)
                index = (2 * index) + 1;
            
            else if(index > 0)
                index = (2 * index) + 2;
              
        }
        
        return null;
    }*/

    
}
