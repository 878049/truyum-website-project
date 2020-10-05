function submitalert()
{
    var name = document.getElementById("name").value;
    var number = document.getElementById("number").value;
    if(name==""){
    alert("please enter the name");
   return false;
}
else if(number==""){
    alert("please enter the number");
   return false;
}
else{
    return true;
}

}