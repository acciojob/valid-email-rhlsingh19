function validEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email); 
}
 

// Do not change the code below.
const str = prompt("Enter an email address.");
alert(validEmail(str));
