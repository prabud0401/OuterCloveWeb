document.addEventListener('DOMContentLoaded', function () {
  const users = [
    { userType: 'customer', username: 'customer1', password: 'password1' },
    { userType: 'admin', username: 'admin1', password: 'password1' },
    { userType: 'staff', username: 'staff1', password: 'password1' }

  ];

  const loginForm = document.querySelector('.loginForm');

  loginForm.addEventListener('submit', function (event) {
    event.preventDefault();

    const userType = loginForm.userType.value;
    const username = loginForm.username.value;
    const password = loginForm.password.value;

    const user = users.find(
      user =>
        user.userType === userType &&
        user.username === username &&
        user.password === password
    );

    if (user) {
      alert(`Login successful! Welcome, ${user.username} (${user.userType}).`);
// Save username in localStorage
localStorage.setItem('username', user.username);
      // Redirect to the appropriate dashboard based on user type
      if (user.userType === 'customer') {
        window.location.href = 'customerdashboard.html';
      } else if (user.userType === 'admin') {
        window.location.href = 'admindashboard.html';      }
        else if (user.userType === 'staff') {
          window.location.href = 'staffdashboard.html';
        }
    } else {
      alert('Login failed. Please check your credentials.');
    }
  });
});
// script.js

document.addEventListener("DOMContentLoaded", function () {
  const signupForm = document.querySelector(".signupForm");

  signupForm.addEventListener("submit", function (event) {
      event.preventDefault();

      // Get form inputs
      const userType = this.userType.value;
      const fullName = this.fullName.value;
      const email = this.email.value;
      const username = this.username.value;
      const password = this.password.value;
      const confirmPassword = this.confirmPassword.value;
      const gender = this.gender.value;
      const dateOfBirth = this.dateOfBirth.value;

      // Simple form validation
      if (!userType || !fullName || !email || !username || !password || !confirmPassword || !gender || !dateOfBirth) {
          alert("Please fill in all fields.");
          return;
      }

      if (password !== confirmPassword) {
          alert("Passwords do not match.");
          return;
      }

      // Sample signup function (replace with your backend logic)
      signup(userType, fullName, email, username, password, gender, dateOfBirth);
  });
});

// Sample signup function (replace with your backend logic)
function signup(userType, fullName, email, username, password, gender, dateOfBirth) {
  // Here, you can send the data to your server for processing
  // This is just a sample function, replace it with your actual signup logic

  console.log("User Type:", userType);
  console.log("Full Name:", fullName);
  console.log("Email:", email);
  console.log("Username:", username);
  console.log("Password:", password);
  console.log("Gender:", gender);
  console.log("Date of Birth:", dateOfBirth);

  // After successful signup, you can redirect the user or perform other actions
  alert("Signup successful!");
  window.location.href = "login.html"; // Redirect to login page
}
document.addEventListener('DOMContentLoaded', function () {
  // Retrieve username from localStorage
  const username = localStorage.getItem('username');

  if (username) {
    // Display the username in the dashboard
    document.getElementById('usernamePlaceholder').textContent = username;
  } else {
    // Handle the case where username is not available
    alert('Username not found. Please log in.');
    window.location.href = 'login.html'; // Redirect to login page
  }
});
