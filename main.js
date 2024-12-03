 const month = {
    month : "long"
    
 }

 const day = {
    day : "numeric"
 }

 const year = {
    year : "numeric"
 }
 check = async () =>{
   console.log(input.value);
   if(input.value){
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${input.value}&appid=d3da86e79011291b09d6a00b03360772`)
    console.log(response);
    if(response.status == 200){
        const weatherDetails = await response.json()
        console.log(weatherDetails);
       
        dtail.innerHTML = `
               <div class="left">
                <div class="dclass">
                    <span class="degree text-light">${(weatherDetails.main.temp-273.15).toFixed(0)}</span>
                    <span> celsius </span>
                    <span class="place">${weatherDetails.name}</span>

                </div>

                <div class="details">
                    <span class="haze">${weatherDetails.weather[0].main}</span>
                    <span>Pressure : ${weatherDetails.main.pressure} </span>
                    <span>Humidity : ${weatherDetails.main.humidity} </span>
                    <span>wind : ${weatherDetails.wind.speed} </span>
                    
                </div>
            </div>

            <div class="right">
                <h1 class="month">${new Date(weatherDetails.dt*1000).toLocaleString('en-US',month)}</h1>
                <h3 class="date">${new Date(weatherDetails.dt*1000).toLocaleString('en-US',day)}</h3>
                <span class="year">${new Date(weatherDetails.dt*1000).toLocaleString('en-US',year)}</span>

            </div>`




    }else{
        alert("enter valid input")
    }

    
   }else{
    alert("enter a value")
   } 
}
