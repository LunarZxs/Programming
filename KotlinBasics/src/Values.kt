fun main(args: Array<String>) {
    val num1 = 45 //val cannot be changed
    println(num1)
    var num2 = 45 //value can be changed
    num2++

    println(num2)
    var num3:Int = 5 //this is inferred as a integer

    println("$num3")
}