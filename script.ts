// Get elements
const inputEl = document.getElementById("todoInput");
if (!(inputEl instanceof HTMLInputElement)) {
    throw new Error("Expected #todoInput to be an <input> element");
}

const addBtnEl = document.getElementById("addBtn");
if (!(addBtnEl instanceof HTMLButtonElement)) {
    throw new Error("Expected #addBtn to be a <button> element");
}

const todoListEl = document.getElementById("todoList");
if (!(todoListEl instanceof HTMLUListElement)) {
    throw new Error("Expected #todoList to be a <ul> element");
}

const getData: HTMLInputElement = inputEl;
const btn: HTMLButtonElement = addBtnEl;
const todoList: HTMLUListElement = todoListEl;

// Helpers
const createEmptyStateItem = (): HTMLLIElement => {
    const emptyMsg = document.createElement("li");
    emptyMsg.className = "empty-state";
    emptyMsg.textContent = "No tasks yet. Add one above!";
    return emptyMsg;
};

const removeEmptyStateIfPresent = (): void => {
    const emptyState = todoList.querySelector<HTMLLIElement>(".empty-state");
    if (emptyState) {
        emptyState.remove();
    }
};

const handleClick = (): void => {
    const taskText = getData.value.trim();
    
    // Don't add empty tasks
    if (taskText === "") {
        return;
    }

    // Remove empty state if present
    removeEmptyStateIfPresent();

    // Create todo item
    const todoItem = document.createElement("li");
    todoItem.className = "todo-item";

    // Create task text span
    const todoText = document.createElement("span");
    todoText.className = "todo-text";
    todoText.textContent = taskText;

    // Create actions div
    const todoActions = document.createElement("div");
    todoActions.className = "todo-actions";

    // Create complete button
    const completeBtn = document.createElement("button");
    completeBtn.className = "btn-complete";
    completeBtn.textContent = "Complete";
    completeBtn.addEventListener("click", () => {
        todoItem.classList.toggle("completed");
        completeBtn.textContent = todoItem.classList.contains("completed") ? "Undo" : "Complete";
    });

    // Create delete button
    const deleteBtn = document.createElement("button");
    deleteBtn.className = "btn-delete";
    deleteBtn.textContent = "Delete";
    deleteBtn.addEventListener("click", () => {
        todoItem.remove();
        
        // Show empty state if no tasks left (no .todo-item elements remain)
        const remainingItem = todoList.querySelector(".todo-item");
        if (!remainingItem) {
            todoList.appendChild(createEmptyStateItem());
        }
    });

    
    todoActions.appendChild(completeBtn);
    todoActions.appendChild(deleteBtn);

    
    todoItem.appendChild(todoText);
    todoItem.appendChild(todoActions);


    todoList.appendChild(todoItem);

    
    getData.value = "";
    getData.focus();
};

btn.addEventListener("click", handleClick);

// Also allow adding task with Enter key (use keydown as keypress is deprecated)
getData.addEventListener("keydown", (e: KeyboardEvent) => {
    if (e.key === "Enter") {
        e.preventDefault();
        handleClick();
    }
});
