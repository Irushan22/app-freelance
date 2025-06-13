import { Component, OnInit } from "@angular/core";
import { ContactsService } from "../contacts.service";
import { Observable, of } from "rxjs";

interface Item {
  id: number;
  name: string;
  description: string;
  marks: number;
}

@Component({
  selector: "app-contacts",
  templateUrl: "./contacts.component.html",
  styleUrls: ["./contacts.component.scss"],
})
export class ContactsComponent implements OnInit {
  items: Item[] = [
    { id: 1, name: "isuru", description: "SE", marks: 67 },
    { id: 2, name: "irushan", description: "SEE", marks: 40 },
  ];
  selectedItem: Item = { id: 0, name: "", description: "", marks: 0 };

  constructor(private contactService: ContactsService) {}

  ngOnInit(): void {}

  // CREATE
  addItem() {
    console.log("Adding item:", this.selectedItem);
    const newItem = {
      ...this.selectedItem,
      id: this.items.length + 1, // Or use a better unique ID logic
    };
    this.items.push(newItem);
    this.selectedItem = { id: 0, name: "", description: "", marks: 0 }; // Reset selected item
  }
}
