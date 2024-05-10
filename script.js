
const ip = document.querySelector(".ip");
const local = document.querySelector(".location");
const pincode = document.querySelector(".pincode");
const timezone = document.querySelector(".timezone");
const continent = document.querySelector(".continent");

fetch(
  "https://api.ipdata.co/?api-key=b63a1fc4f29885522bf1a21d8c79cc7176a88b90233a096302d945a4"
)
  .then((res) => res.json())

  .then((data) => {
    console.log(data);
    loadMap(data);
  });

function loadMap(data) {
  latitude = data.latitude;
  longitude = data.longitude;
  console.log(latitude);
  console.log(longitude);
  if (latitude) {
    const map = L.map("map").setView([latitude, longitude], 13);
    L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
      attribution: "Made with  ❤️ by Anmol",
    }).addTo(map);
    L.marker([latitude, longitude]).addTo(map);
    L.circle([latitude, longitude], { radius: 1500 }).addTo(map);
    ip.innerText = (data.ip);
    console.log(data.city);
    console.log(data.region_code);
    local.innerText = (data.city).concat(', ').concat(data.region_code);
    pincode.innerText = parseInt(data.postal);
    timezone.innerText = data.time_zone.offset
    console.log(data.continent_name);
    continent.innerText = data.continent_name
  }


}

// &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>
