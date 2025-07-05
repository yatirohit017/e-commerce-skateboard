

// Assigning the API path on a Variable 
const url = 'https://interveiw-mock-api.vercel.app/api/getProducts';


// Selecting the HTML Elements
const product = document.querySelector('.product-container');
const errorPage = document.querySelector('.error-page');
const errorPageBtn = document.querySelector('.error-page button');
const span = document.querySelector('.product-nav span');
const sortSelect = document.querySelector('.sortby-option');

// Global storage of products
let allProducts = []; 


// Display products in the DOM
function displayProducts(data) {
  product.innerHTML = ''; // Clear previous content

  data.forEach(obj => {
    let src = obj?.product?.image?.src || 'placeholder.jpg';
    let alt = obj?.product?.image?.alt || 'Product Image';
    let title = obj?.product?.title || 'No Title';
    let price = parseFloat(obj?.product?.variants?.[0]?.price || '0.00');

    const productDetail = document.createElement('div');
    productDetail.className = 'product';
    productDetail.innerHTML = `
                                <img src="${src}" alt="${alt}">
                                <div class="product-detail">
                                <p class="tooltip" title="${title}">${title.slice(0, 25)}...</p>
                                <p>Rs. ${price}</p>
                                <button>ADD TO CART</button>
                                </div> `;

    product.append(productDetail); // Showing Products 
  });
}

// Fetch products data from API
async function fetchData() {
  try {
    const response = await fetch(url);
    const data = await response.json();
    allProducts = data.data;


    // Number of products display
    span.innerText = allProducts.length;

    displayProducts(allProducts);
    product.style.display = 'flex';
    errorPage.style.display = 'none';

  } 
  // Error handling 
  catch (error) {
    console.error('Error:', error);
    errorPage.style.display = 'flex';
    product.style.display = 'none';
  }
}

// Load Products button click handler (with delay)
errorPageBtn.addEventListener('click', () => {
  errorPageBtn.innerText = 'Loading... please wait ⏳';
  setTimeout(() => {
    fetchData();
  }, 1000); // 1 second delay
});

// Sort select change handler
sortSelect.addEventListener('change', () => {
  let sortedProducts = [...allProducts]; // Clone array

  if (sortSelect.value === '1') {
    // by Low to High
    sortedProducts.sort((a, b) =>
      parseFloat(a.product.variants[0].price) - parseFloat(b.product.variants[0].price)
    );
  } else if (sortSelect.value === '2') {
    // by High to Low
    sortedProducts.sort((a, b) =>
      parseFloat(b.product.variants[0].price) - parseFloat(a.product.variants[0].price)
    );
  }

  displayProducts(sortedProducts);
});





























