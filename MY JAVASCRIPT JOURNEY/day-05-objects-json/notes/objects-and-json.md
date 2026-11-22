# Day 05 — Objects and JSON Basics

## Learning Objectives

The purpose of this lesson is to understand how JavaScript represents real-world things using objects, properties, and related values.

## 1. What is an Object?

An object is a collection of related data stored in key-value pairs.

Objects help us represent real-world entities such as students, products, employees, and cars.

### Properties and Values

- **Property (Key):** The name used to identify information.
- **Value:** The actual data stored in a property.

### Example

```javascript
let student = {
  name: "Ali",
  age: 20,
  course: "Software Engineering",
};
```

In this example:

| Property (Key) | Value                  |
| -------------- | ---------------------- |
| name           | "Ali"                  |
| age            | 20                     |
| course         | "Software Engineering" |

### Important Points

- Objects store related information in one variable.
- Objects use key-value pairs.
- Keys are also called properties.
- Values can have different data types.
- Objects are useful for representing real-world information.

## 2. Creating Objects with Curly Braces

JavaScript objects are created using curly braces `{}`.

### Syntax

```javascript
let objectName = {
  property1: value1,
  property2: value2,
  property3: value3,
};
```

### Example

```javascript
let student = {
  name: "Ali",
  age: 20,
  course: "Software Engineering",
  isStudent: true,
};
```

### Important Points

1. Curly braces `{}` define an object.
2. Each property follows the `key: value` format.
3. Properties are separated by commas.
4. String values are written inside quotation marks.
5. Numbers and Boolean values do not require quotation marks.

## 3. Accessing Object Properties

JavaScript provides two ways to access object properties:

### Dot Notation

```javascript
student.name;

 ## 4. Updating, Adding and Deleting Properties

- Update: Change an existing property value.
- Add: Create a new property in an object.
- Delete: Remove a property using the `delete` operator.
```

## 5. Methods Inside Objects

An object method is a function stored as a property inside an object.

### Example

````javascript
let student = {
    name: "Tahira",

    greet: function() {
        console.log("Hello!");
    }
};

student.greet();

## 6. Arrays of Objects

An array of objects is an array that stores multiple objects.

### Example

```javascript
let students = [
    { name: "Ali", age: 20 },
    { name: "Sara", age: 21 }
];
````

### Accessing Data

```javascript
students[0]; // First object
students[0].name; // First student's name
students[1].age; // Second student's age
```

### Important Points

- An array can contain multiple objects.
- Array indexing starts from `0`.
- Use the index to access an object.
- Use dot notation to access an object's property.
- Arrays of objects are useful for storing student records, products, employees, etc.

## 7. JSON — JavaScript Object Notation

### What is JSON?

JSON stands for **JavaScript Object Notation**.

JSON is a lightweight, text-based data format used to store and exchange data between applications.

**Important:** JSON is a data format, not a programming language.

### 7.1 JavaScript Object vs JSON

**JavaScript Object:**

```javascript
let student = {
  name: "Tahira Ayaz",
  age: 19,
  isStudent: true,
};
```

**JSON:**

```json
{
  "name": "Tahira Ayaz",
  "age": 19,
  "isStudent": true
}
```

### Differences

| JavaScript Object | JSON |

| Keys can be unquoted | Keys must use double quotes |
| Supports functions | Does not support functions |
| Can contain `undefined`| Does not support `undefined` |
| Used in JavaScript code | Used for data exchange |

### 7.2 JSON Syntax Rules

1. JSON stores data in key-value pairs.
2. Keys must be written inside double quotes.
3. String values must use double quotes.
4. Properties are separated by commas.
5. Trailing commas are not allowed.
6. Comments are not allowed in JSON.

### 7.3 Valid JSON Data Types

JSON supports these data types:

- String
- Number
- Boolean
- Array
- Object
- Null

Example:

```json
{
  "name": "Tahira",
  "age": 19,
  "isStudent": true,
  "skills": ["HTML", "CSS", "JavaScript"],
  "address": null
}
```

### 7.4 JSON.stringify()

`JSON.stringify()` converts a JavaScript value into a JSON string.

**Syntax:**

```javascript
JSON.stringify(value);
```

**Example:**

```javascript
let student = {
  name: "Tahira Ayaz",
  age: 19,
  course: "Software Engineering",
};

let jsonData = JSON.stringify(student);

console.log(jsonData);
console.log(typeof jsonData);
```

**Output:**

```text
{"name":"Tahira Ayaz","age":19,"course":"Software Engineering"}
string
```

**Pretty Printing:**

We can use the third argument to make JSON output easier to read.

```javascript
let jsonData = JSON.stringify(student, null, 2);

console.log(jsonData);
```

The number `2` adds indentation for better readability.

### 7.5 JSON.parse()

`JSON.parse()` converts a valid JSON string into a JavaScript value.

**Syntax:**

```javascript
JSON.parse(jsonString);
```

**Example:**

```javascript
let jsonData = '{"name":"Tahira Ayaz","age":19}';

let student = JSON.parse(jsonData);

console.log(student);
console.log(student.name);
console.log(typeof student);
```

**Output:**

```text
{name: 'Tahira Ayaz', age: 19}
Tahira Ayaz
object
```

### 7.6 JSON with Arrays and Nested Objects

JSON can contain arrays and nested objects.

```json
{
  "name": "Tahira Ayaz",
  "skills": ["HTML", "CSS", "JavaScript"],
  "education": {
    "course": "Software Engineering",
    "semester": 5
  }
}
```

### 7.7 Uses of JSON in Web Development

- Exchanging data between frontend and backend.
- Sending and receiving API data.
- Storing structured application data.
- Managing configuration settings.
- Representing product, student, and user records.

### 7.8 Common Mistakes

| Incorrect                                | Correct                              |
| ---------------------------------------- | ------------------------------------ |
| `'name': "Ali"`                          | `"name": "Ali"`                      |
| `"active": True`                         | `"active": true`                     |
| `"city": "Mirpur",` as the last property | `"city": "Mirpur"`                   |
| `undefined`                              | `null` when a null value is intended |

**Note:** Invalid JSON passed to `JSON.parse()` causes a `SyntaxError`.

### 7.9 Important Differences to Remember

| Method             | Conversion                      |
| ------------------ | ------------------------------- |
| `JSON.stringify()` | JavaScript Object → JSON String |
| `JSON.parse()`     | JSON String → JavaScript Value  |

### 7.10 Key Learning Outcomes

After completing this topic, I learned how to:

- Understand JSON and its purpose.
- Differentiate JavaScript objects from JSON.
- Follow JSON syntax rules.
- Understand valid JSON data types.
- Convert JavaScript objects into JSON strings.
- Convert JSON strings into JavaScript objects.
- Work with arrays and nested objects in JSON.
- Understand the role of JSON in frontend and backend communication.
