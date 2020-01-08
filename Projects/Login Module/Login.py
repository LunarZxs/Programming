class Login: 

    def __init__(self, username, passsword):
        self.username = username
        self.passsword = passsword
    
    def writeUserName(self):
        with open('users.txt', 'a') as writeToFile:
            with open('users.txt', 'r') as size:

                readFile = size.readlines()
                print(readFile)
                
                if writeToFile.tell() == 0:
                    writeToFile.write(self.username + '\n')

                for line in readFile:
                    if line.__eq__(self.username + '\n'):
                        writeToFile.write('j' +  '\n')
                    
                writeToFile.close()
    

personUsername = input('Username: ')
personPassword = input('Password: ')

userLogin = Login(personUsername, personPassword)
userLogin.writeUserName()