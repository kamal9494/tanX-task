## Tech Stack

**Client:** React.js, Redux, TailwindCSS

## Features
### User Authentication
 - Users can login with an `email` and `password`.
 - Users can register with an `name`, `email` and `password`.
 - Implemented basic validation. After successful login or signup user will navigate to `/`. (products page)
 - In order to access the `/favourites`, `/orders` pages or `to place an order` user should login first.

#### Login Page Preview
![image](https://github.com/kamal9494/tanX-task/assets/97849725/056df49b-d05a-4dab-8b60-d348a0f278db)

#### Register Page Preview
![image](https://github.com/kamal9494/tanX-task/assets/97849725/203178f8-2346-45a9-8638-dcad48dc42dd)


### Products `/`
 - Products are listed on the this page.
 - Each Product Card has 2 button's with following functionalities 
    1. `❤️` - **Add to Favorites**.
    2. `🛒` - **Add to Cart** 

#### Products Page Preview
![image](https://github.com/kamal9494/tanX-task/assets/97849725/8c14b8e8-fa2e-4cab-937d-ca959a57a6bf)

#### Icons on Each Product Preview
![image](https://github.com/kamal9494/tanX-task/assets/97849725/3c01cfa5-2c63-4ffc-aacc-86095e3b36c3)




### Product Description `/product/:id`
 - User can see Complete Product Details, on the this page.
 - There are 3 button's available with following functionalities
    1. `❤️` - **Add to Favorites**.
    2. `Add to Cart` - **Add to Cart** 
    2. `Buy Now` - **Place an Order** 

#### Product Description Page Preview
![image](https://github.com/kamal9494/tanX-task/assets/97849725/e517674c-3c3f-4dbe-93dc-ed01daff5f02)


### Navbar
![image](https://github.com/kamal9494/tanX-task/assets/97849725/198c2219-3195-44d2-a232-47d4741cd751)

 - When a user adds a product to the cart, they can see the number of items present in the cart on top of the cart icon.
 - To visit the `cart`, click the cart icon (🛒) in the navbar. 


### Favourite `/favourites`
 - Favourite products are listed on this page.
 - To remove item from favourites click on `❤️`.

#### Favourites Page Preview
![image](https://github.com/kamal9494/tanX-task/assets/97849725/54ca712c-97ac-4b44-9b34-a95756263f11)


### Cart `/cart`
 - Increment any product quantity by clicking `+`.
 - Decrement any product quantity by clicking `-`.
 - Remove any product by clicking `❌`.
 - Place order by clicking `PLACE ORDER`button.

#### Cart Page Preview
![image](https://github.com/kamal9494/tanX-task/assets/97849725/87c87c7c-f302-4c8a-a616-1d7418d00d01)


### Orders `/orders`
 - The user is able to view every order they have placed..

#### Orders Page Preview 
![image](https://github.com/kamal9494/tanX-task/assets/97849725/cba2bce2-1f81-4cb4-9c59-368cfc7ebdf9)



