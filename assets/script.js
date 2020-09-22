$(document).ready(function() {

    var timeFormat = 'HH:mm:ss'

    // Shows current date
    var dateFormat = moment().format('MMMM Do')
    var dayFormat = moment().format('dddd')
    $("#CurrentDate").text(dayFormat + ", " + dateFormat)

    past();
    current();
    future();
    var pastTime = setInterval(past, 1000);
    var currentTime = setInterval(current, 1000);
    var futureTime = setInterval(future, 1000);




// Retrieves content from Local Storages and places in
    // respective text area.
var nineAM = JSON.parse(localStorage.getItem('nineAM'));
$("#9amtextarea").val(nineAM);
var tenAM = JSON.parse(localStorage.getItem('tenAM'));
$("#10amtextarea").val(tenAM);
var elevenAM = JSON.parse(localStorage.getItem('elevenAM'));
$("#11amtextarea").val(elevenAM);
var twelvePM = JSON.parse(localStorage.getItem('twelvePM'));
$("#12pmtextarea").val(twelvePM);
var onePM = JSON.parse(localStorage.getItem('onePM'));
$("#1pmtextarea").val(onePM);
var twoPM = JSON.parse(localStorage.getItem('twoPM'));
$("#2pmtextarea").val(twoPM);
var threePM = JSON.parse(localStorage.getItem('threePM'));
$("#3pmtextarea").val(threePM);
var fourPM = JSON.parse(localStorage.getItem('fourPM'));
$("#4pmtextarea").val(fourPM);
var fivePM = JSON.parse(localStorage.getItem('fivePM'));
$("#5pmtextarea").val(fivePM);


// Sets 9am text area content in Local Storage
$("#9amsavebtn").click(function(){
    var nineValue = $("#9amtextarea").val();
    console.log(nineValue)
    localStorage.setItem('nineAM', JSON.stringify(nineValue));
});

// Sets 10am text area content in Local Storage
$("#10amsavebtn").click(function(){
    var tenValue = $("#10amtextarea").val();
    console.log(tenValue)
    localStorage.setItem('tenAM', JSON.stringify(tenValue));
});

// Sets 11am text area content in Local Storage
$("#11amsavebtn").click(function(){
    var elevenValue = $("#11amtextarea").val();
    console.log(elevenValue)
    localStorage.setItem('elevenAM', JSON.stringify(elevenValue));
});

// Sets 12pm text area content in Local Storage
$("#12pmsavebtn").click(function(){
    var twelveValue = $("#12pmtextarea").val();
    console.log(twelveValue)
    localStorage.setItem('twelvePM', JSON.stringify(twelveValue));
});

// Sets 1pm text area content in Local Storage
$("#1pmsavebtn").click(function(){
    var oneValue = $("#1pmtextarea").val();
    console.log(oneValue)
    localStorage.setItem('onePM', JSON.stringify(oneValue));
});

// Sets 2pm text area content in Local Storage
$("#2pmsavebtn").click(function(){
    var twoValue = $("#2pmtextarea").val();
    console.log(twoValue)
    localStorage.setItem('twoPM', JSON.stringify(twoValue));
});

// Sets 3pm text area content in Local Storage
$("#3pmsavebtn").click(function(){
    var threeValue = $("#3pmtextarea").val();
    console.log(threeValue)
    localStorage.setItem('threePM', JSON.stringify(threeValue));
});

// Sets 4pm text area content in Local Storage
$("#4pmsavebtn").click(function(){
    var fourValue = $("#4pmtextarea").val();
    console.log(fourValue)
    localStorage.setItem('fourPM', JSON.stringify(fourValue));
});

// Sets 5pm text area content in Local Storage
$("#5pmsavebtn").click(function(){
    var fiveValue = $("#5pmtextarea").val();
    console.log(fiveValue)
    localStorage.setItem('fivePM', JSON.stringify(fiveValue));
});

//set color to gray timeslot is passed

function past(){
    if(moment().isAfter(moment('08:00:00', timeFormat))){
        $("#9amtextarea").addClass("past")
    }
    if(moment().isAfter(moment('09:00:00', timeFormat))){
        $("#10amtextarea").addClass("past")
    }
    if(moment().isAfter(moment('10:00:00', timeFormat))){
        $("#11amtextarea").addClass("past")
    }
    if(moment().isAfter(moment('11:00:00', timeFormat))){
        $("#12pmtextarea").addClass("past")
    }
    if(moment().isAfter(moment('12:00:00', timeFormat))){
        $("#1pmtextarea").addClass("past")
    }
    if(moment().isAfter(moment('13:00:00', timeFormat))){
        $("#2pmtextarea").addClass("past")
    }
    if(moment().isAfter(moment('14:00:00', timeFormat))){
        $("#3pmtextarea").addClass("past")
    }
    if(moment().isAfter(moment('15:00:00', timeFormat))){
        $("#4pmtextarea").addClass("past")
    }
    if(moment().isAfter(moment('16:00:00', timeFormat))){
        $("#5pmtextarea").addClass("past")
    }
}
// set color to green if timeslot is future
function future(){
    if(moment().isBefore(moment('08:59:59', timeFormat))){
        $("#9amtextarea").removeClass().addClass("future")
    }
    if(moment().isBefore(moment('09:59:59', timeFormat))){
        $("#10amtextarea").addClass("future")
    }
    if(moment().isBefore(moment('10:59:59', timeFormat))){
        $("#11amtextarea").addClass("future")
    }
    if(moment().isBefore(moment('11:59:59', timeFormat))){
        $("#12pmtextarea").addClass("future")
    }
    if(moment().isBefore(moment('12:59:59', timeFormat))){
        $("#1pmtextarea").addClass("future")
    }
    if(moment().isBefore(moment('13:59:59', timeFormat))){
        $("#2pmtextarea").addClass("future")
    }
    if(moment().isBefore(moment('14:59:59', timeFormat))){
        $("#3pmtextarea").addClass("future")
    }
    if(moment().isBefore(moment('15:59:59', timeFormat))){
        $("#4pmtextarea").addClass("future")
    }
    if(moment().isBefore(moment('16:59:59', timeFormat))){
        $("#5pmtextarea").addClass("future")
    }

}
// set color to red if time is current

function current(){
    if (moment().isBetween(moment('09:00:00', timeFormat), moment('09:59:59', timeFormat))) {
        $("#9textarea").addClass("present")
    }
    if (moment().isBetween(moment('10:00:00', timeFormat), moment('10:59:59', timeFormat))) {
        $("#10amtextarea").addClass("present")
    }
    if (moment().isBetween(moment('11:00:00', timeFormat), moment('11:59:59', timeFormat))) {
        $("#11amtextarea").addClass("present")
    }
    if (moment().isBetween(moment('12:00:00', timeFormat), moment('12:59:59', timeFormat))) {
        $("#12pmtextarea").addClass("present")
    }
    if (moment().isBetween(moment('13:00:00', timeFormat), moment('13:59:59', timeFormat))) {
        $("#1pmtextarea").addClass("present")
    }
    if (moment().isBetween(moment('14:00:00', timeFormat), moment('14:59:59', timeFormat))) {
        $("#1pmtextarea").addClass("present")
    }
    if (moment().isBetween(moment('15:00:00', timeFormat), moment('15:59:59', timeFormat))) {
        $("#3pmtextarea").addClass("present")
    }
    if (moment().isBetween(moment('16:00:00', timeFormat), moment('16:59:59', timeFormat))) {
        $("#4pmtextarea").addClass("present")
    if (moment().isBetween(moment('17:00:00', timeFormat), moment('17:59:59', timeFormat))) {
        $("#5pmtextarea").addClass("present")
    }
}



}});