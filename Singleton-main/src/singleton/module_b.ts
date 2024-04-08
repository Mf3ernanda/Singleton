import { MyDatabaseMetod } from "./db/my-database-metodo"
import { myDatabase, myDatabase as myDatabaseA } from "./module_a"

const MyDatabaseClassic = new MyDatabaseMetod;

MyDatabaseClassic.add({ name: "leandro", age: 30})
MyDatabaseClassic.add({name: "lindisy", age: 23})
MyDatabaseClassic.remove(2)
MyDatabaseClassic.show()

console.log(MyDatabaseClassic === myDatabase)

