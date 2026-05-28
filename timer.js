// Select the element where the stopwatch time will be displayed
const currentTime = document.querySelector('.para');

// Select the container that holds all control buttons
const button = document.querySelector('.btn-container');

// Time variables
let seconds = 0;
let minutes = 0;
let hours = 0;

// Variable to store the interval ID
let timeID;

//Handles all button click events
function handleClick(event) {

    // Get the clicked button's name attribute
    const button = event.target.name;

    // START BUTTON LOGIC
    if(button === 'start') {

        // Start the stopwatch
        timeID = setInterval(() => {

            // Increase seconds every interval
            seconds++;

            // When seconds reach 59, reset seconds and increase minutes
            if(seconds > 58) {
                seconds = 0;
                minutes++;

                // When minutes reach 59, reset minutes and increase hours
                if(minutes > 58) {
                    minutes = 0;
                    hours++;
                }
            }

            // Adds leading zero if value is less than 10
            currentTime.innerText =
                `${hours < 10 ? `0${hours}` : hours}:` +
                `${minutes < 10 ? `0${minutes}` : minutes}:` +
                `${seconds < 10 ? `0${seconds}` : seconds}`;

        }, 100); // Runs every 100ms

    }

    // STOP BUTTON LOGIC
    if(button === 'stop') {

        // Stop the stopwatch interval
        clearInterval(timeID);

    }

    // RESET BUTTON LOGIC
    if(button === 'reset') {

        // Stop the current interval
        clearInterval(timeID);

        // Reset all time values
        seconds = 0;
        minutes = 0;
        hours = 0;
        // Reset displayed time

        currentTime.innerText = '00:00:00';
    }
}

// attach click event listener to button container
button.addEventListener('click', handleClick);