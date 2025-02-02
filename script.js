function getFormvalue() {
    // Prevent the default form submission behavior
    event.preventDefault();

    // Get the form element
    const form = document.getElementById('form1');

    // Get the values of the First Name and Last Name fields
    const firstName = form.elements['fname'].value.trim();
    const lastName = form.elements['lname'].value.trim();

    // Combine the first and last names
    const fullName = `${firstName} ${lastName}`;

    // Display the full name in an alert
    alert(fullName);
}