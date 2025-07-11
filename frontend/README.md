# Uber Frontend Documentation

This is the frontend for the Uber clone project, built with React and Vite. It uses Tailwind CSS for styling and supports real-time features via Socket.io.

---

## Getting Started

### Installation

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Start the development server:**
   ```bash
   npm run dev
   ```

---

## Project Structure

```
frontend/
├── public/                # Static files and the main HTML template
├── src/
│   ├── components/        # Reusable UI components (e.g., LocationSearchPanel, VehiclePanel, ConfirmRide, etc.)
│   ├── context/           # React Contexts for global state (e.g., SocketContext, UserContext)
│   ├── pages/             # Application pages (e.g., Home.jsx, Login.jsx, Register.jsx)
│   ├── assets/            # Images, icons, and other static assets
│   ├── styles/            # Additional CSS files if needed
│   ├── index.css          # Main CSS file with Tailwind directives
│   ├── main.jsx           # App entry point, renders the root React component
│   └── App.jsx            # Main application component, sets up routes and layout
├── tailwind.config.js     # Tailwind CSS configuration
├── postcss.config.js      # PostCSS configuration for Tailwind
├── package.json           # Project metadata and scripts
└── .env                   # Environment variables for API and Socket URLs
```

### Folder Details

- **public/**  
  Contains static files and the main HTML template (`index.html`) used by Vite.

- **src/components/**  
  Houses all reusable React components, such as panels for location search, vehicle selection, ride confirmation, and driver status.

- **src/context/**  
  Contains React Contexts for managing global state, such as user data and socket connections.

- **src/pages/**  
  Includes main application pages like `Home.jsx`, `Login.jsx`, and `Register.jsx`. Each page represents a route in the app.

- **src/assets/**  
  Stores images, icons, and other static assets used throughout the frontend.

- **src/styles/**  
  Optional folder for custom CSS files if you need styles beyond Tailwind.

- **src/index.css**  
  Main CSS file. Includes Tailwind's base, components, and utilities:
  ```css
  @tailwind base;
  @tailwind components;
  @tailwind utilities;
  ```

- **src/main.jsx**  
  Entry point for the React app. Imports global styles and renders the root component.

- **src/App.jsx**  
  Main application component. Sets up routing and layout for the app.

- **tailwind.config.js**  
  Configuration for Tailwind CSS. Specifies which files Tailwind should scan for class names.

- **postcss.config.js**  
  Configuration for PostCSS, required for Tailwind CSS to work.

- **package.json**  
  Lists dependencies, scripts, and project metadata.

- **.env**  
  Stores environment variables such as API and Socket URLs.

---

## Styling

- **Tailwind CSS** is used for utility-first styling.
- Main Tailwind directives are in `src/index.css`:
  ```css
  @tailwind base;
  @tailwind components;
  @tailwind utilities;
  ```

---

## Key Features

- **Location Search:** Users can search for pickup and destination locations.
- **Vehicle Selection:** Users choose vehicle type and see fare estimates.
- **Ride Confirmation:** Users confirm rides and see driver search status.
- **Real-Time Updates:** Uses Socket.io for live ride and driver updates.

---

## Environment Variables

Create a `.env` file in the frontend directory for API endpoints and Socket.io URLs, for example:
```
VITE_API_URL=http://localhost:5000
VITE_SOCKET_URL=http://localhost:5000
```

---

## Customization

- Update Tailwind config in `tailwind.config.js` to change theme or add plugins.
- Add new pages in `src/pages/` and components in `src/components/`.
- Place images and icons in `src/assets/`.
- Add custom styles in `src/styles/` if needed.

---

## Troubleshooting

- If Tailwind CSS is not working, ensure:
  - `tailwindcss`, `postcss`, and `autoprefixer` are installed.
  - `postcss.config.js` exists and includes Tailwind.
  - `index.css` is imported in `main.jsx`.
- For real-time features, ensure the backend Socket.io server is running.

---

## Useful Scripts

- `npm run dev` — Start development server
- `npm run build` — Build for production
- `npm run preview` — Preview production build

---

## License

This project is for educational purposes only.
