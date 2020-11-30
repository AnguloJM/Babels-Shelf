# Babel's Shelf

## Overview

**Babel's Shelf** is a place where books worms just like yourself can come and share their favorite books. Cant find the book your looking for? Not a problem! You can add your book to the bookshelf. You can also personalize and save your own favorite books to your personal shelf!

<br>

## MVP

- Build a Ruby on Rails server, exposing RESTful JSON endpoints
- Establish a database consisting of 3 tables
- Create a front end using React with full CRUD

<br>

### Goals

- Allow users to create an account
- Allow users to browse BookShelf library
- Allow users to add to the bookshelf library
- Allow users to view, add, edit, delete books to their personal shelf (full CRUD front-end)

<br>

### Libraries and Dependencies

> Use this section to list all supporting libraries and dependencies, and their role in the project. Below is an example - this needs to be replaced!

|     Library      | Description                                |
| :--------------: | :----------------------------------------- |
| React | Front end library |
| React Router | Link, Switch, Route |
| Axios | API calls |
| Ruby on Rails | backend server |
| Postgresql |  Relational database that will allow the client to interact with the data |

<br>

### Client (Front End)

#### Wireframes

[Wireframes](https://www.figma.com/file/btJzqzBdyOxVw8wPwbFwU4/Untitled?node-id=0%3A1)

#### Component Tree

[Component Tree](https://whimsical.com/EhxQv77qJhcNAprApLi4GZ) 

#### Component Hierarchy
 

``` structure

|__ assets/
      |__ fonts
      |__ images
      |__ icons
|__ controllers/
      |__ applications_controller.rb
	|__ authentication_controller.rb
	|__ myShelf_controller.rb
	|__ bookshelf_controller.rb
	|__ users_controller.rb
|__ models/

client
src
|__ components/
  |__ Header.jsx
  |__ Header.css
|__ containers/
	|__ MainContainer.jsx
  |__ MainContainer.css
|__ screens/
	|__ welcome.jsx
  |__ welcome.css
	|__ dashboard.jsx
  |__ dashboard.css
	|__ createAccount.jsx
  |__ createAccount.css
	|__ myshelf.jsx
  |__ myshelf.css
	|__ bookshelf.jsx
  |__ bookshelf.css
	|__ Login.jsx
  |__ Login.css
	|__ Register.jsx
  |__ Register.css
      |__ addBook.jsx
  |__ addBook.css
|__ services/
	|__ apiConfig.js
	|__ auth.js
	|__ books.js
|__ App.css/
|__ App.js/
|__ config/
	|__ routes.rb
|__ db/	
	|__ migrate/
	|__ schema.rb/
	|__ seeds.rb/

```

#### Time Estimates

> Use this section to estimate the time necessary to build out each of the components you've described above.

| Task                | Priority | Estimated Time | Time Invested | Actual Time |
| ------------------- | :------: | :------------: | :-----------: | :---------: |
| Backend boilerplate |    H     |     2 hrs      |     TBD     |    TBD    |
| rails contoller, models, routes|    H     |     8 hrs      |     TBD     |    TBD    |
| Button routing |    M     |     6 hrs      |     TBD     |    TBD    |
| React Routing and Linking  |    H     |     6 hrs      |     TBD     |    TBD    |
| CSS |    H     |     16 hrs      |     TBD hrs     |     TBD     |
| Debugging |    H     |     6 hrs      |     TBD     |    TBD    |
| PostMVP |    H     |     12 hrs      |     TBD     |    TBD    |
| TOTAL               |          |     56 hrs      |     TBD     |     TBD     |

> _Why is this necessary? Time frames are key to the development cycle. You have limited time to code your app, and your estimates can then be used to evaluate possibilities of your MVP and post-MVP based on time needed. It's best you assume an additional hour for each component, as well as a few hours added to the total time, to play it safe._

<br>

### Server (Back End)

#### ERD Model

[EDR Model](https://drive.google.com/file/d/1ffZwNcYxEj2oHKqXz0lrqcGeVAtsyfnG/view?usp=sharing)

<br>

***

## Post-MVP

- Create User Authentication 
- Create a review section where users can post reviews for each book

***

## Code Showcase


## Code Issues & Resolutions


