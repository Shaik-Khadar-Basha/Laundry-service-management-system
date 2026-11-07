# 🧺 KHADAR LAUNDRY SERVICES - MANAGEMENT SYSTEM

> A complete, professional, and realistic full-stack Laundry Service Management System mini project built with **HTML5, CSS3, vanilla JavaScript, Node.js, Express.js**, and **MySQL**.

---

## 📌 1. Project Overview

**Khadar Laundry Services** is a digitized laundry management platform designed to automate everyday laundry shop workflows. It allows customers and staff to manage service requests, calculate automated weight-based billing, maintain customer profiles, track garment processing stages, and monitor cash flow transactions.

### 🌟 Key Features
- **Modern Responsive Design**: Clean blue, white, and light grey palette, smooth hover micro-animations, zebra-striped data tables, and mobile-friendly navigation.
- **Automated Pricing Calculation**: Computes `Total Amount = Clothes Weight (kg) × Service Price Per KG` in real time.
- **Full CRUD Capabilities**: Add, view, edit, and delete customers, orders, and payment records.
- **Interactive Admin Dashboard**: Live KPI metric counters (Total Customers, Total Orders, Pending Orders, Completed Orders, and Total Revenue).
- **Pure Web Stack**: Pure HTML/CSS/JavaScript on the frontend with Node.js/Express.js backend and MySQL database. **No React, Angular, PHP, or MongoDB required.**

---

## 📁 2. Project Folder Structure

```
Khadar-Laundry-Services/
│
├── config/
│   └── db.js                 # MySQL2 connection pool & auto-test configuration
│
├── database/
│   └── khadar_laundry.sql    # Complete SQL script for MySQL Workbench
│
├── public/                   # Static frontend served by Express
│   ├── css/
│   │   └── style.css         # Complete responsive styles & animations
│   ├── js/
│   │   ├── main.js           # Shared utilities, toast notifications, active links
│   │   ├── customers.js      # Customer CRUD logic
│   │   ├── orders.js         # Order creation & status update logic
│   │   ├── payments.js       # Payment processing & KPI logic
│   │   └── dashboard.js      # Admin dashboard statistics & charts
│   ├── images/
│   │   └── logo.svg          # Vector laundry branding logo
│   ├── index.html            # Homepage with hero, how-it-works & quick booking
│   ├── about.html            # Company background, hygiene standards & values
│   ├── services.html         # Rates card & pricing comparison per KG
│   ├── customers.html        # Customer registry with add/edit/delete
│   ├── orders.html           # Orders desk with weight calculation
│   ├── payments.html         # Payment transaction ledger
│   ├── dashboard.html        # Admin metrics & recent activity
│   └── contact.html          # Contact info, support form & timings
│
├── routes/                   # Express.js REST API endpoints
│   ├── customers.js          # /api/customers (CRUD)
│   ├── services.js           # /api/services (GET)
│   ├── orders.js             # /api/orders (CRUD & status updates)
│   ├── payments.js           # /api/payments (CRUD & status updates)
│   └── dashboard.js          # /api/dashboard (KPI metrics)
│
├── .env                      # Environment config (Port & MySQL credentials)
├── .env.example              # Example environment template
├── package.json              # Node.js project dependencies & scripts
├── server.js                 # Express HTTP server
└── README.md                 # Complete documentation & setup instructions
```

---

## 🗄️ 3. Database Schema (`khadar_laundry_db`)

The database consists of **ONLY four normalized tables** with proper primary and foreign keys:

### 1. `customers` Table
| Field | Type | Attributes | Description |
|---|---|---|---|
| `customer_id` | INT | PRIMARY KEY, AUTO_INCREMENT | Unique customer identifier |
| `name` | VARCHAR(100) | NOT NULL | Customer full name |
| `phone` | VARCHAR(15) | NOT NULL | Contact telephone number |
| `email` | VARCHAR(100) | NULL | Customer email address |
| `address` | TEXT | NULL | Delivery / residential address |

### 2. `services` Table
| Field | Type | Attributes | Description |
|---|---|---|---|
| `service_id` | INT | PRIMARY KEY, AUTO_INCREMENT | Unique service identifier |
| `name` | VARCHAR(100) | NOT NULL | Name of service |
| `price_per_kg` | DECIMAL(10,2) | NOT NULL | Price charged per kilogram |
| `description` | TEXT | NULL | Detailed service description |

*Included Services:*
1. **Washing** (₹40.00 / kg)
2. **Ironing** (₹25.00 / kg)
3. **Dry Cleaning** (₹90.00 / kg)
4. **Washing and Ironing** (₹60.00 / kg)

### 3. `orders` Table
| Field | Type | Attributes | Description |
|---|---|---|---|
| `order_id` | INT | PRIMARY KEY, AUTO_INCREMENT | Unique order reference number |
| `customer_id` | INT | FOREIGN KEY (customers) | Referenced customer |
| `service_id` | INT | FOREIGN KEY (services) | Referenced service |
| `clothes_weight` | DECIMAL(6,2) | NOT NULL | Weight of clothes in kilograms |
| `order_date` | DATE | NOT NULL | Date order was placed |
| `delivery_date` | DATE | NOT NULL | Promised delivery date |
| `total_amount` | DECIMAL(10,2) | NOT NULL | `weight × price_per_kg` |
| `status` | VARCHAR(30) | DEFAULT 'Pending' | Pending, Processing, Washing, Ready for Delivery, Delivered, Cancelled |

### 4. `payments` Table
| Field | Type | Attributes | Description |
|---|---|---|---|
| `payment_id` | INT | PRIMARY KEY, AUTO_INCREMENT | Unique payment receipt ID |
| `order_id` | INT | FOREIGN KEY (orders) | Associated order number |
| `amount` | DECIMAL(10,2) | NOT NULL | Paid amount in Rupees (₹) |
| `payment_date` | DATE | NOT NULL | Transaction date |
| `payment_method` | VARCHAR(30) | NOT NULL | Cash, UPI, Card |
| `status` | VARCHAR(30) | DEFAULT 'Paid' | Paid, Pending, Failed |

---

## 🚀 4. Step-by-Step Execution Guide (Windows & VS Code)

Follow these 6 simple steps to run the application on your computer:

### Step 1: Open MySQL Workbench & Execute SQL Script
1. Launch **MySQL Workbench** from your Windows Start Menu.
2. Connect to your local MySQL instance (usually `Local instance MySQL80` with user `root`).
3. In MySQL Workbench, click **File** ➔ **Open SQL Script...** (or press `Ctrl + O`).
4. Navigate to your project folder:
   ```
   C:\Users\SHAIK KHADAR BASHA\Desktop\Khadar-Laundry-Services\database\khadar_laundry.sql
   ```
5. Click the **Execute (Lightning icon ⚡)** button to run the script.
6. The script creates the `khadar_laundry_db` database, creates all 4 tables, and inserts realistic sample records!

---

### Step 2: Configure Your MySQL Password
Open the `.env` file located in `Khadar-Laundry-Services\.env` using VS Code or Notepad:
```env
PORT=3000

DB_HOST=localhost
DB_USER=root
DB_PASSWORD=your_actual_mysql_password_here
DB_NAME=khadar_laundry_db
DB_PORT=3306
```
> 💡 *Replace `your_actual_mysql_password_here` with the password you set when installing MySQL (commonly `root`, `admin`, `password`, or whatever you chose during setup).*

---

### Step 3: Open Project in Visual Studio Code
1. Open **Visual Studio Code**.
2. Click **File** ➔ **Open Folder...** (or press `Ctrl + K, Ctrl + O`).
3. Select the folder:
   ```
   C:\Users\SHAIK KHADAR BASHA\Desktop\Khadar-Laundry-Services
   ```

---

### Step 4: Open Terminal & Install Dependencies
1. In VS Code, open the integrated terminal: press `` Ctrl + ` `` (Control + Backtick) or go to **Terminal** ➔ **New Terminal**.
2. Run the following command to install required Node.js packages:
   ```bash
   npm install
   ```
   This installs `express`, `mysql2`, `cors`, and `dotenv`.

---

### Step 5: Start the Server
In the VS Code terminal, start the server:
```bash
node server.js
```
*(Or use `npm start`)*

You will see the startup banner in the terminal:
```
====================================================
🧺 KHADAR LAUNDRY SERVICES - MANAGEMENT SYSTEM
====================================================
✅ [MySQL Database] Connected successfully to "khadar_laundry_db"!
🚀 Server is running smoothly at: http://localhost:3000
🌐 Home Page:         http://localhost:3000/index.html
📊 Admin Dashboard:   http://localhost:3000/dashboard.html
====================================================
```

---

### Step 6: Open the Website in Your Browser
Open Google Chrome, Microsoft Edge, or Firefox and navigate to:
```
http://localhost:3000
```

---

## 🌐 5. Website Pages Directory

| Page URL | Description |
|---|---|
| [http://localhost:3000/index.html](http://localhost:3000/index.html) | **Home Page**: Hero banner, live care features, workflow steps, and service cards. |
| [http://localhost:3000/about.html](http://localhost:3000/about.html) | **About Page**: Mission, hygiene protocols, eco-friendly detergents, and core values. |
| [http://localhost:3000/services.html](http://localhost:3000/services.html) | **Services Page**: Per-KG rate card and comparison table. |
| [http://localhost:3000/customers.html](http://localhost:3000/customers.html) | **Customers Page**: Add new clients, live search, edit contact details, delete records. |
| [http://localhost:3000/orders.html](http://localhost:3000/orders.html) | **Orders Page**: Dynamic weight calculator, order placement, and live status changer. |
| [http://localhost:3000/payments.html](http://localhost:3000/payments.html) | **Payments Page**: Record Cash/UPI/Card transactions, track pending balances. |
| [http://localhost:3000/dashboard.html](http://localhost:3000/dashboard.html) | **Admin Dashboard**: Real-time KPI counters (Customers, Orders, Revenue) & charts. |
| [http://localhost:3000/contact.html](http://localhost:3000/contact.html) | **Contact Page**: Branch details, helpline numbers, working hours, and inquiry form. |

---

## 🛠️ 6. API Route Reference

### Customers (`/api/customers`)
- `GET /api/customers` - Fetch all customers with order counts.
- `GET /api/customers/:id` - Fetch single customer by ID.
- `POST /api/customers` - Register new customer.
- `PUT /api/customers/:id` - Update existing customer details.
- `DELETE /api/customers/:id` - Delete customer (cascades).

### Services (`/api/services`)
- `GET /api/services` - List all laundry services and price per KG.
- `GET /api/services/:id` - Fetch single service details.

### Orders (`/api/orders`)
- `GET /api/orders` - List all orders with joined customer & service details.
- `GET /api/orders/:id` - Retrieve single order details.
- `POST /api/orders` - Place order (calculates `Total Amount = Weight × Price`).
- `PUT /api/orders/:id/status` - Staff quick-action to update status.
- `PUT /api/orders/:id` - Edit full order details.
- `DELETE /api/orders/:id` - Delete order and associated payments.

### Payments (`/api/payments`)
- `GET /api/payments` - Retrieve all payment ledger records.
- `GET /api/payments/eligible-orders` - List orders available for payment.
- `POST /api/payments` - Record a new payment (Cash, UPI, Card).
- `PUT /api/payments/:id/status` - Update payment status (Paid, Pending, Failed).
- `DELETE /api/payments/:id` - Delete payment record.

### Dashboard (`/api/dashboard`)
- `GET /api/dashboard/stats` - Returns KPI statistics and recent orders list.

---

## 👨‍💻 Project Developer
- **Name:** Shaik Khadar Basha
- **Project:** Khadar Laundry Services Management System
- **Year:** 2026
