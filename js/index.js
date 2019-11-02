const siteContent = {
  nav: {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  cta: {
    h1: "DOM Is Awesome",
    button: "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4": "Features",
    "features-content":
      "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4": "About",
    "about-content":
      "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4": "Services",
    "services-content":
      "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4": "Product",
    "product-content":
      "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4": "Vision",
    "vision-content":
      "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis."
  },
  contact: {
    "contact-h4": "Contact",
    address: "123 Way 456 Street Somewhere, USA",
    phone: "1 (888) 888-8888",
    email: "sales@greatidea.io"
  },
  footer: {
    copyright: "Copyright Great Idea! 2018"
  }
};
// Append & Prepend for Navigation
let nav = document.querySelector("nav");

let newA2 = document.createElement('a');
nav.prepend(newA2);
let blogNode = document.createTextNode('Blog');
newA2.appendChild(blogNode);

let newA = document.createElement('a');
newA.textContent = 'Home';
nav.prepend(newA);

// NAVIGATION LINKS
let navA = document.querySelectorAll("nav a");
let NavAElement = Array.from(navA);
NavAElement.forEach((a) => {
  a.style.color = "green";
});
NavAElement[2].textContent = siteContent["nav"]["nav-item-1"];
NavAElement[3].textContent = siteContent["nav"]["nav-item-2"];
NavAElement[4].textContent = siteContent["nav"]["nav-item-3"];
NavAElement[5].textContent = siteContent["nav"]["nav-item-4"];
NavAElement[6].textContent = siteContent["nav"]["nav-item-5"];
NavAElement[7].textContent = siteContent["nav"]["nav-item-6"];



// Site Logo
let logo = document.getElementById("logo-img");
logo.setAttribute("src", siteContent["nav"]["img-src"]);

// CTA Section
let snippet = document.getElementById("cta-img");
snippet.setAttribute("src", siteContent["cta"]["img-src"]);

let h1 = document.getElementsByTagName("h1");
Array.from(h1).forEach(h1 => {
  h1.textContent = siteContent["cta"]["h1"];
});
// for each (\s) in siteContent["cta"]["h1"]
// 

let button = document.getElementsByTagName("button");
Array.from(button).forEach(button => {
  button.textContent = siteContent["cta"]["button"];
});


// MAIN CONTENT HEADINGS
let MainContentH4 = document.querySelectorAll("div .text-content h4");
let MCH4Element = Array.from(MainContentH4);
MCH4Element[0].textContent = siteContent["main-content"]["features-h4"];
MCH4Element[1].textContent = siteContent["main-content"]["about-h4"];
MCH4Element[2].textContent = siteContent["main-content"]["services-h4"];
MCH4Element[3].textContent = siteContent["main-content"]["product-h4"];
MCH4Element[4].textContent = siteContent["main-content"]["vision-h4"];

let middleImg = document.getElementById("middle-img");
middleImg.setAttribute("src", siteContent["main-content"]["middle-img-src"]);

// MAIN CONTENT PARAGRAPHS
let MainContentP = document.querySelectorAll("div .text-content p");
let MCPElement = Array.from(MainContentP);
MCPElement[0].textContent = siteContent["main-content"]["features-content"];
MCPElement[1].textContent = siteContent["main-content"]["about-content"];
MCPElement[2].textContent = siteContent["main-content"]["services-content"];
MCPElement[3].textContent = siteContent["main-content"]["product-content"];
MCPElement[4].textContent = siteContent["main-content"]["vision-content"];

// CONTACT HEADING
let contactH4 = document.querySelectorAll(".contact h4");
let contactH4Element = Array.from(contactH4);
contactH4Element[0].textContent = siteContent["contact"]["contact-h4"];

// CONTACT PARAGRAPHS
let contactP = document.querySelectorAll(".contact p");
let contactPElement = Array.from(contactP);
contactPElement[0].textContent = siteContent["contact"]["address"];
contactPElement[0].style.width = '200px';
contactPElement[1].textContent = siteContent["contact"]["phone"];
contactPElement[2].textContent = siteContent["contact"]["email"];

// Footer P
let footerP = document.querySelector("footer p");
footerP.textContent = siteContent["footer"]["copyright"];
