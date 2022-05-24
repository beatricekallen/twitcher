async function signupFormHandler(event) {
  event.preventDefault();
  console.log("Signed up");

  const usernameEl = document.querySelector("#username-input-signup");
  const emailEl = document.querySelector("#email-input-signup");
  const passwordEl = document.querySelector("#password-input-signup");

  const response = await fetch("/api/user", {
    method: "post",
    body: JSON.stringify({
      username: usernameEl.value,
      email: emailEl.value,
      password: passwordEl.value,
    }),
    headers: { "Content-Type": "application/json" },
  });

  console.log(response);

  if (response.ok) {
    document.location.replace("/blog");
  } else {
    alert("Failed to sign up");
  }
}

document
  .querySelector("#signup-form")
  .addEventListener("submit", signupFormHandler);
