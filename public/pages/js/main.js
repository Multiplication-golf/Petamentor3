class dropDownMenu {
  constructor(entries, dropDownMenu, container) {
    this.dropdownMenu = document.getElementById(dropDownMenu);
    this.container = document.getElementById(container);
    this.toggleOpen = false;
    this.entries = entries;
  }
  open() {
    this.toggleOpen = true;
    this.dropdownMenu.innerHTML = "<p>More▼</p>";
    this.container.classList.add("absoluteWidth");
    this.container.style.height = "10%";
    var currentHeight = 0.5;
    this.entries.forEach((entry) => {
      const entryElement = document.createElement("a");
      entryElement.innerHTML = `<p style='margin-top:0.5vh; margin-bottom:0.5vh'>${entry.name}</p>`;
      entryElement.href = entry.href;
      currentHeight += 8;
      this.container.style.height = `calc(${currentHeight}% + 1vh)`;
      this.dropdownMenu.appendChild(entryElement);
    });
  }
  close() {
    this.toggleOpen = false;
    this.dropdownMenu.innerHTML = "<p>More▶</p>";
    this.container.style.height = `calc((10% - 1vh))`;
  }
}

const moreDropDownMenu = new dropDownMenu(
  [
    { name: "Strip Calc", href: "./stripcalc.html" },
    { name: "PETamentor2", href: "http://PETamentor2.com" },
  ],
  "dropDownMenu",
  "container",
);

moreDropDownMenu.dropdownMenu.addEventListener("click", () => {
  if (moreDropDownMenu.toggleOpen) {
    moreDropDownMenu.close();
  } else {
    moreDropDownMenu.open();
  }
});
