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

function daysInMonth(TimeDate) {
    // calculate the number of days in the current month
    var currentMonth = TimeDate.getMonth() + 1; // Get the current month (0-11)
    var months_with_30_days = [4, 6, 9, 11]; // April, June, September, November
    var months_with_31_days = [1, 3, 5, 7, 8, 10, 12]; // January, March, May, July, August, October, December
    var february_month = 2; // February
    if (months_with_30_days.includes(currentMonth)) {
        var daysInMonth = 30;
    } else if (months_with_31_days.includes(currentMonth)) {
        var daysInMonth = 31;
    } else if (currentMonth === february_month) {
        // Check for leap year
        var year = TimeDate.getFullYear();
        if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
            var daysInMonth = 29; // Leap year
        } else {
            var daysInMonth = 28; // Non-leap year
        }
    } else {
        var daysInMonth = 0; // Default case, should not occur
    }
    return daysInMonth; // Return the number of days in the current month
}

function formValidations() {
     document.getElementById("registrationForm").addEventListener("submit", function(event){
        event.preventDefault(); // Prevent the default form submission

      // Clear previous error messages
      document.getElementById("fullnameError").textContent = '';
      document.getElementById("emailError").textContent = '';
      document.getElementById("phoneError").textContent = '';
      document.getElementById("passwordError").textContent = '';
      document.getElementById("confirmPasswordError").textContent = '';
      document.getElementById("validationMessage").textContent = '';

      // Flag to track if the form is valid
      let isValid = true;

      // Validate Full Name
      const fullname = document.getElementById("fullname").value.trim();
      if(fullname === ''){ // Check if the full name is empty
          document.getElementById("fullnameError").textContent = 'Full Name is required.';
          isValid = false;
      }else if(fullname.length < 3){ // Check if the full name is too short
          document.getElementById("fullnameError").textContent = 'Full Name must be at least 3 characters long.';
          isValid = false;
      }else if(!/^[a-zA-Z\s']+$/.test(fullname)){ // Check if the full name contains only letters, spaces, and apostrophes
          document.getElementById("fullnameError").textContent = 'Full Name can only contain letters, spaces, and apostrophes.';
          isValid = false;
      }
      
      // Validate Email
      const email = document.getElementById("email").value.trim();
      const validDomains = ['gmail.com', 'yahoo.com', 'strathmore.edu', 'o365.strathmore.edu']; // List of valid domains
      const invalidDomains = ['hotmail.com', 'outlook.com', 'aol.com']; // List of invalid domains
      const emailDomain = email.split('@')[1]; // Get the domain part of the email

      if(email === ''){ // Check if the email is empty
          document.getElementById("emailError").textContent = 'Email is required.';
          isValid = false;
      }else if(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)){ // Check if the email is valid
          document.getElementById("emailError").textContent = 'Please enter a valid email address.';
          isValid = false;
      }else if(!validDomains.includes(emailDomain)){ // Check if the email domain is valid
          document.getElementById("emailError").textContent = 'Email domain must be one of the following: ' + validDomains.join(', ') + '.';
          isValid = false;
      }else if(invalidDomains.includes(emailDomain)){ // Check if the email domain is invalid
          document.getElementById("emailError").textContent = 'Email domain ' + emailDomain + ' is not allowed.';
          isValid = false;
      }

      // Validate Phone Number
      const phone = document.getElementById("phone").value.trim();
      const validPhonePattern = /^\+?\d{10,15}$/; // Regular expression for a valid phone number (10-15 digits, optional + at the beginning)
        if(phone === ''){ // Check if the phone number is empty
            document.getElementById("phoneError").textContent = 'Phone Number is required.';
            isValid = false;
        }else if(!validPhonePattern.test(phone)){ // Check if the phone number is valid (10-15 digits)
            document.getElementById("phoneError").textContent = 'Phone Number must be between 10 and 15 digits.';
            isValid = false;
        }

        // Password validation
        const password = document.getElementById("password").value.trim();
        if(password === ''){ // Check if the password is empty
            document.getElementById("passwordError").textContent = 'Password is required.';
            isValid = false;
        }else if(password.length < 6){ // Check if the password is too short
            document.getElementById("passwordError").textContent = 'Password must be at least 6 characters long.';
            isValid = false;
        }else if(!/[A-Z]/.test(password)){ // Check if the password contains at least one uppercase letter
            document.getElementById("passwordError").textContent = 'Password must contain at least one uppercase letter.';
            isValid = false;
        }else if(!/[a-z]/.test(password)){ // Check if the password contains at least one lowercase letter
            document.getElementById("passwordError").textContent = 'Password must contain at least one lowercase letter.';
            isValid = false;
        }else if(!/[0-9]/.test(password)){ // Check if the password contains at least one digit
            document.getElementById("passwordError").textContent = 'Password must contain at least one digit.';
            isValid = false;
        }else if(!/[!@#$%^&*(),.?":{}|+\-<>]/.test(password)){ // Check if the password contains at least one special character
            document.getElementById("passwordError").textContent = 'Password must contain at least one special character.';
            isValid = false;
        }
        
        // Confirm Password validation
        const confirmPassword = document.getElementById("confirm_password").value.trim();
        if(confirmPassword === ''){ // Check if the confirm password is empty
            document.getElementById("confirmPasswordError").textContent = 'Confirm Password is required.';
            isValid = false;
        }else if(confirmPassword !== password){ // Check if the confirm password matches the password
            document.getElementById("confirmPasswordError").textContent = 'Passwords do not match.';
            isValid = false;
        }

      if(isValid){
          document.getElementById("validationMessage").textContent = 'Form submitted successfully!';
          document.getElementById("validationMessage").classList.remove('error');
          document.getElementById("validationMessage").classList.add('success');
      }else{
          document.getElementById("validationMessage").textContent = 'Please correct the error(s) above and try again.';
          document.getElementById("validationMessage").classList.remove('success');
          document.getElementById("validationMessage").classList.add('error');
      }
    });
}