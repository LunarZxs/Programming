class Person(object):

    def __init__ (self, personName):
        self.personName = personName

    def gettingPersonName(self):
        return self.personName

    def printPersonName(self, person):
        self.personName = person

person = Person('Ranul')
print(person.gettingPersonName())
person.printPersonName('SamIAm')
print(person.gettingPersonName())