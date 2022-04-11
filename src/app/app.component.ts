import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent {
  title = "todo-angular-app";
  taskList = [];

  newItemAdded(event: any) {
    this.taskList.push({ name: event });
  }
}
