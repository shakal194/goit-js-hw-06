const images = [
  {
    url: "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "White and Black Long Fur Cat",
  },
  {
    url: "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Orange and White Koi Fish Near Yellow Koi Fish",
  },
  {
    url: "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Group of Horses Running",
  },
];

const imagesRef = document.querySelector(".gallery");

const galleryRef = images
  .map((image) => `<li class="list-item"><img ${Object.values(image)} ></li>`)
  .join("");
// galleryRef.getAttribute("src");
// galleryRef.getAttribute("alt");

// Check the console, you'll see a single string with HTML tags
// console.log(galleryRef);

const item = document.createElement("li");
item.classList.add("item");

// Adding all the markup in one operation
imagesRef.innerHTML = galleryRef;
