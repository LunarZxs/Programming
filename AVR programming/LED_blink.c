#ifndef __AVR_ATmega32__
    #define __AVR_ATmega32__
#endif

#include <avr/io.h>
#include <util/delay.h>

int main()
{
    DDRC = 0xFF; //setting all registers to 1
    while (1)
    {
        PORTC = 0xFF; //setting all of portc registers to 1
        _delay_ms(1000);
        PORTC = 0x00; //setting all portc registers to 0
        _delay_ms(1000);
    }
    
    
}