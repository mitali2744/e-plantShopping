# 🌿 Paradise Nursery — E-Plant Shopping App

A responsive e-commerce plant shopping web application built with React.js and Redux Toolkit.

🔗 **Live Demo:** [https://e-plant-shopping-smoky-tau.vercel.app/](https://e-plant-shopping-smoky-tau.vercel.app/)

---

## 📸 Features

- 🛒 **Shopping Cart** — Add, remove, update quantity, and clear cart
- 🔍 **Real-time Search** — Search plants by name or description instantly
- 🏷️ **Category Filter** — Filter by Air Purifying, Aromatic, Medicinal, Insect Repellent, and Low Maintenance
- 📦 **Order Summary** — Live subtotal, free shipping, and total calculation
- 🌱 **30+ Plants** across 5 categories
- 📱 **Fully Responsive** — Works on mobile, tablet, and desktop
- ⚡ **Fast Build** — Powered by Vite

---

## 🛠️ Tech Stack

| Technology | Usage |
|---|---|
| React.js | UI components and rendering |
| Redux Toolkit | Global cart state management |
| React Router DOM | Client-side navigation |
| JavaScript (ES6+) | Core logic, array methods, hooks |
| HTML & CSS | Structure and styling |
| Vite | Build tool |
| Vercel | Deployment |
| Git & GitHub | Version control |

---

## 📁 Project Structure

```
src/
├── App.jsx           # Root component with routing
├── ProductList.jsx   # Plant listing with search and filter
├── CartItem.jsx      # Cart page with order summary
├── CartSlice.jsx     # Redux slice for cart state
├── store.js          # Redux store configuration
├── AboutUs.jsx       # About section
└── *.css             # Component styles
```

---

## 🚀 Getting Started

### Prerequisites
- Node.js (v16+)
- npm

### Installation

```bash
# Clone the repository
git clone https://github.com/mitali2744/e-plantShopping.git

# Navigate into the project
cd e-plantShopping

# Install dependencies
npm install

# Start development server
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

### Build for Production

```bash
npm run build
```

---

## 🧠 Key Implementation Details

- **Delete bug fix** — removeItem reducer uses .filter() on item name (string), not object
- **Search** — .filter() on plant name and description with toLowerCase() for case-insensitive matching
- **Cart badge** — Uses .reduce() to sum all item quantities in real time
- **Add to Cart feedback** — setTimeout resets button state after 1.5s for UX feedback

---

## 👩‍💻 Author

**Mitali Brahmankar**
Electronics and Telecommunication Engineering Student
Pimpari Chinchwad College of Engineering, Pune

- 📧 mitalibrahmankar27@gmail.com
- 💼 LinkedIn: https://www.linkedin.com/in/mitali-brahmankar
- 🐙 GitHub: https://github.com/mitali2744

---

## 📄 License

This project is open source and available under the MIT License.
