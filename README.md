# NetflixGPT 🎬🔍

NetflixGPT is a React-based movie browsing and GPT-powered search application inspired by Netflix UI/UX. It allows users to browse movies from TMDB, sign up/sign in using Firebase authentication, and even search for movie suggestions using OpenAI's GPT model.

---

## 🔥 Features

### ✅ Authentication

- Login / Sign Up with Firebase Auth
- Form validation using `useRef`
- Update profile: display name & avatar
- Redirect based on authentication state
- Unsubscribes from `onAuthStateChanged` to prevent memory leaks

### 🎥 Browse Page (Post Login)

- Responsive Netflix-style UI using Tailwind CSS
- Movie Trailer in background
- Dynamic title and description
- Multiple MovieLists:
  - Now Playing
  - Trending
  - Popular
  - Action Thriller
  - Horror

### 💡 GPT-Powered Search

- Multilingual search bar
- OpenAI GPT API integrated for movie idea generation
- Fetched GPT-based movie titles from TMDB
- Reused components for consistency

### 🧠 Optimization

- Redux Toolkit (`userSlice`, `movieSlice`, `gptSlice`)
- Memoized components
- Custom Hooks for TMDB data

---

## 🧪 Technologies Used

- ⚛️ React + Vite
- 🧵 Tailwind CSS
- 🔥 Firebase Auth
- 🧠 OpenAI GPT API
- 🎬 TMDB API
- 📦 Redux Toolkit
- 🧪 Custom Hooks

---

## 📘 Learnings

- Implemented authentication using Firebase
- Gained experience with protected routes and redirection
- Used Tailwind CSS for responsive Netflix-style UI
- Created custom React Hooks for API fetching
- Integrated OpenAI GPT API for dynamic movie search suggestions
- Managed state using Redux Toolkit (Slices for user, movies, GPT data)
- Used `useRef` for form validation without re-render
- Made app responsive across sm, md, lg, and xl breakpoints
- Deployed the app with environment variables safely handled

---

## 📸 Screenshots

### 🔐 Login Page

![Login Page](/1-NetflixGpt-LoginPage.png)

---

### 🏠 Home / Browse Page

![Home Page](/2-NetflixGpt-HomePage.png)

---

### 🎬 Movie List Section

![Movie List](/3-NetflixGpt-MovieList.png)

---

### 🤖 GPT Search Page

![GPT Search Page](/4-NetflixGpt-GptSearchPage.png)

---

## 💻 Installation

### 1. Clone the repository:

```bash
git clone https://github.com/yourusername/netflix-gpt.git
cd netflix-gpt
```

### 2. Install dependencies:

```bash
npm install
```

### 3. Create a `.env` file:

```env

VITE_OPENAI_KEY=your_key
VITE_TMDB_KEY=your_key
```

### 4. Run the development server:

```bash
npm run start
```

---

## Important Note

To use this application, you need to have your own TMDB (The Movie Database) API key and OpenAI API key. Make sure to set these keys in your environment variables or configuration files before running the app locally or deploying it.

---

## Live Demo

Check out the live demo of this project here:
[NetflixGPT](https://clone-net-flix-gpt.netlify.app/)

---

## Contributing

Contributions are welcome! If you find any issues or have suggestions for improvements, please feel free to open an issue or submit a pull request.
