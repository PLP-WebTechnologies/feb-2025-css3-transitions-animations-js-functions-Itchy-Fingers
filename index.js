function storeName() {
  const name = document.getElementById("nameInput").value;

  if (name.trim() !== "") {
    localStorage.setItem("userName", name);

    const welcomeBox = document.getElementById("welcomeBox");
    welcomeBox.textContent = `Welcome, ${name}!`;
    welcomeBox.classList.remove("hidden");

    // Trigger animation by adding the 'show' class
    setTimeout(() => {
      welcomeBox.classList.add("show");
    }, 100);
  }
}
