import { Component, OnInit } from "@angular/core";
import { Observable } from "rxjs";

@Component({
  selector: "app-observable",
  templateUrl: "./observable.component.html",
  styleUrls: ["./observable.component.scss"],
})
export class ObservableComponent implements OnInit {
  orderStatus = "";
  data: Observable<any>;
  constructor() {}

  ngOnInit(): void {}
}
