HungerHub
=========

Overview
--------

**HungerHub** is a full-stack food ordering web application built using the MERN stack (MongoDB, Express, React, Node.js). It allows users to browse various food items, place orders, and track their order status. The application also includes an admin panel for managing products and orders.

Features
--------

*   **User Interface:** A responsive and user-friendly interface for browsing menus, viewing individual product details, and managing the shopping cart.
    
*   **User Authentication:** Secure user authentication and authorization using JWT.
    
*   **Admin Panel:** Features for product management, including adding, updating, and deleting products.
    
*   **Order Management:** Users can place orders, view order history, and track the status of their orders.
    
*   **Payment Integration:** Integrated with Stripe for secure and seamless payment processing.
    
*   **Image Uploads:** Handled using Multer for uploading images of food items.
    

Tech Stack
----------

*   **Frontend:** React, Redux, Tailwind CSS, SASS, HTML, CSS, Framer Motion
    
*   **Backend:** Node.js, Express.js, MongoDB
    
*   **Other Tools & Technologies:** Stripe for payments, Multer for file uploads, Bcrypt for password hashing, JWT for authentication
    

Setup and Installation
----------------------

### Install dependencies:

#### For the backend:

```bash
 cd backend
 npm install
``` 
   
For the frontend:

```bash
bashCopy codecd ../frontend 
npm install
```

### Environment Variables:

Create a .env file in the root of the backend directory and add the following variables:

```bash
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
STRIPE_SECRET_KEY=your_stripe_secret_key
```

### Run the application:

#### Start the backend server:
```bash
npm run dev
``` 

#### Start the frontend server:
```bash
cd ../frontend
npm start
```

### Access the application:

Open your browser and go to [http://localhost:3000](http://localhost:3000).

Usage
-----

*   **Browse Products:** Users can view a list of available food items, along with detailed pages for each item.
    
*   **Cart and Checkout:** Add items to the cart and proceed to checkout for payment.
    
*   **Order Tracking:** Users can view the status of their orders.
    
*   **Admin Features:** Admins can manage products and orders through a dedicated admin panel.
    

Contributing
------------

Feel free to fork this repository and submit pull requests. For major changes, please open an issue to discuss your ideas.


Contact
-------

**Suryansh Singh**
[LinkedIn](http://www.linkedin.com/in/singh-suryanx) | [GitHub](https://github.com/surya-ansh)
Email: [suryansh.singh7011609038@gmail.com](mailto:suryansh.singh7011609038@gmail.com)
