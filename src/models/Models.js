// @flow
export class Place {
  name: string;
  constructor(name: string) {
    this.name = name;
  }
}

export class ToDo {
  userId: number;
  id: number;
  title: string;
  completed: boolean;

  constructor(userId: number, id: number, title: string, completed: boolean) {
    this.userId = userId;
    this.id = id;
    this.title = title;
    this.completed = completed;
  }
}
