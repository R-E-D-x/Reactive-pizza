async function catFetch() {
  const cat = await fetch("https://catfact.ninja/fact")
    .then((res) => res.json())
    .then((json) => json.fact)
    .catch((err) => "err: " + err);
  console.log(cat);
}

catFetch();
