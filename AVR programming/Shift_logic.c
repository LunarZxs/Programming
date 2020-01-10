#ifndef __AVR_ATmega32__
    #define __AVR_ATmega32__
#endif

#include <avr/io.h>
#include <util/delay.h>

int main()
{
    DDRC |= 0b10000000; //sets direction to the 7th line
    PORTC = 0b10000000; //sets portc to portc7
    while (1)
    {
        _delay_ms(1000);
         PORTC ^= (PINC7 << 7); //shift the logic to the left and open the register for port7
        _delay_ms(1000);
    }
}