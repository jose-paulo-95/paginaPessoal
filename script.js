function toggleMode() {
  document.documentElement.classList.toggle("light")

  const img = document.querySelector("#profile img")

  const imgSrc = document.documentElement.classList.contains("light")
    ? "./assets/Avatar-light.png"
    : "./assets/Avatar.png"
  img.setAttribute("src", imgSrc)

  const alt = document.querySelector("#profile img")
  const descriptionAlt = document.documentElement.classList.contains("light")
    ? "foto de jose paulo, sorrindo, usando oculos"
    : "foto de jose paulo sorrindo e usando oculos e camisa preta"
  alt.setAttribute("alt", descriptionAlt)
}
