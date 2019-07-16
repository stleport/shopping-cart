<div align="center">
<img src="https://i.imgur.com/tTRSIF8.png" width="120" alt="Frichti" />
<h1>Front-End Assignment</h1>
A Simple React App for your Frichti Assignment
</div>


## Table of content
- [Introduction](#assignment)
    - [Case study](#case-study)
- [Assignment](#assignment)
    - [User stores](#user-stories)
    - [Languages, libraries and frameworks](#languages-libraries-and-frameworks)
    - [Elements](#elements)
    - [Presets](#presets)
    - [Architecture](#architecture)
    - [Resources](#resources)
- [Notes](#notes)
    - [General](#general)
    - [Design & UX](#design--ux)
- [Restitution](#restitution)

## Documentation
- [Scripts](./docs/scripts.md)
- [Resources](./docs/resources.md)
- [Create React App](./docs/create-react-app.md)


## Introduction
In this exercise, your aim is to build a small web application that will help us to evaluate your development skills. Architecture, coding style, understanding of ReactJS concepts and styling will be evaluated.

**Note:** do as much as you can, but please, don't waste all your week evenings doing it either!

### Case study
In this application, the user should be able to:
- see a list of products
- add products to a shopping cart
- increment and decrement the quantities on the cart

## Assignment
### User stories
You should respect the following user stories:
1. As a user, I need to have a page to discover the menu (list of products).
2. As a user, I need to add products to my shopping cart.
3. As a user, I need to have a page to look through the products list I added to my cart.
4. As a user, I need to be able to increase and decrease the quantities of the products which are in my cart.

### Languages, libraries and frameworks
#### JavaScript
You might use **ReactJS** to complete this assignment. If you need extra libs or frameworks, you can install them.

#### Styles 
For styling purposes, you should use **SASS** or **styled-components**.

### Elements
You need to create the following elements:

#### Mandatory
The application should include:
- a *Menu Page* - list of products that have an "add to cart" button
- a *Cart Page*, where the user can find all of their added products, along with the availability to increment and decrement quantities

Please look for `@todo` comments.

##### Example 
In order to compose the *Menu Page*, you can create the following components:

| Components  | Purposes |
| :--- | :--- |
| `<ProductPicture />`  | A product image  |
| `<ProductDescription />`  | A product description  |
| `<ProductButtons />`  | An add/remove to cart button  |
| `<ProductCard />`  | A product item  |
| `<ProductsList />`  | A list of `<ProductCard />`  |
| `<Menu />`  | The container of `<ProductsList />`  |

#### Optional
You can add any component, feature, page or automation you consider appreciable. You will need to justify/comment it. Please don't take to much time on non-mandatory features.

### Presets
#### Dataset
You can find the data for the menu [here](https://api.myjson.com/bins/nn7lt).

#### Tools/Libraries
Some libraries are already set-up for you:
- [React Router](https://reacttraining.com/react-router/web/guides/quick-start): a routing solution

Some tools are already set-up for you:
- [StorybookJS](https://storybook.js.org): a user interface development environment and playground for UI components
- [Jest](https://jestjs.io/): a testing framework
- [Enzyme](https://airbnb.io/enzyme/): a testing utility

It could be a good idea to add some linters:
- [ESlint](https://eslint.org/): JavaScript linter (with [React plugin](https://www.npmjs.com/package/eslint-plugin-react) and [Airbnb config](https://github.com/airbnb/javascript/tree/master/packages/eslint-config-airbnb))
- [Stylelint](https://stylelint.io/): style linter

Feel free to use those or use your favorite ones.

### Architecture
Some architecture choices have been made for you:
- [Atomic Design Pattern](http://atomicdesign.bradfrost.com/chapter-2/): a structure for your React application

### Resources
Please read the [resources page](./docs/resources.md).

## Notes
### General
- You can use third-party libraries but you will be asked to justify your choices.
- Take time to construct a good architecture.
- Testing is very important for us, so your app should be tested.
- At Frichti we really focus on details. Verify your work before sending it to us.
- Some tools are'nt fully configured, feel free to fix or remove those.

### Design & UX
A nice UX & UI touch and feel is very important to us. Take great care about how you display and style widgets. Don't worry, we are not asking you to be a CSS and design wizard along with being a JavaScript developer, but those appetences will be appreciated.

Feel free to use [frichti.co](https://www.frichti.co/) to inspire your UI, our Design team will be delighted.

## Restitution
Please document your code and add a `README.md` file to describe your choices, practices, etc.

Choose any convenient way to share your code with us:
- GitHub
- GitLab
- `.zip` (or any archive format)

It could also be super cool to deploy your built app on [surge.sh](https://surge.sh/) for example.

You have a **maximum of one week** for this exercise.

If your have a question, you can ~~bother~~ ask Nico [by e-mail](mailto:nicolas.taltaud@gmail.com).

---


**Thank you for your time and good luck! 🍀**
