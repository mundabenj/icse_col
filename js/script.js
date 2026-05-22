// Defining a function to greet a user
function greetings(name) {
    var fname = name; // Local variable to store the name
    // Spot day time
    var today = new Date();
    var hour = today.getHours();

    // Return appropriate greeting based on the time of day
    if (hour < 12) {
        var greet = "Good morning, " + fname + "!";
    } else if (hour < 18) {
        var greet = "Good afternoon, " + fname + "!";
    } else {
        var greet = "Good evening, " + fname + "!";
    }
    return greet; // Return the greeting message
}

function startTime() {
    var today = new Date(); // Create a new Date object representing the current date and time
    var day = today.getDate();
    var month = today.getMonth(); // Months are zero-based
    var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    month = months[month]; // Get the name of the month
    var year = today.getFullYear();
    var hours = today.getHours();
    var minutes = today.getMinutes();
    var seconds = today.getSeconds();
    var weekday = today.getDay(); // 0 (Sunday) to 6 (Saturday)

    var weekdays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    weekday = weekdays[weekday]; // Get the name of the weekday

    document.getElementById('date').innerHTML = weekday + ", " + month + " " + day + ", " + year; // Display the date
    document.getElementById('time').innerHTML = formatTime(hours) + ":" + formatTime(minutes) + ":" + formatTime(seconds); // Display the time
    document.getElementById('DateTime').innerHTML = weekday + ", " + month + " " + day + ", " + year + " " + formatTime(hours) + ":" + formatTime(minutes) + ":" + formatTime(seconds); // Display the date and time together
    var t = setTimeout(startTime, 1000); // Update the time every second
}
function formatTime(i) {
    if (i < 10) { i = "0" + i }  // Add leading zero to minutes and seconds if they are less than 10
    return i;
}