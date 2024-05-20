
    function convertTemperature() {
      let temperature = parseFloat(document.getElementById("temperature").value);
      let unit = document.querySelector(".unit").value;
      let result = document.querySelector(".result");
      let error = document.querySelector(".error");

      if (isNaN(temperature)) {
        error.innerHTML = "Please enter a valid temperature.";
        return;
      }

      if (unit === "celsius") {
        let fahrenheit = (temperature * 9/5) + 32;
        result.innerHTML = temperature + " Celsius is " + fahrenheit.toFixed(2) + " Fahrenheit.";
      } else {
        let celsius = (temperature - 32) * 5/9;
        result.innerHTML = temperature + " Fahrenheit is " + celsius.toFixed(2) + " Celsius.";
      }
    }
