const cityName = document.getElementById("cityName");
const city_name = document.getElementById("city_name");
const submitBtn = document.getElementById("submitBtn");
const temp_value = document.getElementById("temp_value");
const temp_status = document.getElementById("temp_status");
const dataHide = document.querySelector(".middle_layer");

const getInfo = async (event) => {
  event.preventDefault();
  let cityVal = cityName.value;

  if (cityVal === "") {
    city_name.innerText = "Mai nahi bataunga";
    dataHide.classList.add("data_hide");
  } else {
    try {
      let url = `http://api.openweathermap.org/data/2.5/weather?q=${cityVal}&appid=de7d2c9986db3bec679c565a83436946`;
      const response = await fetch(url);
      const data = await response.json();
      const arrData = [data];

      city_name.innerText = `${arrData[0].name},${arrData[0].sys.country}`;
      var currTemp = arrData[0].main.temp - 273.15;
      currTemp = currTemp.toFixed(2);
      temp_value.innerText = currTemp;
      temp_status.innerText = arrData[0].weather[0].main;

      const tempMood = arrData[0].weather[0].main;

      if (tempMood == "Clear") {
        temp_status.innerHTML =
          "<i class='fas fa-sun' style='color:#eccc68;'></i>";
      } else if (tempMood == "Clouds") {
        temp_status.innerHTML =
          "<i class='fas fa-cloud' style='color:#f1f2f6;'></i>";
      } else if (tempMood == "Rain") {
        temp_status.innerHTML =
          "<i class='fas fa-cloud-rain' style='color:#a4b0be;'></i>";
      } else {
        temp_status.innerHTML =
          "<i class='fas fa-sun' style='color:#eccc68;'></i>";
      }
      dataHide.classList.remove("data_hide");
    } catch {
      city_name.innerText = "Mai nahi bataunga";
      dataHide.classList.add("data_hide");
    }
  }
};
submitBtn.addEventListener("click", getInfo);
