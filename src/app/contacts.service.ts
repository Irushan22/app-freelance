import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class ContactsService {
  constructor() {}

  getContacts() {
    const contactList = [
      { id: "1", contact: "09324234" },
      { id: "2", contact: "09324234" },
      { id: "3", contact: "09324234" },
    ];

    return contactList;
  }
}
