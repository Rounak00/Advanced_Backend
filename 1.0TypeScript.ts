> npm i -D typescript ts-node
> npm i -g tsc -> Compiler for TS
> tsc init -> Gives a setup file

---------Basic function syntax-------
function greet(name: string): string { // return type and argument type
  return `Hello, ${name}!`;
}
console.log(greet("ChatGPT"));

---------All Types -------------
Basic -> number,string, boolean, [], void (for function return type), any
special -> type, interface, enum

------------Example--------------
let username: string = "John";
let age: number = 25;
let isActive: boolean = true;
let hobbies: string[] = ["reading", "coding"];
interface User {
  name: string;
  age: number;
}

const user1: User = {
  name: "Alice",
  age: 30,
};

Difference between type and interface ? -> interface can be extend with class

Symbols -> 
1. UNION -> type Status = "success" | "error" | "loading"; //any one of them
            let currentStatus: Status = "success";
2. INTERSECTION -> 
               type User = {
                name: string;
              };
              
              type Admin = {
                role: string;
              };
              
              type AdminUser = User & Admin;
              
              const person: AdminUser = { //You can think of this as: AdminUser = everything in User and everything in Admin.
                name: "Alice",
                role: "SuperAdmin",
              };
3. EXTENDS -> 
              interface Person {
                name: string;
                age: number;
              }
              interface Employee extends Person {
                employeeId: string;
              }
             // Now Employee has:name,age,employeeID
            
              const dev: Employee = {
                name: "Sam",
                age: 25,
                employeeId: "E123",
              };
4. Optional Property -> interface User {
                        name: string;
                        age?: number; // 👈 optional
                      }
                    const u1: User = { name: "Alice" };         
                    const u2: User = { name: "Bob", age: 28 };   

    TWIST THING -> 
                 age?: number;
                // is same as:
                age: number | undefined;
-------------------------------Enums use------------------------
enum Status {
  Pending,   // 0
  InProgress, // 1
  Done       // 2
}

console.log(Status.Done);       // 👉 2
console.log(Status[1]);         // 👉 "InProgress"

enum Status {
  Pending = "PENDING",
  InProgress = "IN_PROGRESS",
  Done = "DONE"
}

const taskStatus: Status = Status.InProgress;
console.log(taskStatus); // 👉 "IN_PROGRESS"
------------------Utility types----------------------
1. Partial -> 
        interface User {
          name: string;
          age: number;
        }
        
        const updateUser = (user: Partial<User>) => {
          // user can be { name: "A" }, { age: 25 }, or both
        };
2. Required -> 
    // Makes all properties required (opposite of Partial).
        interface Settings {
          darkMode?: boolean;
          fontSize?: number;
        }
        
        const strictSettings: Required<Settings> = {
          darkMode: true,
          fontSize: 16
        };
3. Readonly ->  //Makes all properties readonly (can’t change them).
              interface Book {
              title: string;
              author: string;
            }
            
            const book: Readonly<Book> = {
              title: "Atomic Habits",
              author: "James Clear"
            };
            
            // book.title = "Deep Work"; ❌ Error!
4. Pick -> //Selects a few keys from a type.
            interface Todo {
              id: number;
              title: string;
              completed: boolean;
            }
            
            type TodoPreview = Pick<Todo, "id" | "title">;
            // { id: number; title: string }
//ETC like omit,record,  notNullable, Extract , we can also combine them

