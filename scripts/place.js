const currentYearElement = document.querySelector("#currentyear");
const today = new Date();
currentYearElement.textContent = today.getFullYear();

const lastModifiedElement = document.getElementById("lastModified");
lastModifiedElement.textContent = `Last modification: ${document.lastModified}`;

function calculateWindChill(temperature, windSpeed) {
    if (temperature <= 10 && windSpeed > 4.8) {
        const chill = 13.12 + 0.6215 * temperature - 11.37 * (windSpeed ** 0.16) + 0.3965 * temperature * (windSpeed ** 0.16);
        return chill.toFixed(1);
    } else {
        return "N/A";
    }
}

const temperature = -4;
const windSpeed = 13;

const windChillElement = document.querySelector("#windchill");
if (windChillElement) {
    windChillElement.textContent = calculateWindChill(temperature, windSpeed);
}