# 📊 Personal Data Dashboard

A responsive and interactive data dashboard built with HTML, CSS, JavaScript, and Node.js (Express).  
This project allows users to view and update personal information stored in a local JSON file via a clean and modern web interface.


## 🚀 Features

✦ View and edit structured personal data (name, favorite games, number of cars)  
✦ Realtime form updates with live data display  
✦ Persistent data storage using a local JSON file  
✦ Backend API built with Express.js  
✦ Frontend communicates with backend using Fetch API  
✦ Clean and modern UI styled with custom CSS  
✦ CORS-enabled for frontend-backend communication

## 📂 Tech Stack

✦ **Frontend**: HTML, CSS, JavaScript (vanilla) <br>
✦ **Backend**: Node.js, Express.js <br> 
✦ **Data Storage**: `db.json` (local JSON file) <br>
✦ **Others**: CORS, Fetch API <br>

## 📸 Preview

![image](https://github.com/user-attachments/assets/e7f7a06d-a63f-4df8-b056-8a40d6f26d82)


## 🛠️ How to Run It Locally
1. Clone the repository
```bash
git clone https://github.com/your-username/personal-data-dashboard.git
```
2. Navigate to the project folder
```bash
cd personal-data-dashboard
```
3. Install backend dependencies
```bash
npm install
```
4. Start the Express backend server
```bash
npm start
```


# 🗃️ Alternate Usage: Node-Only JSON Database Tool
This project also includes a minimal Node.js setup for working directly with the JSON database without a browser interface.
It’s useful for testing or running simple scripts to interact with the JSON data from the command line.

### 📁 Files Involved
✦ db.json: Acts as a local key-value store for persistent data <br>
✦ db_functions.js: Exposes readDb() and writeDb() to read/write JSON from/to db.json using the Node.js fs module <br>
✦ index.js: A sample script showing how to use these utilities to create, modify, or inspect JSON data in a Node-only context <br>

### 🧪 How to Run It
1. Open a terminal in the project folder <br>
2. Un-comment the desired block of code in index.js (e.g., create new data, update existing values, or print current data) <br>
3. Run the script using Node:
```bash
node index.js
```
### 📌 Example Use Case
```bash
  const savedData = readDb(); 
  savedData.NumberOfCars = 50; 
  writeDb(savedData); 
```
