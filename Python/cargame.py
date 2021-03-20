car_quit = 'quit'
car_start = 'start'
car_stop = 'stop'
command = ""

while command != car_quit:
    command = input('> ').lower()

    if command != car_stop and command != car_start and command != car_quit:
        print("I don't understand")

    elif command == car_start:
        print('Car started...Ready to go!')

    else:
        print('Car Stopped')
"""
start - to start the car
stop - to stop the car
quit - to quit
"""