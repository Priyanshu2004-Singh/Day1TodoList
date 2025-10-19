# Simple TODO App

A beautiful, minimal TODO list web app built with TypeScript and vanilla DOM APIs. Easily add, complete, and delete tasks with a modern UI.

## Features
- Add tasks with button or Enter key
- Mark tasks as complete/undo
- Delete tasks
- Empty state message when no tasks
- Responsive, modern design

## Project Structure
```
├── index.html         # Main HTML page
├── script.ts          # TypeScript source code
├── tsconfig.json      # TypeScript configuration
├── build/             # Compiled JS and type declarations
│   ├── script.js      # Output JavaScript
│   └── script.d.ts    # TypeScript declarations
```

## Getting Started

### Prerequisites
- Node.js and npm installed
- TypeScript installed globally or as a dev dependency

### Install TypeScript (if needed)
```bash
npm install -g typescript
```

### Build the Project
Compile TypeScript to JavaScript:
```bash
npx tsc -p tsconfig.json
tsc --watch for live typescript -> JsConversion.
```
Output files will appear in the `build/` folder.

### Run Locally
1. Open `index.html` in your browser.
2. All logic is client-side; no server needed.

## Customization
- Edit `script.ts` for logic changes
- Tweak styles in the `<style>` block of `index.html`

## TypeScript Configuration
See `tsconfig.json` for strict type checking and modern output settings.

## License
MIT
