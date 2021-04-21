data class Person(val name: String){
    var age = 10

    inner class soi(var user:Int){
        fun foo() = user

        fun userName(){
            println("Users name")
        }
    }

    fun userAgeCheck(userAge:Int,
                     checkAge: (Int) -> Boolean = {ageOfUser:Int  ->
                         ageOfUser==10
                     })
    :Int{
         checkAge(userAge)

        return userAge;
    }
}
