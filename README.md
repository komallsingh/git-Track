# GitHub User Activity CLI

A simple command-line application built with **Node.js and TypeScript** that fetches and displays the recent activity of a GitHub user using the GitHub REST API.

This project was built to demonstrate:

- Working with REST APIs
- HTTP requests using Node.js `fetch`
- TypeScript
- JSON data handling
- CLI arguments
- Error handling
- Environment variables
- API authentication
- Formatting API responses

---

## Features

- Accepts a GitHub username from the command line
- Fetches recent GitHub activity
- Displays activity in a readable format
- Handles GitHub API errors
- Handles invalid usernames
- Handles API rate limits
- Uses a GitHub Personal Access Token
- Keeps the token secure using `.env`
- Supports multiple GitHub event types

---

## Tech Stack

- **Node.js**
- **TypeScript**
- **GitHub REST API**
- **tsx**
- **dotenv**

No external HTTP client such as Axios is used. The application uses Node.js's built-in `fetch()` API.

---

## Project Structure

```text
gitrack/
│
├── src/
│   ├── index.ts
│   ├── github.ts
│   ├── formatter.ts
│
├── .env
├── .gitignore
├── package.json
├── tsconfig.json
└── README.md
