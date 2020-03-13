export class Todo {
/* id: number; //timestamp
content: string;
isCompleted: boolean;

constructor(id: number, content: string,) {
    this.id = id;
    this.content = content;
    this.isCompleted = false;
} */
constructor(
    public id: number,
    public content: string,
    public isCompleted: boolean = false,
) {}
}