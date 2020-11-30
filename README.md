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

> Use this section to display the structure of how your React components are being rendered. This should show the parent to child relation between you components. In other words, show which components are rendering the other components. 

#### Component Hierarchy

> Use this section to define your React components and the data architecture of your app. This should be a reflection of how you expect your directory/file tree to look like. 

``` structure

src
|__ assets/
      |__ fonts
      |__ graphics
      |__ images
      |__ mockups
|__ components/
      |__ Header.jsx
|__ services/

```

#### Component Breakdown

> Use this section to go into further depth regarding your components, including breaking down the components as stateless or stateful, and considering the passing of data between those components.

|  Component   |    Type    | state | props | Description                                                      |
| :----------: | :--------: | :---: | :---: | :--------------------------------------------------------------- |
|    Header    | functional |   n   |   n   | _The header will contain the navigation and logo._               |
|  Navigation  | functional |   n   |   n   | _The navigation will provide a link to each of the pages._       |
|   Gallery    |   class    |   y   |   n   | _The gallery will render the posts using cards in flexbox._      |
| Gallery Card | functional |   n   |   y   | _The cards will render the post info via props._                 |
|    Footer    | functional |   n   |   n   | _The footer will show info about me and a link to my portfolio._ |

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


