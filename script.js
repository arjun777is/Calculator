function buttonclick(number){
  document.getElementById("screen").value=document.getElementById("screen").value+number
}
function allclear(){
  document.getElementById("screen").value=null
}
function sumAll(){
  var text=document.getElementById("screen").value
  var result=eval(text)
  document.getElementById("screen").value=result

  


}
