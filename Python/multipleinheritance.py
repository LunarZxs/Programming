class Animal():
    
    def __init__ (self, animal):
        super().__init__(animal)
        self.animal = animal

    def animalName(self):
        print(self.animal)

class Person():

    def __init__(self, person):
        self.person = person
    
    def personName(self):
        print(self.person)

class Dog(Animal, Person):
    def __init__(self, dog):
        self.dog = dog
        super().__init__(self.dog)


dog = Dog('Dog')
dog.animalName()
dog.personName()