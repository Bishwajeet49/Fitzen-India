src/
├── pages/                          # Top-level route components
│   ├── HomePage.jsx                # Composes the home feature
│   ├── EventsPage.jsx              # Composes event listing feature
│   └── DashboardPage.jsx

├── features/
│   ├── eventListing/               # Feature: Event listing
│   │   ├── EventContainer.jsx      # Main feature logic
│   │   ├── EventCard.jsx           # Composed card UI (not deeply split)
│   │   ├── Filters.jsx             # All filters in one
│   │   ├── SearchBar.jsx
│   │   ├── EventGrid.jsx
│   │   ├── useEvents.js            # Custom hook
│   │   ├── eventApi.js             # API functions
│   │   └── eventSlice.js           # (Optional) local/global state

│   ├── auth/                       # Feature: Authentication
│   │   ├── LoginForm.jsx
│   │   ├── RegisterForm.jsx
│   │   ├── authApi.js
│   │   ├── useAuth.js
│   │   └── authSlice.js

├── sharedComponents/              # Truly reusable UI components
│   ├── Button.jsx
│   ├── Spinner.jsx
│   ├── Modal.jsx
│   └── forms/                     # Reusable form elements
│       ├── Input.jsx
│       ├── Select.jsx
│       └── DatePicker.jsx



├── utils/                         # Generic helper functions
│   ├── formatDate.js
│   └── calculatePrice.js

├── constants/                     # App-wide constants
│   ├── apiEndpoints.js
│   └── filterOptions.js

├── dummyData/                     # Local development mock data
│   └── events.js

├── assets/                        # Images, icons, fonts, etc.
│   ├── logo.svg
│   └── placeholder.png



