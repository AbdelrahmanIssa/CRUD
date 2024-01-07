# Project Overview: CRUD Application

## LiveDemo
https://sage-llama-7ec5bb.netlify.app/
[CRUD](https://sage-llama-7ec5bb.netlify.app/)
## Description:
This project is a simple CRUD (Create, Read, Update, Delete) application for managing products. It allows users to add, update, delete, and search for products. The interface is designed to be user-friendly, providing input fields for product details and a table to display the existing products. Real-time search functionality is implemented, allowing users to filter products by name or category.

## File Structure:

### HTML File (`index.html`):
- Defines the structure of the webpage.
- Includes Bootstrap for styling.
- Provides input fields for product details, a button to add products, and a table to display product information.

### CSS Files (`all.min.css`, `bootstrap.min.css`, `index.css`):
- External stylesheets for styling the webpage.

### JavaScript Files (`bootstrap.bundle.min.js`, `index.js`):
- `bootstrap.bundle.min.js`: Bootstrap JavaScript library for enhanced UI components.
- `index.js`: Contains the application logic, including functions for adding, updating, deleting, and searching products.

## Functionality:

### Adding Products (`addProduct`):
- Validates product name before adding.
- Creates a new product object with input values.
- Updates the product list in local storage.
- Clears input fields after adding.

### Displaying Products (`displayProducts`):
- Generates HTML for each product.
- Updates the table row with the product information.

### Searching Products (`searchName`, `searchCategory`):
- Filters products by name or category based on user input.
- Displays search results.

### Changing Product Count (`countChange`):
- Updates the product count based on user input.
- Stores the updated product list in local storage.
- Displays the updated product list.

### Deleting Products (`deleteProduct`):
- Removes the specified product from the list.
- Stores the updated product list in local storage.
- Displays the updated product list.

### Updating Products (`returnToUpdate`, `updateDone`):
- Prefills input fields for updating a product.
- Finalizes the update of a product.
- Displays the updated product list.
- Resets button text and onclick event for adding a new product.

### Validating Product Name (`validateProductName`):
- Uses a regular expression to validate the product name.
- Updates the label text based on validation.
