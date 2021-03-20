car_quit = 'quit'
car_start = 'start'
car_stop = 'stop'
command = ""
if_car_started = False

while command != car_quit:
    command = input('> ').lower()

    if command != car_stop and command != car_start and command != car_quit:
        print("I don't understand")

    elif command == car_start:
        if if_car_started == True:
            print('Car already started')
        
        else:
            if_car_started = True
            print('Car started...Ready to go!')

    else:
        if not if_car_started:
            print('Car already Stopped')
        else:
            if_car_started = False
            print('Car Stopped')
"""
start - to start the car
stop - to stop the car
quit - to quit
"""