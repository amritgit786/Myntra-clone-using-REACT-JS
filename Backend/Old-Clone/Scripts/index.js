// let item = {
//   item_image: "Images/1 (1).jpg",
//   rating: {
//     stars: 4.5,
//     noofReviews: 1400,
//   },
//   company_name: "Carlton-London",
//   item_name: "Rhodium-Plated CZ Floral Studs",
//   current_price: 606,
//   original_price: 1045,
//   discount_percentage: 42,
// };
let bagItems;
onload();
function onload() {
  let bagItemsStr = localStorage.getItem("bagItems");
  bagItems = bagItemsStr ? JSON.parse(bagItemsStr) : [];
  displayItemOnHomePage();
  displayBagIcon();
}

function addToBag(itemId) {
  bagItems.push(itemId);
  localStorage.setItem("bagItems", JSON.stringify(bagItems));
  displayBagIcon();
}
function displayBagIcon() {
  let displayBagElementCount = document.querySelector(".bag-item-count");
  if (bagItems.length > 0) {
    displayBagElementCount.style.visibility = "visible";
    displayBagElementCount.innerText = bagItems.length;
  } else {
    displayBagElementCount.style.visibility = "hidden";
  }
}
function displayItemOnHomePage() {
  let itemContainerElement = document.querySelector(".items-container");
  if (!itemContainerElement) {
    return;
  }
  let innerHtml = ``;
  items.forEach((item) => {
    innerHtml += `       
        <div class="item-container">
          <img class="item-image" src="${item.image}" alt="image1" />
          <div class="rating">${item.rating.stars} ⭐ | ${item.rating.count}</div>
          <div class="company-name">${item.company}</div>
          <div class="item-name">${item.item_name}</div>
          <div class="price">
            <span class="current-price">Rs ${item.current_price}</span>
            <span class="origial-price">Rs ${item.original_price}</span>
            <span class="discount">(${item.discount_percentage}% OFF)</span>
          </div>
          <button class="btn-add-bag" onclick="addToBag(${item.id})">Add to Bag</button>
        </div>`;
  });

  itemContainerElement.innerHTML = innerHtml;
}
