const newFormHandler = async function (event) {
  event.preventDefault();

  const title = document.querySelector('input[name="post-title"]').value;
  const birds = document.querySelector('input[name="post-birds"]').value;
  const body = document.querySelector('textarea[name="post-body"]').value;

  await fetch(`/api/post`, {
    method: "POST",
    body: JSON.stringify({
      title,
      body,
      birds,
    }),
    headers: { "Content-Type": "application/json" },
  });

  document.location.replace("/blog");
};

document
  .querySelector("#new-post-form")
  .addEventListener("submit", newFormHandler);
