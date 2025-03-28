document.addEventListener("click", (e) => {
  const el = e.target;
  const tag = el.tagName.toLowerCase();
  if (tag === "a") {
    e.preventDefault();
    loadPage(el);
  }
});

async function loadPage(el) {
  try {
    const href = el.getAttribute("href");
    const response = await fetch(href);

    if (response.status !== 200) throw new Error("ERROR!");
    const html = await response.text();
    loadResult(html);
  } catch (e) {
    console.error(e);
  }
}

function loadResult(response) {
  const divResult = document.querySelector(".result");
  divResult.innerHTML = response;
}
