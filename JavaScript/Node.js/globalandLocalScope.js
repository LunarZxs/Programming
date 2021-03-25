var myGlobal = 10; //this is accesible to the other functions

function func1()
{
  ourLocal = 5
}

function func2()
{
  var output = ""

  if(typeof myGlobal != "undefined ")
  {
    output += "my Global " +  myGlobal;
  }

  if(typeof outLocal != "undefined ")
  {
    output += " my Global " +  myGlobal;
  }

  console.log(output)
}

func1();
func2();

