character_size_big = 50
character_size_small = 3

user_input = input('Name? ')

if character_size_small > len(user_input):
    print('Must be larger than 3')

elif character_size_big < len(user_input):
    print('Must be smaller than 50')

else:
    print('name looks good')
