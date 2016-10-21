"use strict";


// PART 1: SHOW A FORTUNE


function displayFortune(fortune) {
    $("#fortune-text").html(fortune);
}


function showFortune(evt) {

    // TODO: get the fortune and show it in the #fortune-text div
    $.get("/fortune", displayFortune);
}


// Second solution demonstaring inline functions
function showFortuneInline(evt) {
    $.get("/fortune", function(fortune) {
        $("#fortune-text").html(fortune);
    })
}


$('#get-fortune-button').on('click', showFortune);


// PART 2: SHOW WEATHER
function showForecast(weather) {
    $("#weather-info").html(weather.forecast);
}

function showWeather(evt) {
    evt.preventDefault();

    var url = "/weather.json?zipcode=" + $("#zipcode-field").val();

    // TODO: request weather with that URL and show the forecast in #weather-info
    $.get(url, showForecast) ;
}


function showWeatherInline(evt) {
    evt.preventDefault();

    var url = "/weather.json?zipcode=" + $("#zipcode-field").val();

    // TODO: request weather with that URL and show the forecast in #weather-info
    $.get(url, function(weather) {
        $("#weather-info").html(weather.forecast);
    }) 
}



$("#weather-form").on('submit', showWeatherInline);




// PART 3: ORDER MELONS

function orderMelons(evt) {
    evt.preventDefault();

    // TODO: show the result message after your form
    // TODO: if the result code is ERROR, make it show up in red (see our CSS!)
}

$("#order-form").on('submit', orderMelons);


