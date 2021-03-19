course = 'Python for beginners'
print(len(course)) #useful for showing users if the limit has been reached
print(course.upper()) #This is a method and both print and len are functions sicne they don't belong to a group of strings, intgers etc. 
s = course.find('P') # returns the index of the string for course

print(s)

print('Python ' in course) #checks if the string exists in the variable. This should return true
