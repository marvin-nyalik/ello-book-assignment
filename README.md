<a name="readme-top"></a>

<div align="center">
<br/>

# Ello Book Assignment App

</div>
<!-- TABLE OF CONTENTS -->

## 📗 Table of Contents

- [📖 Ello Book Assignment App ](#-ello-book-assignment-app-)
  - [🛠 Built With ](#built-with)
    - [Tech Stack ](#tech-stack-)
    - [Key Features ](#key-features-)
  - [💻 Getting Started ](#-getting-started-)
    - [Setup](#setup)
    - [Install](#install)
  - [Design Decisions ](#-design-decisions-)
  - [👥 Author ](#-author-)
  - [🤝 Contributing ](#-contributing-)
  - [🙏 Acknowledgments ](#-acknowledgments-)
  - [📝 License ](#-license-)

<!-- PROJECT DESCRIPTION -->

# 📖 Ello Book Assignment <a name="ello-book-assignment-app"></a>

The Ello Book Assignment App is a web application designed for teachers to search for books and manage a reading list for their students. The app uses a GraphQL endpoint to fetch book data from the backend and displays each book with its title, author, cover photo URL, and reading level.

## 🛠 Built With <a name="built-with"></a>

#### Tech Stack <a name="tech-stack"></a>

- React: Frontend library for building user interfaces.
- Redux Toolkit: For state management.
- Material UI: For UI components and styling.
- GraphQL: For querying data from the backend.

<!-- Features -->

### Key Features <a name="key-features"></a>

- **Search Books**: Teachers can search for books by title.

- **Add Book to Reading List**: Teachers can add books to a reading list for their students.
- **Remove Book from Reading List**: Teachers can remove books from the reading list.
- **Responsive Design**: The app is designed to work on different screen sizes.
- **State Management**: Redux Toolkit is used for state management.
- **UI Components**: Material UI is used for styling and UI components.

<p align="right">(<a href="#readme-top">back to top</a>)</p>


<!-- GETTING STARTED -->

## 💻 Getting Started <a name="getting-started"></a>

To get a local copy up and running, follow these steps.

### Setup

Clone this repository to your desired folder:

```bash
git clone https://github.com/marvin-nyalik/ello-book-assignment.git
```

### Install

You'll need to install dependencies for both backend and frontend projects, then start the applications independently:

##### 1. Backend
```bash
cd ello-book-assignment/backend
npm install
npm start
```
- You should be able to interact with the backend server at `http://localhost:4000/`

##### 2. Frontend
```bash
cd ello-book-assignment/frontend/ello-book-assignment
npm install
npm run dev
```
- Open the application at `http://localhost:5173/`

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## Design Decisions <a name="design-decisions"></a>

### Global State Management with Redux

Using Redux for state management provides a centralized and predictable state container. This allows for:

- **Consistent State Across the App**: With global state, components can access and update the state consistently without prop drilling, ensuring data consistency throughout the app.
- **Enhanced Debugging**: Redux DevTools allows for easier tracking of state changes and debugging, making the development process more efficient.
- **Better State Management**: Redux’s strict rules for updating the state reduce the chances of unexpected mutations, leading to more reliable and maintainable code.

### Modular Code Organization

Organizing the code in a modular way helps in:

- **Scalability**: As the application grows, having a modular structure allows for adding new features or modules without affecting existing ones.
- **Maintainability**: Each module can be developed, tested, and debugged independently, making the codebase easier to maintain.
- **Reusability**: Modular code promotes the reusability of components and functions, reducing redundancy and effort.

### Separation of Concerns with Helpers

Separating concerns by using helper functions stored in dedicated files ensures that:

- **Code Readability**: Keeping business logic separate from the UI components makes the code easier to read and understand.
- **Reusability**: Common functions and constants can be reused across different application parts, promoting DRY (Don't Repeat Yourself) principles.
- **Testability**: Isolated functions and constants are easier to test, leading to more robust and reliable code.

## 👥 Author <a name="author"></a>

👤 **Marvin Otieno**

- [GitHub](https://github.com/marvin-nyalik)
- [WellFound](https://wellfound.com/u/marvin-otieno)

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- CONTRIBUTING -->

## 🤝 Contributing <a name="contributing"></a>

Contributions, issues, and feature requests are welcome!

Feel free to check the [issues page](https://github.com/marvin-nyalik/ello-book-assignment/issues).

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- SUPPORT -->

## ⭐️ Show your support <a name="support"></a>

If you like this project, star it, and follow me on GitHub for more projects like this.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- ACKNOWLEDGEMENTS -->

## 🙏 Acknowledgments <a name="acknowledgments"></a>
- The Ello team for defining the project requirements
- Material UI for the UI components.
- Redux Toolkit for state management.
- GraphQL for the data querying language.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- LICENSE -->

## 📝 License <a name="license"></a>

This project is [MIT](./LICENSE) licensed.

<p align="right">(<a href="#readme-top">back to top</a>)</p>