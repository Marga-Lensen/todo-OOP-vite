// einfach export class Object
export class TodoItem {
  constructor(text) {
    this.text = text;
    this.done = false;
  }

  toggle() {
    this.done = !this.done;
  }
}
