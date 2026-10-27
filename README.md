# Employee Dashboard

A React task-management dashboard with separate admin and employee views. It uses a responsive dark interface with Blaze Orange accents. Demo data and login sessions are stored in the browser; there is no backend or database.

## Features

- Admin and employee demo login
- Admin task creation form and employee task-count table
- Employee task summaries and cards for new, active, completed, and failed tasks
- Responsive layout with keyboard-visible focus styles

## Run locally

From the project directory (where `package.json` is located):

```sh
npm install
npm run dev
```

Open the local URL shown by Vite, usually `http://localhost:5173`.

## Demo login

**Admin**

- Email: `admin@me.com`
- Password: `123`

**Employee**

- Email: `e@e.com`
- Password: `123`

Other seeded employees are listed in `src/utils/localStorage.jsx`; their password is also `123`.

## Commands

| Command | Purpose |
| --- | --- |
| `npm run dev` | Start the development server |
| `npm run build` | Create the production build |
| `npm run preview` | Preview the production build |
| `npm run lint` | Run Oxlint |

## Tech and structure

Built with React 19, Vite 8, Tailwind CSS 4, and Oxlint. The role-based view is selected in `src/App.jsx`; shared employee data is provided by `src/context/AuthProvider.jsx`, with demo records in `src/utils/localStorage.jsx`.

### Folder structure

```text
employee-dashboard/
├── public/                 # Static public assets
├── src/
│   ├── components/
│   │   ├── Auth/            # Login screen
│   │   ├── Dashboard/       # Admin and employee dashboard layouts
│   │   ├── Others/          # Header, task form, counts, admin table
│   │   └── TaskList/        # Employee task list and status cards
│   ├── context/             # Shared employee state
│   ├── utils/               # Demo data and localStorage helpers
│   ├── App.jsx              # Login and role-based view selection
│   ├── index.css            # Global theme and Tailwind entry
│   └── main.jsx             # React application entry point
├── index.html
├── package.json
└── vite.config.js
```

### Main UI components

- `src/components/Auth/Login.jsx` — login form
- `src/components/Dashboard/` — admin and employee dashboards
- `src/components/Others/` — header, task form, task counts, and admin table
- `src/components/TaskList/` — employee task list and status cards

## Login and task workflow

- The app checks the existing demo credentials and selects the admin or employee dashboard in `src/App.jsx`.
- Employee task records use `newTask`, `active`, `completed`, and `failed` status fields. Their counts are stored in each employee's `taskNumbers` object.
- The admin form assigns tasks by employee name. Task and account data are local demo data, not server-backed records.
- Log out clears the saved login session and returns to the login screen.

## Note

This is a front-end demo. Credentials are not secure, data persistence is not production-ready, and task-card action buttons do not currently update task states. Do not use real credentials or sensitive employee data.
