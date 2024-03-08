var cl=document.getElementById("clear")
var ans=document.getElementById("boxans")
function but1()
{
    console.log(ans.value+=Number(1))

}
function but2()
{
    console.log(ans.value+=Number(2))

}
function but3()
{
    console.log(ans.value+=Number(3))

}
function but4()
{
    console.log(ans.value+=Number(4))

}
function but5()
{
    console.log(ans.value+=Number(5))

}
function but6()
{
    console.log(ans.value+=Number(6))

}
function but7()
{
    console.log(ans.value+=Number(7))

}
function but8()
{
    console.log(ans.value+=Number(8))
}

function but9()
{
    console.log(ans.value+=Number(9))

}
function but0()
{
    console.log(ans.value+=Number(0))

}
function but00()
{
    console.log(ans.value+=Number(0))
    console.log(ans.value+=Number(0))

}
function butsub()
{
    console.log(ans.value+='-')

}
function butmulti()
{
    console.log(ans.value+='*')

}
function butdiv()
{
    console.log(ans.value+='/')

}
function butsroot()
{
    console.log(ans.value+='**')

}
function butpoint()
{
    console.log(ans.value+='.')

}
function butcl()
{
    console.log(ans.value="")

}

function butadd()
{
  console.log(ans.value+='+' )
}
function buteq()
{
  var a=eval(ans.value)
  console.log(ans.value=a)
}
function butstcl()
{
    console.log(ans.value=ans.value.toString().split('').slice(0,-1).join(''))

}
