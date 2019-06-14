import { Injectable } from '@angular/core';

@Injectable()
export class InMemoryDataService {

  createDb() {
    let users = [
      {
      id: 1,
      firstName: "Svetlana",
      lastName: "Ivanova",
      age: 25,
      profession: "teacher"
    },
    {
      id: 2,
      firstName: "Juliya",
      lastName: "Petrova",
      age: 20,
      profession: "student"
    },
    {
      id: 3,
      firstName: "Alessia",
      lastName: "Popova",
      age: 16,
      profession: "pupil"
    }

    ];
    return {users};
  }

  constructor() { }

}