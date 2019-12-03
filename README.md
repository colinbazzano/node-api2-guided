# Node API 2 Guided Project Starter Code

Guided project starter code for **Node API 2** module.

In this project we will learn how to create a very simple Web API using `Node.js` and `Express`, and cover how to use `Express Routers` to break up the application to make it more maintainable.

## Prerequisites

- a REST client like [insomnia](https://insomnia.rest/download/) or [Postman](https://www.getpostman.com/downloads/) installed.

## Project Setup

- [ ] fork and clone this repository.
- [ ] **CD into the folder** where you cloned **your fork**.
- [ ] type `npm i` to download dependencies.

Please follow along as the instructor builds the API step by step.

// NOTES START HERE!

Separation of Concerns answers "who should be doing this"

## Routing

- use it to break up an application/api into sub applications
- picking the code to execute based on URL and HTTP Method
- used for managing sub resources (the comments on a blog post)

to fix `listen EADDRINUSE: address already in use :::4000` run the api on another port OR stop any other server running on that port. Use `crtl + c` to stop a running server on a terminal.

Error `server.listen is not a function`, check that the server is exported correctly (mind the `s` in `exports`), also check that the import (`require`) for the server is correct.

Colin Bazzano 1:00 PM
as sort of a sanity test, it would be safe to say because of server.use("/api/hubs", hubsRouter); inside our server.js, all of our routes inside hubs-router.js will have "/api/hubs" in front of it, almost like how we set our baseURL in axiosWithAuth, yes?

TypeError: Cannot read property 'use' of undefined. Make sure that whatever is left

# Query String Parameters

The client can send data to the server inside:

- body
  -URL parameters
- query string parameters (part of the URL)
- ? (headers)

https://www.google.com
/search ----> path (routing handles that)
? ----------> marks the beginning of the query string parameters
source=hp ----------> key/value
& ---------> separates key/value
ei = d6_mXe3_KIvL_QaS5q_gCw&q=rubber+ducking&oq=...

Translate to an object (Express does it)

```js
const req.query = {
    source 'hp',
    ei: 'sdfaoidhoaifehoaihfs'
    }
```

TEST IT OUT!

http://localhost:4000/api/hubs?limit=3
plug this into insomnia with your get, and see that you can make more API's visible.

---

you can also see specific ones by:
http://localhost:4000/api/hubs?limit=4&page=2

this will show you 4, on page 2

---

this, will allow you to order it in descending order
http://localhost:4000/api/hubs?limit=4&page=2&sortdir=desc

this shows you 4, on page 2, in descending order

---

you can also sort!
http://localhost:4000/api/hubs?limit=4&page=2&sortdir=desc&sortby=name

this shows you 4, on page 2, in descending order, sorted by name.
