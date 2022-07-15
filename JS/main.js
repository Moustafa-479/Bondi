let links = document.querySelectorAll(".navbar .navbar-nav .nav-link");

for (let i = 0; i < links.length; i++) {
  links[i].onclick = function() {
    for (let j = 0; j < links.length; j++) {
      links[j].classList.remove("active");
    }
    this.classList.add("active");
  };
}

let portfolioLinks = document.querySelectorAll(
  ".portfolio .portfolio-links .nav-link"
);

for (let i = 0; i < portfolioLinks.length; i++) {
  portfolioLinks[i].onclick = function() {
    for (let j = 0; j < portfolioLinks.length; j++) {
      portfolioLinks[j].classList.remove("active");
    }
    this.classList.add("active");
  };
}

let portfolioProjects = document.querySelectorAll(
  ".portfolio .portfolio-projects .image"
);

for (let i = 0; i < portfolioProjects.length; i++) {
  portfolioProjects[i].onclick = function() {
    for (let j = 0; j < portfolioProjects.length; j++) {
      portfolioProjects[j].classList.remove("active");
    }
    this.classList.add("active");
  };
}

let year = parseInt((Date.now() / 1000 / 60 / 60 / 24 / 365.25) + 1970);
let date = document.querySelector(".date");

date.prepend(`@ ${year} `);

let home = document.querySelectorAll(".home");

home[home.length - 1].onclick = function () {
for (let i = 0; i < links.length; i++) {
      links[i].classList.remove("active");
    }
    document.getElementsByClassName("home")[0].classList.add("active");
};

let serv = document.querySelectorAll(".services");


serv[serv.length - 1].onclick = function () {
for (let i = 0; i < links.length; i++) {
      links[i].classList.remove("active");
    }
    document.getElementsByClassName("services")[0].classList.add("active");
};

let port = document.querySelectorAll(".port");


port[port.length - 1].onclick = function () {
for (let i = 0; i < links.length; i++) {
      links[i].classList.remove("active");
    }
    document.getElementsByClassName("port")[0].classList.add("active");
  };