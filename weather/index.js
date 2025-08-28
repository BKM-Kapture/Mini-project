async function getdatabyname(value){
        const promice= await fetch(`http://api.weatherapi.com/v1/current.json?key=d788e48328234306876120853240102&q=${value}&aqi=yes`);
        return await promice.json();
}
async function getdatabycords(value){
        var promice= await fetch(`http://api.weatherapi.com/v1/current.json?key=d788e48328234306876120853240102&q=${value.coords.latitude},${value.coords.longitude}&aqi=yes`);
        return await promice.json();
}

function modify(result){
    document.getElementById("name").innerHTML=`Place : ${result.location.name},${result.location.country}`;
    document.getElementById("condition").innerHTML=`Weather : ${result.current.condition.text}`;
    document.getElementById("localtime").innerHTML=`Local Time : ${result.location.localtime}`;
    document.getElementById("temp_c").innerHTML=`Temprature : ${result.current.temp_c}`;
    document.getElementById("humidity").innerHTML=`Humidity : ${result.current.humidity}`;
}

async function get(){
    let value=document.querySelector("input").value;
    const result=await getdatabyname(value);
    modify(result);
}

async function a(position){
    const result=await getdatabycords(position);
    modify(result);
}

async function find(){
    navigator.geolocation.getCurrentPosition(a,()=>alert("cant find your location"));
}