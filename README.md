# FLAM Assignment - HR Dashboard

A modern and responsive HR Dashboard for employee management, built as part of the FLAM assignment. This application provides a comprehensive interface for managing employee data, departments, ratings, and various HR operations.

## 🚀 Live Demo

**[🔗 View Live Application](https://flam-assignment-hr-dashboard.vercel.app/)**

## 📋 Features

- ✨ **Employee Management**: Comprehensive employee data management system
- 🏢 **Department Filtering**: Filter employees by departments with dynamic selection
- ⭐ **Rating Filtering**: Filter employees by ratings with dynamic selection
- 📊 **Rating System**: Employee rating and feedback management
- 📱 **Responsive Design**: Mobile-first approach ensuring great UX across all devices
- 🌙 **Dark Mode**: Toggle between light and dark themes
- 📈 **Interactive Dashboard**: Real-time data visualization and management
- 🎨 **Modern UI**: Clean and intuitive interface built with Tailwind CSS

## 🛠️ Tech Stack

- **Frontend**: ![React](https://img.shields.io/badge/-React.js-61DAFB?logo=react&logoColor=black&style=flat-square)
- **Styling**: ![Tailwind CSS](https://img.shields.io/badge/-Tailwind_CSS-38B2AC?logo=tailwind-css&logoColor=white&style=flat-square)
- **State Management**: ![Zustand](https://img.shields.io/badge/-Zustand-FF6B6B?style=flat-square)
- **Deployment**: ![Vercel](https://img.shields.io/badge/-Vercel-000000?logo=vercel&logoColor=white&style=flat-square)
- **Icons**: ![Lucide React](https://img.shields.io/badge/-Lucide_React-F56565?style=flat-square)

## 🎨 Screenshots

### App Structure
<div align="center">
  <img width="312" height="308" alt="App folder structure" src="https://github.com/user-attachments/assets/eef105a1-c65e-451c-9d59-c24998523072" />
</div>

### Components Architecture
<div align="center">
  <img width="331" height="655" alt="Components folder structure" src="https://github.com/user-attachments/assets/3e51e9fd-a948-4689-91aa-2c256be89453" />
</div>

## 🚀 Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/Mehulposh/FLAM-Assignment---HR-Dashboard.git
   ```

2. **Change Directory:**
   ```bash
   cd FLAM-Assignment---HR-Dashboard
   ```

3. **Package Installation:**
   ```bash
   npm install
   ```

4. **Start Development Server:**
   ```bash
   npm run dev
   ```

5. **Open your browser and navigate to:**
   ```
   http://localhost:5173
   ```

## 📁 Project Structure

```
FLAM-Assignment-HR-Dashboard/
├── src/
│   ├── components/
│   │   ├── Dashboard/
│   │   ├── EmployeeList/
│   │   ├── Filters/
│   │   └── UI/
│   ├── hooks/
│   ├── store/
│   ├── utils/
│   ├── styles/
│   └── App.jsx
├── public/
├── package.json
└── README.md
```

## 🎯 Key Features

<details>
<summary>🏢 Department Management</summary>

- Dynamic department filtering system
- Multi-select functionality
- Real-time filter updates
- Mobile-responsive filter layout

</details>

<details>
<summary>⭐ Rating System</summary>

- Employee rating management
- Filter by rating ranges
- Visual rating displays
- Rating analytics and insights

</details>

<details>
<summary>📱 Responsive Design</summary>

- Mobile-first development approach
- Tablet and desktop optimization
- Touch-friendly interactions
- Seamless cross-device experience

</details>

## 🌙 Dark Mode Support

Toggle between light and dark themes with persistent user preferences:

```javascript
// Zustand store implementation
const useStore = create((set) => ({
  isDarkMode: false,
  toggleMode: () => set((state) => ({ isDarkMode: !state.isDarkMode }))
}));
```

## 🚀 Deployment

- **Live URL**: [flam-assignment-hr-dashboard.vercel.app](https://flam-assignment-hr-dashboard.vercel.app/)
- **Platform**: Vercel
- **Auto-deployment**: Enabled on push to main branch
- **Build Command**: `npm run build`

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📧 Contact & Author

**👨‍💻 Mehul Poshattiwar**

- GitHub: [@Mehulposh](https://github.com/Mehulposh)
- Project Link: [FLAM HR Dashboard](https://github.com/Mehulposh/FLAM-Assignment---HR-Dashboard)

## 📜 License

![License](https://img.shields.io/badge/license-MIT-green)

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

<div align="center">

**⭐ If you found this project helpful, please give it a star!**

[![GitHub stars](https://img.shields.io/github/stars/Mehulposh/FLAM-Assignment---HR-Dashboard?style=social)](https://github.com/Mehulposh/FLAM-Assignment---HR-Dashboard/stargazers)
[![GitHub forks](https://img.shields.io/github/forks/Mehulposh/FLAM-Assignment---HR-Dashboard?style=social)](https://github.com/Mehulposh/FLAM-Assignment---HR-Dashboard/network/members)

</div>