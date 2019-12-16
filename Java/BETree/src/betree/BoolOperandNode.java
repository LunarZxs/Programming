/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package betree;

/**
 *
 * @author PC1
 */
public class BoolOperandNode extends BoolExpNode{

    public BoolOperandNode(char symbol) 
    {
        super(symbol);
    }

    
    @Override
    public boolean evaluate() throws ArithmeticException{
        
        BoolExpNode rootBoolean = null;
        
        if(symbol == '^' || symbol == '&' || symbol == '|' || symbol == '!')
        {
            BoolExpNode rootBoolean1 = new BoolOperandNode(symbol);
            rootBoolean1.symbol = symbol;
            rootBoolean = rootBoolean1;
        }
        
        if(symbol == 'T')
        {
            BoolExpNode trueBoolean1 = new BoolOperandNode(symbol);
            trueBoolean1.symbol = symbol;
            rightChild = trueBoolean1;
        }
        
        if(symbol == 'F')
        {
            BoolExpNode falseBoolean1 = new BoolOperandNode(symbol);
            falseBoolean1.symbol = symbol;
            leftChild = falseBoolean1;
        }
        
        
        if(rootBoolean == null || rightChild == null || leftChild == null)
            return false;
        
        
        rootBoolean = new BoolOperandNode(rootBoolean.symbol);
        
        if(rootBoolean.symbol == '&' && (rightChild.symbol == 'F' && leftChild.symbol == 'T'))
            return false;
        
        if(rootBoolean.symbol == '&' && (rightChild.symbol == 'T' && leftChild.symbol == 'T'))
            return true;
        
        if(rootBoolean.symbol == '&' && (rightChild.symbol == 'F' && leftChild.symbol == 'F'))
            return false;
        
        if(rootBoolean.symbol == '&' && (rightChild.symbol == 'T' && leftChild.symbol == 'F'))
            return false;
        
        if(rootBoolean.symbol == '|' && (rightChild.symbol == 'F' && leftChild.symbol == 'T'))
            return true;
        
        if(rootBoolean.symbol == '|' && (rightChild.symbol == 'F' && leftChild.symbol == 'F'))
            return false;
        
        if(rootBoolean.symbol == '|' && (rightChild.symbol == 'T' && leftChild.symbol == 'F'))
            return true;
        
        if(rootBoolean.symbol == '|' && (rightChild.symbol == 'T' && leftChild.symbol == 'T'))
            return true;
        
        if(rootBoolean.symbol == '^' && (rightChild.symbol == 'F' && leftChild.symbol == 'T'))
            return true;
        
        if(rootBoolean.symbol == '^' && (rightChild.symbol == 'F' && leftChild.symbol == 'F'))
            return false;
        
        if(rootBoolean.symbol == '^' && (rightChild.symbol == 'T' && leftChild.symbol == 'T'))
            return false;
        
        if(rootBoolean.symbol == '^' && (rightChild.symbol == 'T' && leftChild.symbol == 'F'))
            return true;
        
        if(rootBoolean.symbol == '!' && rightChild.symbol == 'F')
            return true;
        
        if(rootBoolean.symbol == '!' && rightChild.symbol == 'T')
            return false;
        
        
        return false;
    }
}
