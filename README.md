# FitIzen India - Sports Events Platform

A modern, responsive website for FitIzen India, a platform that serves as a marketplace where third-party organizers can list and promote their sports events, while users can discover and enroll in these events.

## 🏃‍♂️ Live Demo

[View Live Demo](#) - Coming Soon




## ✨ Features

- **Modern UI Design**: Clean, professional design with animations and transitions
- **Fully Responsive**: Works seamlessly on all devices (mobile, tablet, desktop)
- **Interactive Components**: 
  - Event carousel with filters
  - Testimonial slider
  - Interactive category cards
  - Smooth animations using Framer Motion
- **Dual User Paths**: Separate flows for event participants and organizers
- **Brand Identity**: Consistent use of brand colors and visual elements

## 🚀 Technologies Used

- **React**: Front-end library for building user interfaces
- **Vite**: Next generation frontend tooling
- **Tailwind CSS**: Utility-first CSS framework
- **Framer Motion**: Animation library for React
- **Swiper**: Modern mobile touch slider
- **React Icons**: Popular icon sets in React

## 🛠️ Setup & Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd fitizen-india
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Build for production**
   ```bash
   npm run build
   ```

5. **Preview production build**
   ```bash
   npm run preview
   ```

## 📂 Project Structure

```
fitizen-india/
├── public/
│   ├── manifest.json
│   └── ...
├── src/
│   ├── pages/                          # Top-level route components
│   │   ├── HomePage.jsx                # Composes the home feature
│   │   ├── EventsPage.jsx              # Composes event listing feature
│   │   └── DashboardPage.jsx
│   ├── features/
│   │   ├── eventListing/               # Feature: Event listing
│   │   │   ├── EventContainer.jsx      # Main feature logic
│   │   │   ├── EventCard.jsx           # Composed card UI (not deeply split)
│   │   │   ├── Filters.jsx             # All filters in one
│   │   │   ├── SearchBar.jsx
│   │   │   ├── EventGrid.jsx
│   │   │   ├── useEvents.js            # Custom hook
│   │   │   ├── eventApi.js             # API functions
│   │   │   └── eventSlice.js           # (Optional) local/global state
│   │   └── auth/                       # Feature: Authentication
│   │       ├── LoginForm.jsx
│   │       ├── RegisterForm.jsx
│   │       ├── authApi.js
│   │       ├── useAuth.js
│   │       └── authSlice.js
│   ├── sharedComponents/               # Truly reusable UI components
│   │   ├── Button.jsx
│   │   ├── Spinner.jsx
│   │   ├── Modal.jsx
│   │   └── forms/                      # Reusable form elements
│   │       ├── Input.jsx
│   │       ├── Select.jsx
│   │       └── DatePicker.jsx
│   ├── utils/                          # Generic helper functions
│   │   ├── formatDate.js
│   │   └── calculatePrice.js
│   ├── constants/                      # App-wide constants
│   │   ├── apiEndpoints.js
│   │   └── filterOptions.js
│   ├── dummyData/                      # Local development mock data
│   │   └── events.js
│   ├── assets/                         # Images, icons, fonts, etc.
│   │   ├── logo.svg
│   │   └── placeholder.png
│   ├── App.jsx
│   ├── index.jsx
│   └── index.css
├── index.html
├── vite.config.js
└── package.json
```

## 🔄 Migration from CRA to Vite

This project has been migrated from Create React App to Vite for better performance and development experience. See [MIGRATION.md](MIGRATION.md) for more details.

## 📝 Design Notes

- **Primary Color**: #F05736 (Vibrant orange-red)
- **Typography**: 
  - Headlines: Montserrat (Bold, Extra Bold)
  - Body Text: Inter (Regular, Medium, Semi-Bold)
- **Design Philosophy**: Clean, energetic, and professional with ample whitespace

## 🔮 Future Enhancements

- User authentication system
- Event details page
- User dashboard
- Organizer portal
- Payment integration
- Push notifications
- Mobile app version

## 📄 License

[MIT License](LICENSE)

## 👨‍💻 Author

Developed by [Your Name](#)

---

This project was created as a redesign for FitIzen India's sports event aggregation platform. 