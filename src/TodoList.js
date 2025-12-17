// einfach import TodoItem
import { TodoItem } from "./TodoItem.js";

// und hier auch schon export class TodoList
export class TodoList {
  constructor() { 
    this.items = []; 
}

  add(text) { 
    this.items.push(new TodoItem(text)); 
}

  render(container) {
    container.textContent = "";  // reset

    this.items.forEach(item => {

      const li = document.createElement("li");

      li.textContent = item.text + (item.done ? " ✓" : "");

        if (item.done) {
        li.classList.add("done");
      }

      /* abhaken */
            // Klick auf das li toggelt done
      li.addEventListener("click", () => {
        item.toggle();               // Zustand im Objekt ändern

        li.classList.add("done")  // formattierung mit schalten

        this.render(container);      // Liste neu zeichnen
      });


      container.appendChild(li);
    });
  }
}