import { Component, OnInit, Output, EventEmitter } from "@angular/core";

@Component({
  selector: "app-task",
  templateUrl: "./task.component.html",
  styleUrls: ["./task.component.css"],
})
export class TaskComponent implements OnInit {
  public taskName: string;
  @Output() newItemEvent = new EventEmitter<string>();
  constructor() {}

  ngOnInit() {}

  addTask() {
    this.newItemEvent.emit(this.taskName);
    this.taskName = "";
  }
}
