## Technologies Used
- React.js
- Redux Toolkit
- Redux Persist
- Axios - API calling
- React Router
- JSON Server
- Universal Cookie - storing JWT

## Demo URL

Successfully Deployed at https://tanx-task.vercel.app/  (with working backend)

Sample Credentials :
```bash 
Email : temp@temp.com
Password : 1234
```


## Features

### User Authentication `/login`, `/register`
 - Users can login with an `email` and `password`.
 - Users can register with an `name`, `email` and `password`.
 - Implemented basic validation. After successful login or signup user will navigate to `/`. (products page)
 - In order to access the `/favourites`, `/orders` pages or `to place an order` user should login first.

### Preview
#### Login Page
![image](https://github.com/kamal9494/tanX-task/assets/97849725/056df49b-d05a-4dab-8b60-d348a0f278db)

#### Register Page
![image](https://github.com/kamal9494/tanX-task/assets/97849725/203178f8-2346-45a9-8638-dcad48dc42dd)

<hr>

### Products `/`
 - Products are listed on the this page.
 - Each Product Card has 2 button's with following functionalities 
    1. `❤️` - **Add to Favorites**.
    2. `🛒` - **Add to Cart**
    3. Click on any product picture to open its description page.
 
### Preview
#### Products Page
![image](https://github.com/kamal9494/tanX-task/assets/97849725/8c14b8e8-fa2e-4cab-937d-ca959a57a6bf)

#### Icons on Each Product
![image](https://github.com/kamal9494/tanX-task/assets/97849725/3c01cfa5-2c63-4ffc-aacc-86095e3b36c3)


<hr> 

### Product Description `/product/:id`
 - User can see Complete Product Details, on the this page.
 - There are 3 button's available with following functionalities
    1. `❤️` - **Add to Favorites**.
    2. `Add to Cart` - **Add to Cart** 
    2. `Buy Now` - **Place an Order** 

### Preview
#### Product Description Page 
![image](https://github.com/kamal9494/tanX-task/assets/97849725/e517674c-3c3f-4dbe-93dc-ed01daff5f02)

<hr>

### Navbar
 - When a user adds a product to the cart, they can see the number of items present in the cart on top of the cart icon.
 - To visit the `cart`, click the cart icon (🛒) in the navbar.
 - favourites, orders are visible in navbar only if the user is logged in.

### Preview
![image](https://github.com/kamal9494/tanX-task/assets/97849725/198c2219-3195-44d2-a232-47d4741cd751)

<hr>

### Favourite `/favourites`
 - Favourite products are listed on this page.
 - To remove item from favourites click on `❤️`.

### Preview
#### Favourites Page 
![image](https://github.com/kamal9494/tanX-task/assets/97849725/54ca712c-97ac-4b44-9b34-a95756263f11)

<hr>

### Cart `/cart`
 - Increment any product quantity by clicking `+`.
 - Decrement any product quantity by clicking `-`.
 - Remove any product by clicking `❌`.
 - Place order by clicking `PLACE ORDER`button.
 - Used React Persist to save cart items.

### Preview
#### Cart Page
![image](https://github.com/kamal9494/tanX-task/assets/97849725/87c87c7c-f302-4c8a-a616-1d7418d00d01)

![image](https://github.com/kamal9494/tanX-task/assets/97849725/67580a04-1a9d-4e7c-a97a-63ffb090d7e5)


<hr>

### Orders `/orders`
 - The user is able to view every order they have placed..

### Preview
#### Orders Page 
![image](https://github.com/kamal9494/tanX-task/assets/97849725/cba2bce2-1f81-4cb4-9c59-368cfc7ebdf9)



## 

## Development Setup
- Clone this repository.

Frontend
```bash 
npm install
npm start
```
Server
```bash 
npm install
npm run server
```

- I used  `"json-server": "^0.17.4"` -D


