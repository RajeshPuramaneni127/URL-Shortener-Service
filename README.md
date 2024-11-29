Here is the **README.md** file that explains the complete project and provides setup and run instructions:

---

### **README.md**

# URL Shortener Service

This project is a URL Shortener Service that allows users to:
1. Submit a long URL and get a shortened version.
2. Redirect from a shortened URL to the original long URL.
3. View a table with the original long URLs, shortened URLs, and their access counts.

The service is built with **Node.js**, **Express.js** for the backend, and **React** for the frontend. It uses an in-memory data store for simplicity.

---

## **Features**
### Core Features:
- **Shorten URLs**: Users can input a long URL and receive a unique short URL.
- **Redirect URLs**: Accessing the short URL redirects to the original long URL.
- **Track Statistics**: The service tracks the access count for each short URL.

### Additional Features:
- **Stats Table**: Displays all URLs (long and short) along with their access counts.
- **Validation**: Ensures the input is a valid URL format.

---

## **Technologies Used**
- **Backend**: Node.js, Express.js
- **Frontend**: React.js
- **State Management**: React hooks
- **Styling**: CSS
- **API Communication**: Fetch API
- **Storage**: In-memory Map (for simplicity)

---

## **Project Structure**

```
url-shortener/
├── backend/
│   ├── src/
│   │   ├── controllers/
│   │   │   └── urlController.js  # Handles API endpoints logic
│   │   ├── services/
│   │   │   └── urlService.js     # Core business logic for URLs
│   │   ├── routes/
│   │   │   └── urlRoutes.js      # API routes
│   │   └── index.js              # Server entry point
│   ├── package.json              # Backend dependencies and scripts
│   └── .gitignore                # Backend ignored files
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   │   ├── UrlShortenerForm.js  # URL input and shorten functionality
│   │   │   └── UrlStats.js          # Table displaying stats
│   │   ├── services/
│   │   │   └── apiService.js        # Fetch API functions
│   │   └── App.js                   # Main app component
│   ├── public/
│   │   └── index.html               # Root HTML file
│   ├── package.json                 # Frontend dependencies and scripts
│   └── .gitignore                   # Frontend ignored files
```

---

## **Setup and Run Instructions**

### Prerequisites
- **Node.js** (v16+ recommended)
- **npm** (v8+ recommended)

### Steps to Run

#### 1. **Clone the Repository**
   ```bash
   git clone <repository-url>
   cd url-shortener
   ```

#### 2. **Backend Setup**
   - Navigate to the backend folder:
     ```bash
     cd backend
     ```
   - Install dependencies:
     ```bash
     npm install
     ```
   - Start the backend server:
     ```bash
     npm start
     ```
   - The backend will run on `http://localhost:3001`.

#### 3. **Frontend Setup**
   - Navigate to the frontend folder:
     ```bash
     cd ../frontend
     ```
   - Install dependencies:
     ```bash
     npm install
     ```
   - Start the frontend development server:
     ```bash
     npm start
     ```
   - The frontend will run on `http://localhost:3000`.

---

## **How to Use**

1. Open your browser and go to `http://localhost:3000`.
2. **Shorten a URL**:
   - Enter a long URL in the input field and click **Shorten URL**.
   - The shortened URL will be displayed below the form.
3. **Redirect**:
   - Copy the shortened URL and paste it in your browser to be redirected to the original URL.
4. **View Statistics**:
   - A table below the form displays all URLs, their shortened versions, and how many times each short URL has been accessed.

---

## **API Documentation**

### 1. **POST `/api/v1/urls/shorten`**
   - **Description**: Shortens a given long URL.
   - **Request Body**:
     ```json
     {
       "longUrl": "https://example.com"
     }
     ```
   - **Response**:
     ```json
     {
       "longUrl": "https://example.com",
       "shortUrl": "abc123"
     }
     ```

### 2. **GET `/api/v1/urls/:shortUrl`**
   - **Description**: Redirects the user to the original long URL.

### 3. **GET `/api/v1/urls/stats`**
   - **Description**: Returns all URL mappings and their access counts.
   - **Response**:
     ```json
     [
       {
         "longUrl": "https://example.com",
         "shortUrl": "abc123",
         "accessCount": 5
       }
     ]
     ```

---

## **Testing**

- Use tools like **Postman** or **cURL** to test the API endpoints.
- For frontend, open the app in your browser and follow the steps in the **How to Use** section.

---

## **Extensibility**

This project is designed for easy future expansion. For example:
- **Database Integration**: Replace the in-memory data store with MongoDB, PostgreSQL, or Redis.
- **Authentication**: Add user accounts and authentication.
- **TTL (Time-to-Live)**: Allow URLs to expire after a specific duration.

---

## **Known Issues**
- The current implementation does not persist data beyond server restarts (due to in-memory storage).
- URL validation does not check for the actual reachability of the entered URL.

---

## **License**
This project is licensed under the **MIT License**.

---

Let me know if you need additional changes!
