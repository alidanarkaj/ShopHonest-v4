//import the data
import { clothingItems } from "./clothingItems.js";

//display all items initially from dataset
window.onload = () => {
  displayClothes(clothingItems);
};

//function to display products
function displayClothes(clothes) {
  const itemListings = document.getElementById("itemListings");
  itemListings.innerHTML = "";

  clothes.forEach((item) => {
    const itemDiv = document.createElement("div");
    itemDiv.classList.add("clothing-item");

    itemDiv.innerHTML = `
      <img src="${item.image}" alt="${item.itemName}">
      <div class="description">
        <p>${item.itemName}</p>
        <p>$${item.price.toFixed(2)}</p>
      </div>
    `;

    itemListings.appendChild(itemDiv);
  });
}
