# Basic Information Site

This is a simple Node.js-based website built with [Express.js](https://expressjs.com/) that serves static HTML pages. The site includes the following pages:

- **Home** (`index.html`)
- **About** (`about.html`)
- **Contact** (`contact-me.html`)
- **404 Page** (`404.html`)

## Features

- Built with Express.js for routing and server functionality.
- Serves static HTML files.
- Handles 404 errors with a custom `404.html` page.
- Accessible via the following routes:
  - `localhost:3000` → Home page (`index.html`)
  - `localhost:3000/about` → About page (`about.html`)
  - `localhost:3000/contact-me` → Contact page (`contact-me.html`)
  - Any other route → 404 page (`404.html`)

## Prerequisites

- [Node.js](https://nodejs.org/) installed on your system.

## How to Run

1. Clone this repository or download the files.
2. Navigate to the project directory in your terminal.
3. Install the required dependencies by running:
   ```bash
   npm install
   ```
4. Start the server with the following command:
   ```bash
   npm run dev
   ```
5. Open your browser and visit `http://localhost:3000`.

## File Structure

```
.\nodejs-basic-information-site\
│
├── index.js          # Node.js server script
├── index.html        # Home page
├── about.html        # About page
├── contact-me.html   # Contact page
├── 404.html          # 404 error page
├── package.json      # Project dependencies
```

## How It Works

- The server is built using Express.js and listens on port `3000`.
- Based on the URL path, it serves the corresponding HTML file.
- If the requested file is not found, the server responds with the `404.html` page.

## License

This project is open-source and available under the [MIT License](LICENSE).
