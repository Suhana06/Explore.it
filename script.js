document.addEventListener("DOMContentLoaded", function () {
    // Get the "Book Now" button element
    const bookButton = document.getElementById("bookButton");
    
    // Add a click event listener to the button
    bookButton.addEventListener("click", function () {
      // Replace this alert with your desired action when the button is clicked
      alert("Booking successful! Click OK to proceed further");
      window.location.href = "Index.html";
    });
  });