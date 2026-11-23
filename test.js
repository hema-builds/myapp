let name = "Rahul123";   // change this value to test
let namePattern = /^[A-Za-z ]+$/;

if (name === "") {
  console.log("Name is required");
} else if (!namePattern.test(name)) {
  console.log("Enter a valid name");
} else {
  console.log("Valid name");
}