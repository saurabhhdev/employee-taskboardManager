const employees = [
  {
    "id": 1,
    "email": "employee1@example.com",
    "password": "123",
    "tasks": [
      {
        "active": true,
        "newTask": true,
        "completed": false,
        "failed": false,
        "title": "Build Login Page",
        "description": "Create a responsive login page with email and password validation.",
        "date": "2026-10-26",
        "category": "Development"
      },
      {
        "active": false,
        "newTask": false,
        "completed": true,
        "failed": false,
        "title": "Design Dashboard",
        "description": "Create a clean dashboard layout with navigation and summary cards.",
        "date": "2026-10-22",
        "category": "Design"
      },
      {
        "active": true,
        "newTask": false,
        "completed": false,
        "failed": false,
        "title": "Fix API Errors",
        "description": "Identify and resolve errors in the user authentication API.",
        "date": "2026-10-27",
        "category": "Development"
      },
      {
        "active": false,
        "newTask": false,
        "completed": true,
        "failed": false,
        "title": "Write Documentation",
        "description": "Document the project setup process and API endpoints.",
        "date": "2026-10-20",
        "category": "Documentation"
      },
      {
        "active": false,
        "newTask": false,
        "completed": false,
        "failed": true,
        "title": "Optimize Page Speed",
        "description": "Improve page loading performance and reduce unnecessary network requests.",
        "date": "2026-10-23",
        "category": "Optimization"
      }
    ]
  },
  {
    "id": 2,
    "email": "employee2@example.com",
    "password": "123",
    "tasks": [
      {
        "active": true,
        "newTask": true,
        "completed": false,
        "failed": false,
        "title": "Create Landing Page",
        "description": "Build a responsive landing page with a hero section and call-to-action buttons.",
        "date": "2026-10-26",
        "category": "Development"
      },
      {
        "active": false,
        "newTask": false,
        "completed": true,
        "failed": false,
        "title": "Prepare Wireframes",
        "description": "Prepare wireframes for the main application screens.",
        "date": "2026-10-21",
        "category": "Design"
      },
      {
        "active": true,
        "newTask": false,
        "completed": false,
        "failed": false,
        "title": "Integrate REST API",
        "description": "Connect the frontend to the backend REST API and handle responses.",
        "date": "2026-10-28",
        "category": "Development"
      },
      {
        "active": false,
        "newTask": false,
        "completed": true,
        "failed": false,
        "title": "Test Mobile Layout",
        "description": "Verify the application layout on mobile and tablet screen sizes.",
        "date": "2026-10-24",
        "category": "Testing"
      },
      {
        "active": false,
        "newTask": false,
        "completed": false,
        "failed": true,
        "title": "Update Dependencies",
        "description": "Update project dependencies and resolve compatibility issues.",
        "date": "2026-10-23",
        "category": "Maintenance"
      }
    ]
  },
  {
    "id": 3,
    "email": "employee3@example.com",
    "password": "123",
    "tasks": [
      {
        "active": true,
        "newTask": true,
        "completed": false,
        "failed": false,
        "title": "Develop User Profile",
        "description": "Create a user profile page with editable personal information.",
        "date": "2026-10-26",
        "category": "Development"
      },
      {
        "active": false,
        "newTask": false,
        "completed": true,
        "failed": false,
        "title": "Create UI Components",
        "description": "Build reusable buttons, input fields, modals, and cards.",
        "date": "2026-10-20",
        "category": "Design"
      },
      {
        "active": true,
        "newTask": false,
        "completed": false,
        "failed": false,
        "title": "Implement Form Validation",
        "description": "Add client-side validation and clear error messages to application forms.",
        "date": "2026-10-27",
        "category": "Development"
      },
      {
        "active": false,
        "newTask": false,
        "completed": true,
        "failed": false,
        "title": "Review Accessibility",
        "description": "Check keyboard navigation, labels, and accessibility improvements.",
        "date": "2026-10-22",
        "category": "Testing"
      },
      {
        "active": false,
        "newTask": false,
        "completed": false,
        "failed": true,
        "title": "Fix Responsive Issues",
        "description": "Resolve layout problems on smaller mobile screens.",
        "date": "2026-10-24",
        "category": "Maintenance"
      }
    ]
  },
  {
    "id": 4,
    "email": "employee4@example.com",
    "password": "123",
    "tasks": [
      {
        "active": true,
        "newTask": true,
        "completed": false,
        "failed": false,
        "title": "Build Reports Module",
        "description": "Create a reports page to display project activity and task summaries.",
        "date": "2026-10-26",
        "category": "Development"
      },
      {
        "active": false,
        "newTask": false,
        "completed": true,
        "failed": false,
        "title": "Design Report Cards",
        "description": "Design consistent cards for displaying report statistics.",
        "date": "2026-10-21",
        "category": "Design"
      },
      {
        "active": true,
        "newTask": false,
        "completed": false,
        "failed": false,
        "title": "Add Search Functionality",
        "description": "Implement search and filtering for records in the reports module.",
        "date": "2026-10-28",
        "category": "Development"
      },
      {
        "active": false,
        "newTask": false,
        "completed": true,
        "failed": false,
        "title": "Validate Report Data",
        "description": "Check report calculations and verify displayed totals.",
        "date": "2026-10-23",
        "category": "Testing"
      },
      {
        "active": false,
        "newTask": false,
        "completed": false,
        "failed": true,
        "title": "Export Reports",
        "description": "Implement report export functionality and resolve file generation errors.",
        "date": "2026-10-24",
        "category": "Development"
      }
    ]
  },
  {
    "id": 5,
    "email": "employee5@example.com",
    "password": "123",
    "tasks": [
      {
        "active": true,
        "newTask": true,
        "completed": false,
        "failed": false,
        "title": "Write Unit Tests",
        "description": "Create unit tests for authentication and user management functions.",
        "date": "2026-10-26",
        "category": "Testing"
      },
      {
        "active": false,
        "newTask": false,
        "completed": true,
        "failed": false,
        "title": "Test Login Flow",
        "description": "Test successful login, invalid credentials, and validation errors.",
        "date": "2026-10-21",
        "category": "Testing"
      },
      {
        "active": true,
        "newTask": false,
        "completed": false,
        "failed": false,
        "title": "Check API Security",
        "description": "Review API input validation and authentication protections.",
        "date": "2026-10-27",
        "category": "Security"
      },
      {
        "active": false,
        "newTask": false,
        "completed": true,
        "failed": false,
        "title": "Prepare Test Cases",
        "description": "Write test cases for the main application features and edge cases.",
        "date": "2026-10-22",
        "category": "Documentation"
      },
      {
        "active": false,
        "newTask": false,
        "completed": false,
        "failed": true,
        "title": "Run Regression Tests",
        "description": "Identify and investigate regressions introduced by recent code changes.",
        "date": "2026-10-24",
        "category": "Testing"
      }
    ]
  }
]


const admin = [
  {
    "id": 1,
    "email": "admin@example.com",
    "password": "123"
  }
]


export const setLocalStorage = () => {
  localStorage.setItem('employees' , JSON.stringify(employees))
  localStorage.setItem('admin' , JSON.stringify(admin))
  
}

export const getLocalStorage = () => {
  const empData = JSON.parse(localStorage.getItem('employees'))
  const adminData = JSON.parse(localStorage.getItem('admin'))
  
}