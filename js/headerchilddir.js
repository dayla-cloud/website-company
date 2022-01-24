const body = document.body;
const header = document.createElement("header");

const logo = document.createElement("img");
const nav = document.createElement("nav");
const ul = document.createElement("ul");
const about = document.createElement("li");
const product = document.createElement("li");
const news = document.createElement("li");
const download = document.createElement("li");
const contact = document.createElement("li");

const logoAnchor = document.createElement("a");
const aboutAnchor = document.createElement("a");
const productAnchor = document.createElement("a");
const newsAnchor = document.createElement("a");
const downloadAnchor = document.createElement("a");
const contactAnchor = document.createElement("a");

const socials = document.createElement("div");
const youtube = document.createElement("a");
const facebook = document.createElement("a");
const instagram = document.createElement("a");
const twitter = document.createElement("a");

const youtubeIcon = document.createElement("i");
const facebookIcon = document.createElement("i");
const instagramIcon = document.createElement("i");
const twitterIcon = document.createElement("i");

const ANCHOR_CLASSNAME = "nav_social_link";
const BLANK_ATTR = "_blank";

nav.id = "menu";

youtube.appendChild(youtubeIcon);
facebook.appendChild(facebookIcon);
instagram.appendChild(instagramIcon);
twitter.appendChild(twitterIcon);

socials.appendChild(youtube);
socials.appendChild(facebook);
socials.appendChild(instagram);
socials.appendChild(twitter);

about.appendChild(aboutAnchor);
product.appendChild(productAnchor);
news.appendChild(newsAnchor);
download.appendChild(downloadAnchor);
contact.appendChild(contactAnchor);

logoAnchor.appendChild(logo);

ul.appendChild(about);
ul.appendChild(product);
ul.appendChild(news);
ul.appendChild(download);
ul.appendChild(contact);

nav.prepend(ul);
nav.appendChild(socials);
header.appendChild(logoAnchor);
header.appendChild(nav);
body.prepend(header);

logo.src = "../../img/common/logo black.svg";

aboutAnchor.innerText = "会社概要";
productAnchor.innerText = "製品一覧";
newsAnchor.innerText = "最新情報";
downloadAnchor.innerText = "ダウンロード";
contactAnchor.innerText = "問い合わせ";

logoAnchor.href = "../../html/index.html";
aboutAnchor.href = "../../html/about.html";
productAnchor.href = "../../html/product.html";
newsAnchor.href = "../../html/release.html";
downloadAnchor.href = "../../html/download.html";
contactAnchor.href = "../../html/contact.html";

youtube.href = "https://www.youtube.com/channel/UCqoV7O4VHDJ4Fj866LKyQgA";
youtube.className = ANCHOR_CLASSNAME;
youtube.target = BLANK_ATTR;
facebook.href = "https://www.facebook.com/azmee.inc/";
facebook.className = ANCHOR_CLASSNAME;
facebook.target = BLANK_ATTR;
instagram.href = "https://www.instagram.com/azmee_inc/";
instagram.className = ANCHOR_CLASSNAME;
instagram.target = BLANK_ATTR;
twitter.href = "https://twitter.com/Azmee_Inc";
twitter.className = ANCHOR_CLASSNAME;
twitter.target = BLANK_ATTR;

youtubeIcon.className = "ri-youtube-line";
facebookIcon.className = "ri-facebook-line";
instagramIcon.className = "ri-instagram-line";
twitterIcon.className = "ri-twitter-line";

// toggle show / hide menu

const toggleDiv = document.createElement("div");
const toggleIcon = document.createElement("i");
const width = window.innerWidth;
const height = window.innerHeight;
const NONE_CLASSNAME = "none";
const BLOCK_CLASSNAME = "block";
header.appendChild(toggleDiv);
toggleDiv.prepend(toggleIcon);
toggleIcon.className = "ri-menu-line";

function handleMenu() {
  const currentClass = toggleIcon.className;
  if (currentClass !== "ri-menu-line") {
    toggleIcon.className = "ri-menu-line";
    nav.style.right = "-100%";
  } else {
    toggleIcon.className = "ri-close-line";
    nav.style.right = "0%";
  }
}

toggleIcon.addEventListener("click", handleMenu);
