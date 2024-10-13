let hours = document.getElementById("hours")
let minutes = document.getElementById("minutes")
let secends = document.getElementById("secends")

setInterval(() => {
    let currentimes = new Date()  // date
    hours.innerHTML = (currentimes.getHours() < 10 ? "0" : "") + (currentimes.getHours())
    minutes.innerHTML = (currentimes.getMinutes() < 10 ? "0" : "") + (currentimes.getMinutes())
    secends.innerHTML = (currentimes.getSeconds() < 10 ? "0" : "") + (currentimes.getSeconds())
}, 1000)
