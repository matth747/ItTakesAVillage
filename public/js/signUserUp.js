$("#button2").click(async function(event){
    event.preventDefault()
    const name = $("#name1").val();
    const email = $("#email1").val();
    const password = $("#password1").val();

    if (name && email && password) {
      // Send a POST request to the API endpoint
      const response = await fetch('/api/users/signUp', {
        method: 'POST',
        body: JSON.stringify({ name, email, password }),
        headers: { 'Content-Type': 'application/json' },
      });
  
      if (response.ok) {
        // If successful, redirect the browser to the profile page
        document.location.replace('/');
      } else {
        alert(response.statusText);
      }
      }
  });