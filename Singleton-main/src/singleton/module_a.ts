import { MyDatabaseMetod } from "./db/my-database-metodo"

const myDatabase = new MyDatabaseMetod;

myDatabase.add({ name: "maria", age: 22})

export { myDatabase }