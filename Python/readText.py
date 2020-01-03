with open('file.txt', 'r') as file:

    fi = file.readlines()

    for line in fi:
        if line.rstrip() == 'This':
            print('Hello World')
    