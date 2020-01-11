#ifndef __AVR_ATmega32__
    #define __AVR_ATmega32__
#endif

#include <avr/io.h>
#include <util/delay.h>

int main()
{
    DDRC = 0x01;
    PORTC = 0x02;
    
    while (1)
    {
        if(!(PINC & 0x02))
        {
            PORTC |= 0x01;
        }
        else
        {
            PORTC &= 0xFE;
        }
    }   
}