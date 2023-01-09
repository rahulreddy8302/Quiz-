# QuizApp

## About:
This is a simple online quiz application made with Nodejs,Expressjs and MongoDB.

---
## Objectives
### Completed User Stories:

#### As an Assessor
+ I should be able to create tests from different categories and set other parameters( Time duration , Test Expiry and Number of Questions )
+ I should be able to take tests.
+ I should be able to view tests created by me and results of those tests.

#### As an Examine
+ I should be able to take each test only once.
+ I should not be able to take tests after its expiry.

---
## Tech-Stack


The backend is developed in **Nodejs (a javascript runtime envionment)**,  **ExpressJS (a minimalistic web framework)** and **MongoDB (as a database)**.  
**Mongoose(Object-Document-Mapper)** is used to help writing queries for CRUD operations in JS as an alternative to NoSQL.  

**Axios** a promise based http library is used to connect the external questions provider(**https://opentdb.com/api.php**) and the backend.

---

