course = "Python's for me" 
new_course = ''"Python's" " course for Begineers" 
               #01234567 these are the indexes of the characters 
print(course)
print(new_course)
print(new_course[0]) #prints the character for new_course index zero
print(course[0:3]) #prints the character for the course from index zero to three
print(course[:4]) #prints from zero to 4

another = course[:] #another stored as the whole index of course 

print(another)

name = 'Jennifer'
print(name[1:-1]) #prints characters from the begining from index one to the second to last index character