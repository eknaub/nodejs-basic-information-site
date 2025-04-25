# Basic Information Site

This is a simple Node.js-based website that serves static HTML pages. The site includes the following pages:

- **Home** (`index.html`)
- **About** (`about.html`)
- **Contact** (`contact-me.html`)
- **404 Page** (`404.html`)

## Features

- Serves static HTML files.
- Handles 404 errors with a custom `404.html` page.
- Accessible via the following routes:
  - `localhost:8080` → Home page (`index.html`)
  - `localhost:8080/about` → About page (`about.html`)
  - `localhost:8080/contact-me` → Contact page (`contact-me.html`)
  - Any other route → 404 page (`404.html`)

## Prerequisites

- [Node.js](https://nodejs.org/) installed on your system.

## How to Run

1. Clone this repository or download the files.
2. Navigate to the project directory in your terminal.
3. Run the following command to start the server:
   ```bash
   node index.js
   ```
4. Open your browser and visit `http://localhost:8080`.

## File Structure

```
.\nodejs-basic-information-site\
│
├── index.js          # Node.js server script
├── index.html        # Home page
├── about.html        # About page
├── contact-me.html   # Contact page
├── 404.html          # 404 error page
```

## How It Works

- The server listens on port `8080`.
- Based on the URL path, it serves the corresponding HTML file.
- If the requested file is not found, the server responds with the `404.html` page.

## License

This project is open-source and available under the [MIT License](LICENSE).
