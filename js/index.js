const today = new Date();
const currHour = today.getHours();
let message = "Hello";


// show "good morning" message oif its early
if (currHour <= 12){
    message = "Good Morning, beautiful world";
} else if(currHour> 12 && currHour < 17){  
    message = "Hello Awesome world"; // show "hello" message if its midday 
} else if(currHour> 17){ 
    message = "Good Evening, world"; // show "good evening message" at night
}

const handleClick = () => {
    alert(message);
}