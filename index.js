var calorie;
var name;
function CalCalculate(){

var height, weight, age,gender;

name = document.getElementById("name").value;
height = document.getElementById("height").value;
weight =  document.getElementById("weight").value;
age =  document.getElementById("age").value;

if(document.getElementById("gender1").checked)
  gender = document.getElementById("gender1").value;
else if(document.getElementById("gender2").checked)
  gender = document.getElementById("gender2").value;
  
if(name == ""){
  alert("Please enter Name");

}
else if(height == ""){
  alert("Please enter Height");
}
else if(weight == ""){
  alert("Please enter Weight");
}
else if(age == ""){
  alert("Please enter Age");
}
else if(gender == ""){
  alert("Please enter Gender");
}

if(name != "" && height != "" && weight != "" && age != "" && gender != "")
 {
  
  var bmr;
  if (gender=="Male"){
      bmr = (10 * weight) + (6.25 * height) - (5 * age) + 5
      calorie = 1.7*(bmr);
      calorie= calorie.toFixed(2);
      
  }
  
  else{
      bmr = (10 * weight) + (6.25 * height) - (5 * age) - 161
      calorie= 1.6*(bmr);
      calorie= parseInt(calorie);
  }
  
  document.getElementById("cal").innerHTML = calorie;  

 }
}

  var cal=0;
  
 function display()
 {
    
    var row=1;   
    
    
        
        var food = document.getElementById("food").value;
        if(food == ""){
       alert("Please enter Food Item");
        }
        
        else{
         
          if(calorie>=0){
          
          
        var carbs = document.getElementById("carbs").value;
        var fats = document.getElementById("fats").value;
        var proteins = document.getElementById("proteins").value;
        
        
        
        carbs=parseInt(carbs);
        fats=parseInt(fats);
        proteins=parseInt(proteins);
        
        var finalcal=carbs+fats+prot;
        cal= cal +finalcal;
       
        var display = document.getElementById("display");
        var newRow = display.insertRow(row);
        
        
        
        var cell1 = newRow.insertCell(0);
        var cell2 = newRow.insertCell(1);
        var cell3 = newRow.insertCell(2);
        var cell4 = newRow.insertCell(3);
        var cell5 = newRow.insertCell(4);
        
        cell1.innerHTML = food;
        cell2.innerHTML = carbs;
        cell3.innerHTML = fats;
        cell4.innerHTML = prot;
        cell5.innerHTML = cal1;
        
        row++;     
        
         
         
       Result();
          }
         
        
          
       else{
        alert("Enter Personal Details First");
       }
       }
 }
 
 function Result(){
    var display = document.getElementById("divDisplay");
    if(calorie-cal>=0){
    display.innerHTML = name+ " has consumed '"+ cal+ "' Calories today.<br/>Remaining Calorie Intake '" + (calorie-cal).toFixed(2) +"'";
    }
    else{
      display.innerHTML = "Maximum Intake Level Reached for Today";
    }
}
        
        
