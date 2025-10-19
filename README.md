# Day1TodoList 📝

A modern, feature-rich Todo List application built with TypeScript. This project demonstrates clean code practices, type safety, and a well-structured approach to building a task management system.

## 📋 Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Technology Stack](#technology-stack)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Running the Application](#running-the-application)
- [Project Structure](#project-structure)
- [Usage Guide](#usage-guide)
- [API/Functionality Documentation](#apifunctionality-documentation)
- [Code Examples](#code-examples)
- [Contributing](#contributing)
- [License](#license)
- [Author](#author)

## 🎯 Overview

Day1TodoList is a TypeScript-based task management application that helps users organize their daily tasks efficiently. The application leverages TypeScript's strong typing system to ensure code reliability and maintainability while providing a clean and intuitive interface for managing todos.

This project serves as an excellent demonstration of:
- Modern TypeScript development practices
- Type-safe code architecture
- Scalable application structure
- Clean code principles

## ✨ Features

### Core Functionality
- **Add Tasks**: Create new todo items with descriptions
- **View Tasks**: Display all tasks in an organized list
- **Update Tasks**: Modify existing task details
- **Delete Tasks**: Remove completed or unwanted tasks
- **Mark Complete**: Toggle task completion status
- **Task Filtering**: Filter tasks by status (All, Active, Completed)
- **Task Priority**: Set and manage task priorities (High, Medium, Low)
- **Due Dates**: Assign and track due dates for tasks
- **Task Categories**: Organize tasks into different categories or projects

### Technical Features
- **Type Safety**: Full TypeScript implementation for compile-time error detection
- **Data Persistence**: Local storage support for saving tasks
- **Responsive Design**: Works seamlessly across different devices
- **Validation**: Input validation to ensure data integrity
- **Error Handling**: Comprehensive error handling and user feedback

## 🛠 Technology Stack

- **TypeScript**: Primary programming language for type-safe development
- **Node.js**: Runtime environment (for CLI-based implementation)
- **HTML/CSS**: Frontend markup and styling (for web-based implementation)
- **Local Storage API**: Data persistence (for browser-based implementation)
- **ES Modules**: Modern JavaScript module system

## 🚀 Getting Started

### Prerequisites

Before you begin, ensure you have the following installed:
- **Node.js** (v14.0.0 or higher)
- **npm** (v6.0.0 or higher) or **yarn** (v1.22.0 or higher)
- **TypeScript** (v4.0.0 or higher)

You can check your versions with:
```bash
node --version
npm --version
tsc --version
```

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/Priyanshu2004-Singh/Day1TodoList.git
   cd Day1TodoList
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```
   or
   ```bash
   yarn install
   ```

3. **Compile TypeScript**
   ```bash
   npm run build
   ```
   or
   ```bash
   tsc
   ```

### Running the Application

**For Web Application:**
```bash
npm start
```
Then open your browser and navigate to `http://localhost:3000`

**For CLI Application:**
```bash
npm run start:cli
```
or
```bash
node dist/index.js
```

## 📁 Project Structure

```
Day1TodoList/
├── src/                      # Source files
│   ├── models/              # Data models and interfaces
│   │   ├── Todo.ts         # Todo item interface and class
│   │   └── TodoStatus.ts   # Status enum definitions
│   ├── services/            # Business logic layer
│   │   ├── TodoService.ts  # Todo CRUD operations
│   │   └── StorageService.ts # Data persistence
│   ├── utils/               # Utility functions
│   │   ├── validators.ts   # Input validation
│   │   └── helpers.ts      # Helper functions
│   ├── controllers/         # Application controllers
│   │   └── TodoController.ts # Main todo controller
│   └── index.ts            # Application entry point
├── dist/                    # Compiled JavaScript files
├── tests/                   # Test files
│   └── todo.test.ts        # Unit tests
├── public/                  # Static assets (for web version)
│   ├── index.html          # Main HTML file
│   ├── styles.css          # Stylesheet
│   └── app.js              # Compiled application
├── package.json             # Project dependencies and scripts
├── tsconfig.json           # TypeScript configuration
├── .gitignore              # Git ignore rules
└── README.md               # This file
```

## 📖 Usage Guide

### Adding a Todo

To add a new todo item:

1. Enter your task description in the input field
2. (Optional) Set a priority level
3. (Optional) Add a due date
4. (Optional) Assign a category
5. Click the "Add" button or press Enter

### Managing Todos

- **Mark as Complete**: Click the checkbox next to a todo item
- **Edit Todo**: Click the edit icon to modify task details
- **Delete Todo**: Click the delete icon to remove the task
- **Filter Todos**: Use the filter buttons to view All, Active, or Completed tasks

### Keyboard Shortcuts (Web Version)

- `Enter`: Add new todo
- `Escape`: Cancel editing
- `Ctrl/Cmd + D`: Delete selected todo
- `Space`: Toggle completion status

## 🔧 API/Functionality Documentation

### Todo Interface

```typescript
interface Todo {
  id: string;                    // Unique identifier
  title: string;                 // Task description
  description?: string;          // Optional detailed description
  completed: boolean;            // Completion status
  priority: Priority;            // Task priority (High, Medium, Low)
  dueDate?: Date;               // Optional due date
  category?: string;            // Optional category/project
  createdAt: Date;              // Creation timestamp
  updatedAt: Date;              // Last update timestamp
}
```

### Priority Enum

```typescript
enum Priority {
  HIGH = 'high',
  MEDIUM = 'medium',
  LOW = 'low'
}
```

### TodoService Methods

#### `addTodo(todo: TodoInput): Todo`
Creates a new todo item and adds it to the list.

**Parameters:**
- `todo`: Object containing todo details (title, description, priority, etc.)

**Returns:** The created Todo object with generated ID and timestamps

**Example:**
```typescript
const newTodo = todoService.addTodo({
  title: "Complete TypeScript project",
  priority: Priority.HIGH,
  dueDate: new Date('2025-10-20')
});
```

#### `getTodos(): Todo[]`
Retrieves all todo items.

**Returns:** Array of all Todo objects

#### `getTodoById(id: string): Todo | undefined`
Retrieves a specific todo by its ID.

**Parameters:**
- `id`: Unique identifier of the todo

**Returns:** Todo object if found, undefined otherwise

#### `updateTodo(id: string, updates: Partial<Todo>): Todo | undefined`
Updates an existing todo with new data.

**Parameters:**
- `id`: Unique identifier of the todo to update
- `updates`: Object containing fields to update

**Returns:** Updated Todo object if found, undefined otherwise

**Example:**
```typescript
todoService.updateTodo('123', {
  completed: true,
  updatedAt: new Date()
});
```

#### `deleteTodo(id: string): boolean`
Deletes a todo from the list.

**Parameters:**
- `id`: Unique identifier of the todo to delete

**Returns:** true if deleted successfully, false otherwise

#### `filterTodos(filter: FilterType): Todo[]`
Filters todos based on completion status.

**Parameters:**
- `filter`: 'all' | 'active' | 'completed'

**Returns:** Filtered array of Todo objects

#### `clearCompleted(): void`
Removes all completed todos from the list.

## 💻 Code Examples

### Example 1: Basic Todo Operations

```typescript
import { TodoService } from './services/TodoService';
import { Priority } from './models/TodoStatus';

// Initialize the service
const todoService = new TodoService();

// Add a new todo
const todo = todoService.addTodo({
  title: "Learn TypeScript",
  priority: Priority.HIGH,
  description: "Complete TypeScript fundamentals course"
});

// Get all todos
const allTodos = todoService.getTodos();
console.log(`Total todos: ${allTodos.length}`);

// Update todo
todoService.updateTodo(todo.id, {
  completed: true
});

// Filter completed todos
const completed = todoService.filterTodos('completed');
console.log(`Completed: ${completed.length}`);
```

### Example 2: Working with Categories

```typescript
// Add todos with categories
todoService.addTodo({
  title: "Write documentation",
  category: "Work",
  priority: Priority.MEDIUM
});

todoService.addTodo({
  title: "Grocery shopping",
  category: "Personal",
  priority: Priority.LOW
});

// Get todos by category
const workTodos = todoService.getTodos()
  .filter(todo => todo.category === 'Work');
```

### Example 3: Priority Management

```typescript
// Get high priority tasks
const urgentTasks = todoService.getTodos()
  .filter(todo => 
    todo.priority === Priority.HIGH && 
    !todo.completed
  );

// Sort by priority
const sortedByPriority = todoService.getTodos()
  .sort((a, b) => {
    const priorityOrder = { high: 3, medium: 2, low: 1 };
    return priorityOrder[b.priority] - priorityOrder[a.priority];
  });
```

## 🤝 Contributing

Contributions are welcome! Here's how you can help:

1. **Fork the repository**
2. **Create a feature branch**
   ```bash
   git checkout -b feature/AmazingFeature
   ```
3. **Commit your changes**
   ```bash
   git commit -m 'Add some AmazingFeature'
   ```
4. **Push to the branch**
   ```bash
   git push origin feature/AmazingFeature
   ```
5. **Open a Pull Request**

### Development Guidelines

- Follow TypeScript best practices
- Maintain type safety throughout the codebase
- Write unit tests for new features
- Update documentation for significant changes
- Follow the existing code style and conventions
- Ensure all tests pass before submitting PR

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👤 Author

**Priyanshu Singh**

- GitHub: [@Priyanshu2004-Singh](https://github.com/Priyanshu2004-Singh)
- Email: priyanshu.23SCSE1011413@galgotiasuniversity.ac.in

## 🙏 Acknowledgments

- Thanks to the TypeScript community for excellent documentation
- Inspired by modern task management applications
- Built as a learning project to master TypeScript

## 📝 Future Enhancements

- [ ] User authentication and authorization
- [ ] Cloud synchronization
- [ ] Collaborative task sharing
- [ ] Mobile application version
- [ ] Task attachments and notes
- [ ] Recurring tasks
- [ ] Task reminders and notifications
- [ ] Dark mode theme
- [ ] Export/Import functionality
- [ ] Task statistics and analytics

---

**Happy Task Managing! 🎉**

For questions or support, please open an issue in the [GitHub repository](https://github.com/Priyanshu2004-Singh/Day1TodoList/issues).
