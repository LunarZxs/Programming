with open('newFile.txt', 'w') as newFile:
    with open('newFile.txt', 'r') as files:
        
        fi = newFile.write('Hello World')
        i = 0
        while i < newFile.tell():
            if i == 1:
                newFile.seek(i)
                newFile.write('E')
            i+=1

        newFile.close()

        f_contents = files.read()
        print(f_contents)