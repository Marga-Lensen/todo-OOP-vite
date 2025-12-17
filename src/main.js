import './style.css'
// einfach nur TodoList importieren; der hat schon TodoItem importiert
import { TodoList } from "./TodoList.js";

// HTML-Elemente - direktes getElementById (eindeutig)
const input = document.getElementById("todo-input");
const button = document.getElementById("add-btn");
const listContainer = document.getElementById("todo-list");

// TodoList erstellen
const todoList = new TodoList();

// Event Listener
button.addEventListener("click", () => {
  const text = input.value.trim();
  if (!text) {
    ////// optional: Fehlertext, aber du kannst es auch einfach returnen
    let errorMsg = document.getElementById("error-msg");
    if (!errorMsg) {
      errorMsg = document.createElement("p");
      errorMsg.id = "error-msg";
      errorMsg.style.color = "purple";
      document.body.prepend(errorMsg);
    }
    errorMsg.textContent = "🤔 Please enter text";
    ////
    return;
  }
  // bei gültigem Input: Error-Meldung entfernen
  const errorMsg = document.getElementById("error-msg");
  if (errorMsg) {
    errorMsg.remove();
  }

  todoList.add(text); // Hinzufügen
  todoList.render(listContainer); // Rendern
  input.value = ""; // Input leeren
});

// Initial rendern (Start) mit leerer Liste
todoList.render(listContainer);
