const classes = new Set();
document.querySelectorAll("*[class]").forEach((el) => {
  el.classList.forEach((cls) => classes.add(cls));
});
console.log([...classes].join("\n"));
