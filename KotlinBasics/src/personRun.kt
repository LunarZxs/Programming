fun main(args: Array<String>) {
    val person = Person("Jack")
    person.age = 20

    println("${person.name} is ${person.age}")
    val age = person.userAgeCheck(10)

    if(age != 10){
        println("user is $age")
    }
    else{
        println("user is 10")
    }

    val user = username(person.soi(1))
    println(user)

    val usersName = p(Person("").soi(5))


}

typealias personClass = Person.soi
fun username(p:personClass) = p.foo()
fun p(n:personClass) = n.userName()