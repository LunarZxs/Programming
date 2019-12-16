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
public abstract class BoolExpNode {
    
    protected char symbol;
    public BoolExpNode leftChild;
    public BoolExpNode rightChild;
    
    public BoolExpNode(char symbol) throws ArithmeticException
    {
        this.symbol = symbol;
    }
    
    public abstract boolean evaluate();
    
    public String toString()
    {
        return Character.toString(symbol);
    }
    
}
