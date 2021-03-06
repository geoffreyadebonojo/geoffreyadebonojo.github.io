function renderHourly() {
  var data  = JSON.parse(localStorage.getItem("storedForecast"));

  // var start = new Date().getHours();
  var avg = 0;
  for (var i= 0; i<23; i++){
    avg += data.hourly_forecasts[i].temp;
  }

  var forecasts = []
  var box = $("#hourly");
  box.html(" ");

  for (var i= 0; i<24; i++){
    var hours = new Date(data.hourly_forecasts[i].id*1000).getHours();
    if (hours == 0){
      hours = "12AM";
    } else if (hours < 13){
      hours = hours + "AM";
    } else {
      hours = (hours - 12) + "PM";
    }

    forecast = data.hourly_forecasts[i].temp;
    var adjuster = 2;
    box.append(`
      <div
      class="hourly"
      style="background:rgb(${ Math.round(forecast)*3 - 50}, ${ Math.round(forecast)*3 -40}, 255);">
        <p>${hours}</p>
        <p style="position: relative; bottom: ${Math.round(forecast)*adjuster - (avg/23 * adjuster) - 50}%;"">${Math.round(forecast)}&deg</p>
      </div>
    `);
  }
}
renderHourly();
