/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package betree;

import java.util.Stack;

/**
 *
 * @author PC1
 */
public class BoolOperatorNode extends BoolExpNode{

    public BoolOperatorNode(char symbol)
    {
        super(symbol);
    }
       
    /**
     *
     * @return
     * @throws ArithmeticException
     */
    @Override
    public boolean evaluate() throws ArithmeticException{
     
        BoolExpNode root = new BoolOperandNode(symbol);
        BoolExpNode left = null;
        BoolExpNode right = null;
        
        root.evaluate();
        
        boolean leftBoolean = false;
        boolean rightBoolean = false;
        
        left = leftChild;
        right = rightChild;
        
        while(left != null)
        {
            leftBoolean = left.evaluate();
            left = left.leftChild; 
        }
        
        
        while(right != null)
        {
            rightBoolean = right.evaluate();
            right = right.rightChild;
        }
        
        if(root.symbol == '&' && rightBoolean == true && leftBoolean == false)
            return false;
        
        if(root.symbol == '&' && rightBoolean == true && leftBoolean == true)
            return true;
        
        if(root.symbol == '&' && rightBoolean == false && leftBoolean == true)
            return false;
        
        if(root.symbol == '&' && rightBoolean == false && leftBoolean == false)
            return false;
        
        if(root.symbol == '|' && rightBoolean == true && leftBoolean == false)
            return true;
        
        if(root.symbol == '|' && rightBoolean == true && leftBoolean == true)
            return true;
        
        if(root.symbol == '|' && rightBoolean == false && leftBoolean == false)
            return false;
        
        if(root.symbol == '|' && rightBoolean == false && leftBoolean == true)
            return true;
        
        if(root.symbol == '^' && rightBoolean == true && leftBoolean == false)
            return true;
        
        if(root.symbol == '^' && rightBoolean == true && leftBoolean == true)
            return false;
        
        if(root.symbol == '^' && rightBoolean == false && leftBoolean == false)
            return false;
        
        if(root.symbol == '^' && rightBoolean == false && leftBoolean == true)
            return true;
        
        if(root.symbol == '!' && rightBoolean == true)
            return false;
        
        if(root.symbol == '!' && rightBoolean == false)
            return true;
        
        return false;
}
    
    
}
