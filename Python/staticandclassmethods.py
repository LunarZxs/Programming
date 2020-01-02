class Person:

    definition = 50

    def __init__(self, p, age):
        self.p = p
        self.age = age
    
    @classmethod
    def define(cls):
        return cls.definition

    @staticmethod
    def perosnAge(a):
        return a

print(Person.define())
print(Person.perosnAge(5))