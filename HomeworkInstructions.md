# Unit 11 Assignment: Cloze Constructors!

### Overview

In this week's assignment, you will create the backend for a basic flashcard application.

The backend will essentially constitute an API that allows users to create two types of flashcards.

1. **Basic** flashcards, which have a front (*"Who was the first president of the United States?"*), and a back (*"George Washington"*).

2. **Cloze-Deleted** flashcards, which present *partial* text (*"... was the first president of the United States."*), and the full text when the user requests it (*"George Washington was the first president of the United States."*)

### Bonuses

* Write your constructors such that users can call them with or without the `new` keyword. 

  * Look up scope-safe constructors, and try to implement them. It takes only two additional lines of code.

* Create a frontend that uses your flashcard data. This front-end can be either a command-line prompt or a browser-based application.

    * When passed a basic flashcard, this program should present the front text; wait for user input; and then display the back text.

    * When passed a cloze-deleted flashcard, this program should present the partial text; wait for user input; and then display the full text.

* Write functionality to load flashcards from a JSON file.

    * You'll need to figure out how to parse and read JSON for this.

-------
### One More Thing
If you have any questions about this project or about the material we covered, the instructor and your TAs are only a Slack message away.

**Good Luck!**

---

## Copyright

Coding Boot Camp &copy; 2016. All Rights Reserved.
