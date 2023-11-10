// Get references to HTML elements
var inputName = document.getElementById("inputNameId");
var inputPrice = document.getElementById("inputPriceId");
var inputCategory = document.getElementById("inputCategoryId");
var inputDescription = document.getElementById("inputDescriptionId");
var inputCount = document.getElementById("inputCountId");
var allProducts;

// Check if 'productStorage' exists in localStorage
if (localStorage.getItem("productStorage") == null) {
  // If not, initialize an empty array
  allProducts = [];
} else {
  // If exists, retrieve the data and parse it as JSON
  allProducts = JSON.parse(localStorage.getItem("productStorage"));
  // Display the products
  displayProducts(allProducts);
};





// Function to add a product
function addProduct() {
  // Validate the product name 
  if (validateProductName()) {
    // Create a new product object
    var product = {
      pName: inputName.value,
      pPrice: inputPrice.value,
      pCategory: inputCategory.value,
      pDescription: inputDescription.value,
      pCount: inputCount.value,
    };

    // Add the product to the array
    allProducts.push(product);

    // Save the updated array to localStorage
    localStorage.setItem("productStorage", JSON.stringify(allProducts));

    // Display the updated products
    displayProducts(allProducts);

    // Clear the input fields
    clear();
  } 
};
// Attach event listener to the button that i selected 
var myElement =document.querySelector('#myBtn');
myElement.addEventListener('click', function () {
  addProduct()
}) ;















// Function to display products using the received parameter and the values of the  properties 
function displayProducts(productList) {
  var productInfo = "";
  for (var i = 0; i < productList.length; i++) {
    // Generate HTML markup for each product
    productInfo += `<tr class="w-100 my-5">
                  <td>${[i + 1]}</td>
                  <td>${productList[i].pName}</td>
                  <td>${productList[i].pPrice}</td>
                  <td>${productList[i].pCategory}</td>
                  <td>${productList[i].pDescription}</td>
                  <td>
                    <div class="d-flex justify-content-end align-content-center">${productList[i].pCount}
                      <button class="btn btn-sm p-0" onclick="countChange(${i}, ${1})">
                        <i class="fas fa-plus-square"></i>
                      </button>
                      <button class="btn btn-sm p-0" onclick="countChange(${i}, ${-1})">
                        <i class="fas fa-minus-square"></i>
                      </button>
                    </div>
                  </td>
                  <td>
                    <button onclick="returnToUpdate(${i})"  class="btn btn-sm btn-warning btnChange">Update</button>
                  </td>
                  <td>
                    <button onclick="deleteProduct(${i})" class="btn btn-sm btn-danger btnChange">Delete</button>
                  </td>
                </tr>`;
                
  }


  // Update the HTML content of the table body with the new the generated content in the HTML by the function 
  
  document.getElementById("tBody").innerHTML = productInfo;
};


// for (var i = 0; i < allProducts.length; i++) {
//   var toUpdateButtons = document.querySelectorAll('#returnToUpdate');
//   var element = toUpdateButtons[i];
//   element.addEventListener('click', function () {
//     returnToUpdate(allProducts[i]);
//   });
// }






// Function to clear input fields
function clear() {
  inputName.value = "";
  inputPrice.value = "";
  inputCategory.value = "";
  inputDescription.value = "";
  inputCount.value = "";
};







// Function to live time search products by name
function searchName(searchText) {
  var searchResultName = [];

  for (var i = 0; i < allProducts.length; i++) {
    if (allProducts[i].pName.toLowerCase().includes(searchText.toLowerCase())) {
      searchResultName.push(allProducts[i]);
      displayProducts(searchResultName);
    }
  }
};









// Function to live time search products by category
function searchCategory(searchText) {
  var searchResultCategory = [];
  for (var i = 0; i < allProducts.length; i++) {
    if (
      allProducts[i].pCategory.toLowerCase().includes(searchText.toLowerCase())
    ) {
      searchResultCategory.push(allProducts[i]);
    }
  }
  displayProducts(searchResultCategory);
};







// Function to change the count of a product and parameter (X) here define the add by sending 1 or minus  one by sending -1 
// and  parameter (index) is the number that we have and will change the count of it 
function countChange(index, x) {
  allProducts[index].pCount = Number(x) + Number(allProducts[index].pCount);
  localStorage.setItem("productStorage", JSON.stringify(allProducts));
  displayProducts(allProducts);
};






// Function to delete a product
function deleteProduct(productIndex) {
  allProducts.splice(productIndex, 1);
  localStorage.setItem("productStorage", JSON.stringify(allProducts));
  displayProducts(allProducts);
};









// Function to populate input fields with product data for updating
function returnToUpdate(index) {
  inputName.value = allProducts[index].pName;
  inputPrice.value = allProducts[index].pPrice;
  inputCategory.value = allProducts[index].pCategory;
  inputDescription.value = allProducts[index].pDescription;
  inputCount.value = allProducts[index].pCount;
  document.getElementById("myBtn").innerHTML = "Update Done";
  document.getElementById("myBtn").setAttribute("onclick", `updateDone(${index})`);
  document.getElementById("myBtn").setAttribute("class", "btn btn-warning btn-lg");
};










// Function to update a product
function updateDone(index) {
  // Update the product data
  allProducts[index].pName = inputName.value;
  allProducts[index].pPrice = inputPrice.value;
  allProducts[index].pCategory = inputCategory.value;
  allProducts[index].pDescription = inputDescription.value;
  allProducts[index].pCount = inputCount.value;

  // Display the updated products
  displayProducts(allProducts);

  // Clear the input fields
  clear();

  // Save the updated array to localStorage
  localStorage.setItem("productStorage", JSON.stringify(allProducts));

  // Reset the button text and attributes
  document.getElementById("myBtn").innerHTML = "Add Product";
  document.getElementById("myBtn").setAttribute("onclick", "addProduct();");
  document.getElementById("myBtn").setAttribute("class", "btn btn-primary btn-lg");
};









// Function to validate the product name using regex and test method 
function validateProductName() {
  var regex = /^[a-z]{1}((\w|\s|\.){1,35})$/i;
  if (regex.test(inputName.value)) {
    document.getElementById("nameLabel").innerHTML = "Product Name";
    return true;
    
  } else {
    document.getElementById("nameLabel").innerHTML = `
            Product Name     <span class="text-danger fw-lighter fa-2xs ps-3 ">Please enter your name correctly (Must start product name with a letter and use 2-36 characters (only letters, numbers, _, ., and space ))</span>
            `;
    return false;
  }
};
addEventListener(keyup="validateProductName(this.value)", validateProductName);


