📅 TODAYS-TASK Manager using Go and React
TODAY'S-TASK is a full-stack task management application built with a Go backend and a React + TypeScript frontend. It enables users to manage tasks efficiently with a modern and responsive UI.

🚀 Features
📝 Perform CRUD operations on tasks
✅ Mark tasks as completed
💻 Responsive and accessible UI using Chakra UI
🌍 Environment-aware API configuration for deployment flexibility
⚙️ Efficient data fetching and caching via React Query (TanStack Query)
🛠️ Tech Stack
Backend: Go
Frontend: React + TypeScript
Styling: Chakra UI
Database: MongoDB
Data Fetching: React Query + native Fetch API
Frontend Build Tool: Vite
📦 Tools & Libraries
Tool	Purpose
Go	High-performance backend API
React	Interactive and modular UI
TypeScript	Type safety and better developer tooling
MongoDB	Flexible and scalable data storage
Chakra UI	UI components with accessibility in mind
React Query	Server state management and caching
Vite	Lightning-fast frontend development
How to Run Locally
Prerequisites
Go (v1.18 or higher)
Node.js (v16 or higher)
Git
Setup Instructions
Clone the repository:
git clone https://github.com/SATHIYAPRABHA120/go-and-react.git
cd go-and-react
2.Start the backend API server (ensure MongoDB is running):

cd go-and-react
go run main.go
3.Start the frontend development server:

cd client
npm install
npm run dev
4.Access the application in your browser at: http://localhost:5173

Environment Configuration
Create a .env file for the following contents (say for example) :
PORT=5000
MONGODB_URI = mongodb+srv://username:password@cluster0.6sdqxgs.mongodb.net/database_name?retryWrites=true&w=majority&appName=Cluster0
ENV = development
