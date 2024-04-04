// Задание 1: ""Управление библиотекой книг""

// Реализуйте класс Book, представляющий книгу, со следующими свойствами и методами:

// Свойство title (название) - строка, название книги.
// Свойство author (автор) - строка, имя автора книги.
// Свойство pages (количество страниц) - число, количество страниц в книге.
// Метод displayInfo() - выводит информацию о книге (название, автор и количество страниц).

class Book {
    title = "";
    author = "";
    pages = 0;

    constructor(newTitle, newAuthor, newPages) {
        this.title = newTitle;
        this.author = newAuthor;
        this.pages = newPages;
    };

    displayInfo() {
        console.log(`Название книги: ${this.title}, автор: ${this.author}, количество страниц: ${this.pages}`);
    };
};

const book1 = new Book("Название 111111", "Автор 222222", 55);
book1.displayInfo();

// Задание 2: ""Управление списком студентов""
// Реализуйте класс Student, представляющий студента, со следующими свойствами и методами:

// Свойство name (имя) - строка, имя студента.
// Свойство age (возраст) - число, возраст студента.
// Свойство grade (класс) - строка, класс, в котором учится студент.
// Метод displayInfo() - выводит информацию о студенте (имя, возраст и класс).
// javascript

class Student {
    constructor(newName, newAge, newGrade) {
        this.name = newName;
        this.age = newAge;
        this.grade = newGrade;
    };

    displayInfo() {
        console.log(`Name: ${this.name}${"\n"}Age: ${this.age}${"\n"}Grade: ${this.grade}`);
    };
};

const student1 = new Student("John Smith", 16, "10th grade");
student1.displayInfo();

const student2 = new Student("Jane Doe", 17, "11th grade");
student2.displayInfo();


