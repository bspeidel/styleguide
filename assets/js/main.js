function toggleSection(section) {
  const x = document.getElementById(section);
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}