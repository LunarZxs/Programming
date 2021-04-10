class Vehicle(val make:String, val model:String){

}

class Car(make: String, model: String, var color: String){

}

fun main(args: Array<String>) {
    val car = Car("Ford", "Mustang", "blue")

    println(car.color)
}