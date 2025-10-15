# Civic Issue Reporting and Resolution System

This project is a crowdsourced civic issue reporting and resolution system that allows users to report civic issues and track their resolution. The application is built using React for the frontend and Express for the backend.

## Project Structure

The project is divided into two main parts: the frontend and the backend.

### Frontend

The frontend is built with React and Vite, utilizing Tailwind CSS for styling. The main components include:

- **IssueList**: Displays a list of civic issues.
- **Home**: The main page that incorporates the `IssueList` component.
- **App**: The main application component that sets up routing.

### Backend

The backend is built with Express and handles the API for managing civic issues. Key components include:

- **Issues Controller**: Contains functions for CRUD operations related to civic issues.
- **Issues Routes**: Defines the API endpoints for the issues.

## Getting Started

### Prerequisites

- Node.js (version 14 or higher)
- npm (Node package manager)

### Installation

1. Clone the repository:
   ```
   git clone <repository-url>
   cd civic-issue-app
   ```

2. Install dependencies for the frontend:
   ```
   cd frontend
   npm install
   ```

3. Install dependencies for the backend:
   ```
   cd ../backend
   npm install
   ```

### Running the Application

1. Start the backend server:
   ```
   cd backend
   npm start
   ```

2. In a new terminal, start the frontend development server:
   ```
   cd frontend
   npm run dev
   ```

3. Open your browser and navigate to `http://localhost:3000` to view the application.

## Usage

Users can report civic issues by filling out a form (to be implemented) and view existing issues on the home page. The application will display the status of each issue and allow users to track their resolution.

## Contributing

Contributions are welcome! Please open an issue or submit a pull request for any enhancements or bug fixes.

## License

This project is licensed under the MIT License. See the LICENSE file for more details.