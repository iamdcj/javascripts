# The Javascript

- [Core](core) - a breakdown of the core features/aspects of the language.
- [Paradigms](paradigms) - the various paradigms often used in javaScript applications.
- [APIs](APIs) - snippets and information related to the most popular APIs, e.g. the DOM.
- [Problems](problems) - a collection of coding problems written in JavaScript

---

### Overview

The JavaScript language is a fully-fledged programming language(despite what some might say), and it possesses the following properties and features;

- **Single-Threaded** - it has a single call-stack and one memory heap. The programs we create execute top-to-bottom, and must finish doing X before moving onto Y.

- **Lightweight** - it is a fairly simple programming language without proper types, making it lightweight and portable.

- **High-Level** - it is highly abstracted from the machine code/instructions, making it a very programmer-friendly language to work with when engineering applications.

- **Interpreted/JIT-compiled** - it is classicaly perceived to be an interpreted language, however newer engines such as Chrome's V8 perform Just-In-Time compilation; the code is not compiled ahead of time into a bytecode, instead it is compiled on-the-fly as the code is being executed.

- **Cross-Platform** - since its incpetions it has mainly been used as a client-side language, and pretty much exclusively in web browsers, however over recent years JS has crossed platforms and started to be used for back-end development via V8-powered [NodeJS](https://nodejs.org/en/) runtime.

  - **Client-Side** - The most popular variant of JavaScripts extends the core language via objects which allow programs to interact with the browser and the website's [DOM](APIs/DOM) - we can edit a site's content, add nodes to the document, apply styling, and update the the browser location and history.

  - **Server-Side** - Server-side JS extends the core language by providing server-side specific objects, thus allowing applications to talk to databases and update files located on a server.

- **Dynamic / Loose** - it doesn't have static/strict typing, i.e. variables do not need to be assigned a type when being declared; **_in JavaScript the values have types, not the variable itself._**

  - [Types in JavaScript](core/types)

- **Multi-paradigm** - JS allows you to build applications with different coding [paradigms](paradigms), such as: [OOP](paradigms/object-oriented-programming), [Functional](paradigms/function), Event-Driven.
