class Animal():
    def __init__(self, animal):
        self.animal = animal

    def printName(self):
        print('The animal is a', self.animal)

class Dog(Animal):
    def __init__(self, dog):
        super().__init__(dog)
        self.dog = Dog

class Cat(Animal):
    def __init__(self, cat): 
        self.cat = 'jack'
        super().__init__(self.cat)   

cat = Cat('Cat')
cat.printName()