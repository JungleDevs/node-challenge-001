# Jungle Devs - Node Challenge #001

## Roadmap

- [x] Linter
- [x] Express setup
- [x] Logger
- [x] Database setup
- [ ] Register
- [ ] Login
- [ ] Logout
- [ ] Authors repository
- [ ] Articles repository
- [ ] Category repository
- [ ] **Admin** Category Create
- [ ] **Admin** Category Read
- [ ] **Admin** Category Update
- [ ] **Admin** Category Delete
- [ ] **Admin** Authors Create
  - [ ] File import
- [ ] **Admin** Authors Read
- [ ] **Admin** Authors Update
- [ ] **Admin** Authors Delete
- [ ] **Admin** Articles Create
- [ ] **Admin** Articles Read by ID
- [ ] **Admin** Articles Read by category
- [ ] **Admin** Articles Update
- [ ] **Admin** Articles Delete
- [ ] **Logged** Articles Read by ID
- [ ] **Anonymous** Articles Read by ID

####

- [ ] Dockerfile
- [ ] Readme update
- [ ] API Documentation

## Description

**Challenge goal**: The purpose of this challenge is to give an overall understanding of a backend application. You’ll be implementing a simplified version of news provider API. The concepts that you’re going to apply are:

- REST architecture;
- Authentication and permissions;
- Data modeling and migrations;
- SQL database;
- Query optimization;
- Serialization;
- Production builds.

**Target level**: This is an all around challenge that cover both juniors and experience devs based on the depth of how the concepts were applied.

**Final accomplishment**: By the end of this challenge you’ll have a production ready API.

## Acceptance criteria

- Clear instructions on how to run the application in development mode
- Clear instructions on how to create production builds
- A good API documentation or collection
- Models created using [Objection.js](https://vincit.github.io/objection.js/)
- Login API: `/api/login`
- Sign-up API: `/api/sign-up`
- Administrator restricted APIs:
  - CRUD `/api/admin/authors`
  - CRUD `/api/admin/articles`
- List article endpoint `/api/articles?category=:slug` with the following response:

```json
[
  {
    "author": {
      "name": "Author Name",
      "picture": "https://picture.url"
    },
    "category": "Category",
    "title": "Article title",
    "summary": "This is a summary of the article"
  },
  ...
]
```

- Article detail endpoint `/api/articles/:id` with different responses for anonymous and logged users:

  **Anonymous**

  ```json
  {
    "author": {
      "name": "Author Name",
      "picture": "https://picture.url"
    },
    "category": "Category",
    "title": "Article title",
    "summary": "This is a summary of the article",
    "firstParagraph": "<p>This is the first paragraph of this article</p>"
  }
  ```

  **Logged user**

  ```json
  {
    "author": {
      "name": "Author Name",
      "picture": "https://picture.url"
    },
    "category": "Category",
    "title": "Article title",
    "summary": "This is a summary of the article",
    "firstParagraph": "<p>This is the first paragraph of this article</p>",
    "body": "<div><p>Second paragraph</p><p>Third paragraph</p></div>"
  }
  ```

## Instructions to Run

- Database: `docker-compose up` will start the PostgreSQL DB
- `yarn dev` is configured to start the app.js using nodemon
