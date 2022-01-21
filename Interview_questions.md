# Interview Questions

Be prepared to demonstrate your understanding of this week's concepts by answering questions on the following topics. You might prepare by writing down your own answers before hand.

1. Explain the difference between Relational Databases and SQL.
   > A **relational database** is a collection of data items with pre-defined relationships between them. These items are organized as a set of tables with columns and rows. ... Each row in a table could be marked with a unique identifier called a primary key, and rows among multiple tables can be made related using foreign keys.

   > **SQL** (Structured Query Language) is a standardized programming language that's used to manage relational databases and perform various operations on the data in them. ... Also known as SQL databases, relational systems comprise a set of tables containing data in rows and columns.   
2. Why do tables need a Primary Key?
   >  Each database table needs a **primary key** because it ensures row-level accessibility. ... The values that compose a primary key column are unique; no two values are the same. Each table has one and only one primary key, which can consist of one or many columns. A concatenated primary key comprises two or more columns.
3. What is the name given to a table column that references the Primary Key on another table?

> Is is **a foreign key** reference, that is created between two tables when the column or columns that hold the primary key value for one table are referenced by the column or columns in another table. This column becomes a foreign key in the second table.

4. What do we need in order to have a _many to many_ relationship between two tables?

> To establish a many-to-many relationship, create a third table called **"ClassStudentRelation"** which will have the primary keys of both table A and table B.
