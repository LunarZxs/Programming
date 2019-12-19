mylist = ["Hello World", "Goodbye World"]
newlist = ''

for x, element in enumerate(mylist[0]):
    if x == 2:
        element = "H"

    newlist += element

mylist[0] = newlist

print(mylist)