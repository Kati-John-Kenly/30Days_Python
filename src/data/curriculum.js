// ============================================================
// PyMaster30 — Complete 30-Day Python Curriculum Data
// ============================================================

export const curriculum = [
  {
    day: 1,
    title: "Introduction to Python",
    icon: "🚀",
    difficulty: "beginner",
    week: 1,
    estimatedTime: "1-2 hours",
    topics: ["What is Python?", "Features", "Install Python", "Your first program", "Comments"],
    description: "Welcome to your Python journey! Today you'll learn what Python is, why it's one of the most popular programming languages in the world, and write your very first program.",
    content: [
      {
        type: "text",
        title: "What is Python?",
        body: `Python is a high-level, interpreted programming language created by **Guido van Rossum** and first released in 1991. It emphasizes code readability and simplicity, making it one of the best languages for beginners.

Python is used in web development, data science, artificial intelligence, automation, scientific computing, and much more. Companies like Google, Netflix, Instagram, and Spotify all use Python extensively.`
      },
      {
        type: "text",
        title: "Why Learn Python?",
        body: `- **Easy to Learn**: Python's syntax is clean and readable, almost like English
- **Versatile**: Used in web dev, data science, AI, automation, and more
- **Huge Community**: Millions of developers and thousands of libraries
- **High Demand**: Python developers are among the highest paid in tech
- **Cross-Platform**: Runs on Windows, macOS, Linux, and more`
      },
      {
        type: "text",
        title: "Installing Python",
        body: `1. Visit [python.org](https://python.org) and download the latest version
2. Run the installer — **make sure to check "Add Python to PATH"**
3. Open your terminal/command prompt and type \`python --version\` to verify
4. You should see something like \`Python 3.12.x\``
      },
      {
        type: "code",
        title: "Your First Python Program",
        filename: "hello.py",
        code: `# This is your very first Python program!
# The print() function displays text on the screen

print("Hello, World!")
print("Welcome to the 30-Day Python Challenge!")
print("Let's learn Python together! 🐍")`,
        explanation: "The `print()` function is used to display output to the console. Text inside quotes is called a **string**. The `#` symbol creates a comment — text that Python ignores."
      },
      {
        type: "code",
        title: "Python Comments",
        filename: "comments.py",
        code: `# This is a single-line comment
# Python ignores everything after the # symbol

print("This will be printed")  # Inline comment

# Multi-line comments using multiple #
# These are useful for longer explanations
# about what your code does

"""
This is a multi-line string (docstring)
that can also serve as a multi-line comment.
It's often used to document functions and classes.
"""

print("Comments help make code readable!")`,
        explanation: "Comments are essential for making your code understandable. Use `#` for single-line comments and triple quotes `\"\"\"` for multi-line documentation strings (docstrings)."
      },
      {
        type: "tip",
        title: "Pro Tip",
        body: "Always write comments to explain *why* you're doing something, not *what* you're doing. The code itself should be clear enough to show what's happening."
      }
    ],
    exercises: [
      {
        id: "ex-1-1",
        title: "Hello, You!",
        difficulty: "easy",
        description: "Write a program that prints your name and your favorite hobby.",
        starterCode: `# Exercise: Print your name and hobby\n# Replace the text inside the quotes\n\nprint("My name is ___")\nprint("My favorite hobby is ___")`,
        solution: `# Exercise: Print your name and hobby\nprint("My name is Alex")\nprint("My favorite hobby is coding")`,
        hint: "Replace the ___ with your actual name and hobby. Keep the quotes!"
      },
      {
        id: "ex-1-2",
        title: "ASCII Art",
        difficulty: "easy",
        description: "Create a simple ASCII art using multiple print() statements.",
        starterCode: `# Exercise: Create ASCII art\n# Use print() to draw a simple shape\n\nprint("  *  ")\nprint(" *** ")\nprint("*****")\n# Add more lines to complete the tree!`,
        solution: `# A simple Christmas tree\nprint("    *    ")\nprint("   ***   ")\nprint("  *****  ")\nprint(" ******* ")\nprint("*********")\nprint("   |||   ")\nprint("   |||   ")`,
        hint: "Use spaces and asterisks (*) to create patterns. Each print() creates a new line."
      }
    ],
    quiz: [
      {
        question: "Who created Python?",
        options: ["James Gosling", "Guido van Rossum", "Dennis Ritchie", "Bjarne Stroustrup"],
        correct: 1,
        explanation: "Python was created by Guido van Rossum and was first released in 1991."
      },
      {
        question: "What does the print() function do in Python?",
        options: ["Reads user input", "Displays output to the screen", "Creates a variable", "Performs calculations"],
        correct: 1,
        explanation: "The print() function is used to display text or values to the console/screen."
      },
      {
        question: "How do you write a single-line comment in Python?",
        options: ["// This is a comment", "/* This is a comment */", "# This is a comment", "-- This is a comment"],
        correct: 2,
        explanation: "In Python, single-line comments start with the # symbol."
      },
      {
        question: "Python is an _____ language.",
        options: ["Compiled", "Interpreted", "Assembly", "Machine"],
        correct: 1,
        explanation: "Python is an interpreted language, meaning code is executed line by line by the Python interpreter."
      }
    ],
    youtubeLinks: [
      { title: "Python Tutorial for Beginners - Full Course", channel: "Programming with Mosh", url: "https://www.youtube.com/watch?v=_uQrJ0TkZlc" },
      { title: "Python Tutorial - Python Full Course for Beginners", channel: "freeCodeCamp", url: "https://www.youtube.com/watch?v=rfscVS0vtbw" },
      { title: "Python for Beginners - Learn Python in 1 Hour", channel: "Programming with Mosh", url: "https://www.youtube.com/watch?v=kqtD5dpn9C8" }
    ]
  },
  {
    day: 2,
    title: "Variables & Data Types",
    icon: "📦",
    difficulty: "beginner",
    week: 1,
    estimatedTime: "1-2 hours",
    topics: ["Variables", "Rules for naming variables", "Data Types: int, float, str, bool"],
    description: "Learn how to store and manipulate data using variables. Understand the fundamental data types in Python — integers, floats, strings, and booleans.",
    content: [
      {
        type: "text",
        title: "What are Variables?",
        body: `A **variable** is like a labeled container that stores a value. Think of it as a box with a name tag — you put something inside, and you can refer to it later by its name.

In Python, you don't need to declare the type of a variable — Python figures it out automatically! This is called **dynamic typing**.`
      },
      {
        type: "code",
        title: "Creating Variables",
        filename: "variables.py",
        code: `# Creating variables is simple in Python
name = "Alice"          # A string (text)
age = 25                # An integer (whole number)
height = 5.6            # A float (decimal number)
is_student = True       # A boolean (True/False)

# Print the variables
print("Name:", name)
print("Age:", age)
print("Height:", height)
print("Is Student:", is_student)

# You can change a variable's value anytime
age = 26
print("Next year, age will be:", age)`,
        explanation: "Variables are created using the `=` assignment operator. Python automatically determines the data type based on the value you assign."
      },
      {
        type: "text",
        title: "Variable Naming Rules",
        body: `- Must start with a letter or underscore (_)
- Can contain letters, numbers, and underscores
- **Cannot** start with a number
- **Cannot** use Python keywords (like \`if\`, \`for\`, \`while\`)
- Are case-sensitive (\`Name\` and \`name\` are different)
- Use **snake_case** for variable names (e.g., \`my_variable\`)`
      },
      {
        type: "code",
        title: "Python Data Types",
        filename: "data_types.py",
        code: `# Integer (int) - Whole numbers
count = 42
negative = -10
big_number = 1_000_000  # Underscores for readability

# Float (float) - Decimal numbers
price = 19.99
pi = 3.14159
scientific = 2.5e3  # 2500.0

# String (str) - Text
greeting = "Hello, World!"
single = 'Single quotes work too'
multiline = """This is a
multi-line string"""

# Boolean (bool) - True or False
is_active = True
is_empty = False

# Check the type of any variable with type()
print(type(count))      # <class 'int'>
print(type(price))      # <class 'float'>
print(type(greeting))   # <class 'str'>
print(type(is_active))  # <class 'bool'>`,
        explanation: "Python has four basic data types: `int` (integers), `float` (decimals), `str` (text), and `bool` (True/False). Use the `type()` function to check what type a variable is."
      },
      {
        type: "code",
        title: "Type Conversion (Casting)",
        filename: "type_conversion.py",
        code: `# Converting between types
x = "42"
y = int(x)        # String to Integer → 42
z = float(x)      # String to Float → 42.0

num = 3.7
whole = int(num)   # Float to Integer → 3 (truncates!)

age = 25
age_str = str(age) # Integer to String → "25"

# Common use case: user input is always a string
user_input = "10"
number = int(user_input)
result = number * 2
print("Double:", result)  # Output: Double: 20`,
        explanation: "Use `int()`, `float()`, `str()`, and `bool()` to convert between data types. This is called **type casting** or **type conversion**."
      }
    ],
    exercises: [
      {
        id: "ex-2-1",
        title: "Personal Info Card",
        difficulty: "easy",
        description: "Create variables to store your personal information (name, age, height, city) and print them in a formatted way.",
        starterCode: `# Create variables for your info\nname = ___\nage = ___\nheight = ___\ncity = ___\n\n# Print a personal info card\nprint("=== Personal Info Card ===")\nprint("Name:", ___)\nprint("Age:", ___)\nprint("Height:", ___, "meters")\nprint("City:", ___)`,
        solution: `name = "Alex"\nage = 25\nheight = 1.75\ncity = "New York"\n\nprint("=== Personal Info Card ===")\nprint("Name:", name)\nprint("Age:", age)\nprint("Height:", height, "meters")\nprint("City:", city)`,
        hint: "Replace ___ with appropriate values. Remember: strings need quotes, numbers don't!"
      },
      {
        id: "ex-2-2",
        title: "Type Detective",
        difficulty: "easy",
        description: "Create variables of each data type and use type() to verify them.",
        starterCode: `# Create one variable of each type\nmy_int = ___\nmy_float = ___\nmy_str = ___\nmy_bool = ___\n\n# Print the type of each\nprint(type(my_int))\nprint(type(my_float))\nprint(type(my_str))\nprint(type(my_bool))`,
        solution: `my_int = 42\nmy_float = 3.14\nmy_str = "Hello"\nmy_bool = True\n\nprint(type(my_int))    # <class 'int'>\nprint(type(my_float))  # <class 'float'>\nprint(type(my_str))    # <class 'str'>\nprint(type(my_bool))   # <class 'bool'>`,
        hint: "Use whole numbers for int, decimals for float, quotes for str, and True/False for bool."
      }
    ],
    quiz: [
      {
        question: "Which of the following is NOT a valid variable name in Python?",
        options: ["my_var", "_count", "2nd_place", "firstName"],
        correct: 2,
        explanation: "Variable names cannot start with a number. '2nd_place' is invalid."
      },
      {
        question: "What is the data type of: x = 3.14?",
        options: ["int", "str", "float", "bool"],
        correct: 2,
        explanation: "3.14 is a decimal number, which makes it a float in Python."
      },
      {
        question: "What does type('Hello') return?",
        options: ["<class 'int'>", "<class 'str'>", "<class 'float'>", "<class 'bool'>"],
        correct: 1,
        explanation: "'Hello' is text enclosed in quotes, making it a string (str)."
      },
      {
        question: "What is the result of int(3.9)?",
        options: ["4", "3", "3.9", "Error"],
        correct: 1,
        explanation: "int() truncates (removes) the decimal part. It does NOT round — 3.9 becomes 3."
      }
    ],
    youtubeLinks: [
      { title: "Variables in Python", channel: "Corey Schafer", url: "https://www.youtube.com/watch?v=k9TUPpGqYTo" },
      { title: "Python Data Types Explained", channel: "Tech With Tim", url: "https://www.youtube.com/watch?v=gCCVsvgR2KU" },
      { title: "Python Variables and Data Types", channel: "Programming with Mosh", url: "https://www.youtube.com/watch?v=_uQrJ0TkZlc&t=600" }
    ]
  },
  {
    day: 3,
    title: "Input / Output",
    icon: "⌨️",
    difficulty: "beginner",
    week: 1,
    estimatedTime: "1-2 hours",
    topics: ["input() function", "print() function", "Formatting output"],
    description: "Learn how to interact with users by getting input and displaying formatted output. Master Python's input() and print() functions.",
    content: [
      {
        type: "text",
        title: "Getting User Input",
        body: `The \`input()\` function lets you ask the user for information. It always returns a **string**, so you'll need to convert it if you want a number.`
      },
      {
        type: "code",
        title: "The input() Function",
        filename: "input_demo.py",
        code: `# Basic input - always returns a string
name = input("What is your name? ")
print("Hello,", name + "!")

# Getting numeric input - must convert from string
age = int(input("How old are you? "))
print("You'll be", age + 1, "next year!")

# Getting a float
height = float(input("Your height in meters: "))
print("Your height is", height, "meters")`,
        explanation: "The `input()` function pauses the program and waits for the user to type something. Remember: it always returns a string, so use `int()` or `float()` to convert numbers."
      },
      {
        type: "code",
        title: "Formatting Output with f-strings",
        filename: "fstrings.py",
        code: `# f-strings (formatted string literals) - the modern way!
name = "Alice"
age = 25

# Basic f-string
print(f"My name is {name} and I am {age} years old.")

# Expressions inside f-strings
print(f"Next year I'll be {age + 1}.")

# Formatting numbers
price = 49.99
print(f"The price is \${price:.2f}")

# Alignment and padding
for i in range(1, 6):
    print(f"Day {i:02d}: {'■' * i}")

# Multiple values
x, y = 10, 20
print(f"{x} + {y} = {x + y}")`,
        explanation: "f-strings (prefixed with `f`) let you embed expressions directly inside string literals using `{curly braces}`. They're the most readable way to format strings in modern Python."
      },
      {
        type: "code",
        title: "Other Formatting Methods",
        filename: "formatting.py",
        code: `name = "Bob"
score = 95.5

# Method 1: String concatenation (basic)
print("Hello, " + name + "! Score: " + str(score))

# Method 2: .format() method
print("Hello, {}! Score: {}".format(name, score))

# Method 3: % formatting (old style)
print("Hello, %s! Score: %.1f" % (name, score))

# Method 4: f-strings (recommended!)
print(f"Hello, {name}! Score: {score}")

# Escape characters
print("Line 1\\nLine 2")    # \\n = new line
print("Column1\\tColumn2")  # \\t = tab
print("She said \\"hi\\"")    # \\" = quote inside string`,
        explanation: "While Python offers multiple formatting methods, **f-strings** (Method 4) are the most modern, readable, and recommended approach."
      }
    ],
    exercises: [
      {
        id: "ex-3-1",
        title: "Simple Calculator",
        difficulty: "easy",
        description: "Create a program that asks for two numbers and displays their sum, difference, product, and quotient.",
        starterCode: `# Simple Calculator\nnum1 = float(input("Enter first number: "))\nnum2 = float(input("Enter second number: "))\n\n# Calculate and print results\nprint(f"Sum: {___}")\nprint(f"Difference: {___}")\nprint(f"Product: {___}")\nprint(f"Quotient: {___}")`,
        solution: `num1 = float(input("Enter first number: "))\nnum2 = float(input("Enter second number: "))\n\nprint(f"Sum: {num1 + num2}")\nprint(f"Difference: {num1 - num2}")\nprint(f"Product: {num1 * num2}")\nprint(f"Quotient: {num1 / num2}")`,
        hint: "Use +, -, *, and / operators inside the f-string curly braces."
      }
    ],
    quiz: [
      {
        question: "What data type does input() return?",
        options: ["int", "float", "str", "bool"],
        correct: 2,
        explanation: "input() always returns a string (str), even if the user types a number."
      },
      {
        question: "What is the output of: print(f'{5 + 3}')?",
        options: ["5 + 3", "8", "{5 + 3}", "Error"],
        correct: 1,
        explanation: "f-strings evaluate expressions inside curly braces. 5 + 3 = 8."
      },
      {
        question: "Which escape character creates a new line?",
        options: ["\\t", "\\n", "\\r", "\\b"],
        correct: 1,
        explanation: "\\n is the newline character that moves output to the next line."
      }
    ],
    youtubeLinks: [
      { title: "Python Input and Output", channel: "Corey Schafer", url: "https://www.youtube.com/watch?v=k9TUPpGqYTo" },
      { title: "Python f-strings - Everything You Need to Know", channel: "Corey Schafer", url: "https://www.youtube.com/watch?v=nghuHvKLhJA" },
      { title: "Python Print Function Explained", channel: "Tech With Tim", url: "https://www.youtube.com/watch?v=FhoASwgvZHk" }
    ]
  },
  {
    day: 4,
    title: "Operators",
    icon: "➕",
    difficulty: "beginner",
    week: 1,
    estimatedTime: "1-2 hours",
    topics: ["Arithmetic", "Assignment", "Comparison", "Logical", "Identity", "Membership"],
    description: "Master Python's operators — from basic arithmetic to logical operators that power decision-making in your programs.",
    content: [
      {
        type: "code",
        title: "Arithmetic Operators",
        filename: "arithmetic.py",
        code: `# Arithmetic Operators
a, b = 10, 3

print(f"{a} + {b} = {a + b}")   # Addition: 13
print(f"{a} - {b} = {a - b}")   # Subtraction: 7
print(f"{a} * {b} = {a * b}")   # Multiplication: 30
print(f"{a} / {b} = {a / b}")   # Division: 3.333...
print(f"{a} // {b} = {a // b}") # Floor Division: 3
print(f"{a} % {b} = {a % b}")   # Modulus (remainder): 1
print(f"{a} ** {b} = {a ** b}") # Exponentiation: 1000`,
        explanation: "Python supports all standard arithmetic operations. Note the difference between `/` (true division) and `//` (floor division which rounds down)."
      },
      {
        type: "code",
        title: "Comparison & Logical Operators",
        filename: "comparison.py",
        code: `# Comparison Operators - return True or False
x, y = 10, 20

print(x == y)   # Equal to: False
print(x != y)   # Not equal: True
print(x > y)    # Greater than: False
print(x < y)    # Less than: True
print(x >= 10)  # Greater or equal: True
print(x <= 5)   # Less or equal: False

# Logical Operators
age = 25
has_license = True

print(age >= 18 and has_license)   # True (both must be True)
print(age < 18 or has_license)     # True (at least one True)
print(not has_license)              # False (reverses boolean)

# Identity & Membership
fruits = ["apple", "banana", "cherry"]
print("apple" in fruits)           # True - membership
print("grape" not in fruits)       # True - not in list
print(x is not y)                  # True - identity check`,
        explanation: "Comparison operators compare values and return booleans. Logical operators (`and`, `or`, `not`) combine multiple conditions. `in` checks membership in collections."
      }
    ],
    exercises: [
      {
        id: "ex-4-1",
        title: "Age Checker",
        difficulty: "easy",
        description: "Write a program that checks if a person can vote (age >= 18) and can drive (has license).",
        starterCode: `age = 20\nhas_license = True\n\n# Check voting eligibility\ncan_vote = ___\nprint(f"Can vote: {can_vote}")\n\n# Check driving eligibility\ncan_drive = ___\nprint(f"Can drive: {can_drive}")`,
        solution: `age = 20\nhas_license = True\n\ncan_vote = age >= 18\nprint(f"Can vote: {can_vote}")\n\ncan_drive = age >= 16 and has_license\nprint(f"Can drive: {can_drive}")`,
        hint: "Use comparison operators (>=) and logical operators (and) to combine conditions."
      }
    ],
    quiz: [
      {
        question: "What is the result of 17 // 5?",
        options: ["3.4", "3", "4", "2"],
        correct: 1,
        explanation: "// is floor division, which rounds down to the nearest integer. 17 ÷ 5 = 3.4, floored = 3."
      },
      {
        question: "What is the result of 17 % 5?",
        options: ["3", "2", "3.4", "0"],
        correct: 1,
        explanation: "% is the modulus operator, which returns the remainder. 17 ÷ 5 = 3 remainder 2."
      },
      {
        question: "What does 'True and False' evaluate to?",
        options: ["True", "False", "Error", "None"],
        correct: 1,
        explanation: "The 'and' operator returns True only if BOTH operands are True. Since one is False, the result is False."
      }
    ],
    youtubeLinks: [
      { title: "Python Operators Tutorial", channel: "Corey Schafer", url: "https://www.youtube.com/watch?v=v5MR5JnKcZI" },
      { title: "Python Operators Explained", channel: "Programming with Mosh", url: "https://www.youtube.com/watch?v=_uQrJ0TkZlc&t=2400" }
    ]
  },
  {
    day: 5,
    title: "Conditional Statements",
    icon: "🔀",
    difficulty: "beginner",
    week: 1,
    estimatedTime: "1-2 hours",
    topics: ["if statement", "if-else", "if-elif-else", "Nested if"],
    description: "Learn to make your programs intelligent by adding decision-making capabilities with conditional statements.",
    content: [
      {
        type: "code",
        title: "If, Elif, Else",
        filename: "conditionals.py",
        code: `# Simple if statement
age = 18
if age >= 18:
    print("You are an adult!")

# if-else
temperature = 35
if temperature > 30:
    print("It's hot outside! 🌞")
else:
    print("It's comfortable outside! 😊")

# if-elif-else chain
score = 85
if score >= 90:
    grade = "A"
elif score >= 80:
    grade = "B"
elif score >= 70:
    grade = "C"
elif score >= 60:
    grade = "D"
else:
    grade = "F"
print(f"Score: {score} → Grade: {grade}")

# Nested if
age = 25
has_ticket = True
if age >= 18:
    if has_ticket:
        print("Welcome to the show! 🎬")
    else:
        print("You need a ticket!")
else:
    print("Sorry, adults only!")`,
        explanation: "Conditional statements let your program make decisions. Python uses indentation (4 spaces) to define code blocks — this is mandatory, unlike many other languages."
      }
    ],
    exercises: [
      {
        id: "ex-5-1",
        title: "Grade Calculator",
        difficulty: "easy",
        description: "Create a program that assigns letter grades based on numeric scores using if-elif-else.",
        starterCode: `score = 78\n\n# Assign a grade based on the score\nif score >= 90:\n    grade = "A"\nelif ___:\n    grade = "B"\nelif ___:\n    grade = "C"\nelse:\n    grade = "F"\n\nprint(f"Grade: {grade}")`,
        solution: `score = 78\n\nif score >= 90:\n    grade = "A"\nelif score >= 80:\n    grade = "B"\nelif score >= 70:\n    grade = "C"\nelse:\n    grade = "F"\n\nprint(f"Grade: {grade}")`,
        hint: "Each elif checks a lower score threshold."
      }
    ],
    quiz: [
      {
        question: "What keyword is used for 'otherwise if' in Python?",
        options: ["else if", "elseif", "elif", "elsif"],
        correct: 2,
        explanation: "Python uses 'elif' (short for else-if) for additional conditions."
      },
      {
        question: "How does Python define code blocks?",
        options: ["Curly braces {}", "Indentation", "Keywords", "Parentheses"],
        correct: 1,
        explanation: "Python uses indentation (typically 4 spaces) to define code blocks, not curly braces."
      }
    ],
    youtubeLinks: [
      { title: "Python If Else and Elif Statements", channel: "Corey Schafer", url: "https://www.youtube.com/watch?v=DZwmZ8Usvnk" },
      { title: "Conditional Statements in Python", channel: "Tech With Tim", url: "https://www.youtube.com/watch?v=Zp5MuPOtsSY" }
    ]
  },
  {
    day: 6,
    title: "Loops",
    icon: "🔄",
    difficulty: "beginner",
    week: 1,
    estimatedTime: "1-2 hours",
    topics: ["for loop", "while loop", "break", "continue", "pass"],
    description: "Learn to automate repetitive tasks using loops. Master for loops, while loops, and loop control statements.",
    content: [
      {
        type: "code",
        title: "For and While Loops",
        filename: "loops.py",
        code: `# For loop - iterate over a sequence
fruits = ["apple", "banana", "cherry"]
for fruit in fruits:
    print(f"I love {fruit}!")

# For loop with range()
for i in range(5):         # 0, 1, 2, 3, 4
    print(f"Count: {i}")

for i in range(1, 6):      # 1, 2, 3, 4, 5
    print(f"Step {i}")

for i in range(0, 10, 2):  # 0, 2, 4, 6, 8
    print(f"Even: {i}")

# While loop - repeat while condition is True
count = 0
while count < 5:
    print(f"While count: {count}")
    count += 1

# Loop control: break and continue
for i in range(10):
    if i == 3:
        continue  # Skip 3
    if i == 7:
        break     # Stop at 7
    print(i)      # Prints: 0, 1, 2, 4, 5, 6`,
        explanation: "`for` loops iterate over sequences. `while` loops repeat while a condition is True. `break` exits the loop, `continue` skips to the next iteration, and `pass` does nothing (placeholder)."
      }
    ],
    exercises: [
      {
        id: "ex-6-1",
        title: "Multiplication Table",
        difficulty: "easy",
        description: "Print the multiplication table for a given number (1 through 10).",
        starterCode: `number = 7\n\nfor i in range(1, 11):\n    print(f"{number} x {i} = {___}")`,
        solution: `number = 7\n\nfor i in range(1, 11):\n    print(f"{number} x {i} = {number * i}")`,
        hint: "Multiply `number` by `i` inside the f-string."
      }
    ],
    quiz: [
      {
        question: "What does range(1, 5) produce?",
        options: ["1, 2, 3, 4, 5", "1, 2, 3, 4", "0, 1, 2, 3, 4", "0, 1, 2, 3, 4, 5"],
        correct: 1,
        explanation: "range(1, 5) produces 1, 2, 3, 4. The end value (5) is exclusive."
      },
      {
        question: "What does 'break' do in a loop?",
        options: ["Skips current iteration", "Exits the loop entirely", "Pauses the loop", "Restarts the loop"],
        correct: 1,
        explanation: "'break' immediately exits the loop, stopping all further iterations."
      }
    ],
    youtubeLinks: [
      { title: "Python Loops - For and While", channel: "Corey Schafer", url: "https://www.youtube.com/watch?v=6iF8Xb7Z3wQ" },
      { title: "Python Loops Tutorial", channel: "Programming with Mosh", url: "https://www.youtube.com/watch?v=_uQrJ0TkZlc&t=4200" }
    ]
  },
  {
    day: 7,
    title: "Functions",
    icon: "⚡",
    difficulty: "beginner",
    week: 2,
    estimatedTime: "1-2 hours",
    topics: ["What is a Function?", "Defining functions", "Parameters & Arguments", "return statement"],
    description: "Functions are reusable blocks of code that perform specific tasks. Learn to write clean, organized, and reusable code.",
    content: [
      {
        type: "code",
        title: "Creating and Using Functions",
        filename: "functions.py",
        code: `# Defining a function
def greet(name):
    """Greet a person by name."""
    print(f"Hello, {name}! Welcome! 👋")

# Calling the function
greet("Alice")
greet("Bob")

# Function with return value
def add(a, b):
    """Return the sum of two numbers."""
    return a + b

result = add(5, 3)
print(f"5 + 3 = {result}")

# Default parameters
def power(base, exponent=2):
    """Calculate base raised to exponent."""
    return base ** exponent

print(power(3))      # 9 (uses default exponent=2)
print(power(3, 3))   # 27

# Multiple return values
def min_max(numbers):
    return min(numbers), max(numbers)

lo, hi = min_max([3, 1, 4, 1, 5, 9])
print(f"Min: {lo}, Max: {hi}")`,
        explanation: "Functions are defined with `def`. They can take parameters, return values, and have default arguments. The `return` statement sends a value back to the caller."
      }
    ],
    exercises: [
      {
        id: "ex-7-1",
        title: "Temperature Converter",
        difficulty: "easy",
        description: "Write functions to convert between Celsius and Fahrenheit.",
        starterCode: `def celsius_to_fahrenheit(celsius):\n    return ___\n\ndef fahrenheit_to_celsius(fahrenheit):\n    return ___\n\n# Test\nprint(celsius_to_fahrenheit(0))    # 32.0\nprint(celsius_to_fahrenheit(100))  # 212.0\nprint(fahrenheit_to_celsius(32))   # 0.0`,
        solution: `def celsius_to_fahrenheit(celsius):\n    return celsius * 9/5 + 32\n\ndef fahrenheit_to_celsius(fahrenheit):\n    return (fahrenheit - 32) * 5/9\n\nprint(celsius_to_fahrenheit(0))\nprint(celsius_to_fahrenheit(100))\nprint(fahrenheit_to_celsius(32))`,
        hint: "F = C × 9/5 + 32 and C = (F - 32) × 5/9"
      }
    ],
    quiz: [
      {
        question: "Which keyword is used to define a function in Python?",
        options: ["function", "func", "def", "define"],
        correct: 2,
        explanation: "Python uses 'def' (short for define) to create functions."
      },
      {
        question: "What does a function return if there's no return statement?",
        options: ["0", "''", "None", "False"],
        correct: 2,
        explanation: "A function without an explicit return statement returns None."
      }
    ],
    youtubeLinks: [
      { title: "Python Functions", channel: "Corey Schafer", url: "https://www.youtube.com/watch?v=9Os0o3wzS_I" },
      { title: "Python Functions Tutorial", channel: "Programming with Mosh", url: "https://www.youtube.com/watch?v=_uQrJ0TkZlc&t=5400" }
    ]
  },
  {
    day: 8,
    title: "Lists",
    icon: "📝",
    difficulty: "beginner",
    week: 2,
    estimatedTime: "1-2 hours",
    topics: ["Creating Lists", "Indexing", "Slicing", "List Methods"],
    description: "Lists are Python's most versatile data structure. Learn to store, access, and manipulate collections of data.",
    content: [
      {
        type: "code",
        title: "Working with Lists",
        filename: "lists.py",
        code: `# Creating lists
fruits = ["apple", "banana", "cherry", "date"]
numbers = [1, 2, 3, 4, 5]
mixed = [1, "hello", True, 3.14]

# Indexing (0-based)
print(fruits[0])     # "apple" (first)
print(fruits[-1])    # "date" (last)

# Slicing
print(fruits[1:3])   # ["banana", "cherry"]
print(fruits[:2])    # ["apple", "banana"]
print(fruits[2:])    # ["cherry", "date"]

# List Methods
fruits.append("elderberry")    # Add to end
fruits.insert(1, "blueberry")  # Insert at index
fruits.remove("cherry")        # Remove by value
popped = fruits.pop()          # Remove & return last
fruits.sort()                  # Sort in place
fruits.reverse()               # Reverse in place
print(len(fruits))             # Length of list
print("apple" in fruits)       # Check membership

# List comprehension (preview)
squares = [x**2 for x in range(1, 6)]
print(squares)  # [1, 4, 9, 16, 25]`,
        explanation: "Lists are ordered, mutable collections. Use square brackets `[]` to create them. Indexing starts at 0, and negative indices count from the end."
      }
    ],
    exercises: [
      {
        id: "ex-8-1",
        title: "List Manager",
        difficulty: "medium",
        description: "Create a shopping list program that can add, remove, and display items.",
        starterCode: `shopping_list = []\n\n# Add items\nshopping_list.append("milk")\nshopping_list.append("bread")\nshopping_list.append("eggs")\n\n# Print the list\nfor i, item in enumerate(shopping_list, 1):\n    print(f"{i}. {item}")`,
        solution: `shopping_list = []\n\nshopping_list.append("milk")\nshopping_list.append("bread")\nshopping_list.append("eggs")\nshopping_list.append("butter")\n\nprint("Shopping List:")\nfor i, item in enumerate(shopping_list, 1):\n    print(f"  {i}. {item}")\n\nprint(f"\\nTotal items: {len(shopping_list)}")`,
        hint: "Use .append() to add items and enumerate() for numbered output."
      }
    ],
    quiz: [
      {
        question: "What is the index of the first element in a Python list?",
        options: ["1", "0", "-1", "None"],
        correct: 1,
        explanation: "Python uses zero-based indexing. The first element is at index 0."
      },
      {
        question: "What does my_list.pop() do?",
        options: ["Adds an element", "Removes and returns the last element", "Returns the first element", "Sorts the list"],
        correct: 1,
        explanation: "pop() removes and returns the last element from the list."
      }
    ],
    youtubeLinks: [
      { title: "Python Lists - Comprehensive Tutorial", channel: "Corey Schafer", url: "https://www.youtube.com/watch?v=W8KRzm-HUcc" },
      { title: "Python Lists Explained", channel: "Tech With Tim", url: "https://www.youtube.com/watch?v=9OeznAkyQz4" }
    ]
  },
  {
    day: 9,
    title: "Tuples",
    icon: "🔒",
    difficulty: "beginner",
    week: 2,
    estimatedTime: "1-2 hours",
    topics: ["Creating Tuples", "Indexing", "Slicing", "Tuple Methods"],
    description: "Tuples are like lists but immutable — once created, they can't be changed. Learn when and why to use tuples over lists.",
    content: [
      {
        type: "code",
        title: "Working with Tuples",
        filename: "tuples.py",
        code: `# Creating tuples
coordinates = (10, 20)
colors = ("red", "green", "blue")
single = (42,)  # Note the comma for single-element tuple

# Accessing elements (same as lists)
print(colors[0])     # "red"
print(colors[-1])    # "blue"
print(colors[1:])    # ("green", "blue")

# Tuple unpacking
x, y = coordinates
print(f"x={x}, y={y}")

# Tuples are IMMUTABLE (can't change)
# colors[0] = "yellow"  # ❌ This would cause an error!

# Tuple methods
print(colors.count("red"))   # 1
print(colors.index("green")) # 1

# Tuples vs Lists - why use tuples?
# 1. Faster than lists
# 2. Protect data from accidental changes
# 3. Can be used as dictionary keys (lists can't!)

# Practical example: returning multiple values
def get_user():
    return ("Alice", 25, "alice@email.com")

name, age, email = get_user()
print(f"{name} is {age}, email: {email}")`,
        explanation: "Tuples are immutable sequences. They're great for data that shouldn't change, like coordinates, RGB colors, or database records."
      }
    ],
    exercises: [
      {
        id: "ex-9-1",
        title: "Coordinate System",
        difficulty: "easy",
        description: "Create tuples for 3D coordinates and calculate the distance between two points.",
        starterCode: `import math\n\npoint1 = (1, 2, 3)\npoint2 = (4, 6, 8)\n\n# Calculate distance\ndistance = math.sqrt(\n    (point2[0] - point1[0])**2 +\n    (point2[1] - point1[1])**2 +\n    (point2[2] - point1[2])**2\n)\nprint(f"Distance: {distance:.2f}")`,
        solution: `import math\n\npoint1 = (1, 2, 3)\npoint2 = (4, 6, 8)\n\ndistance = math.sqrt(\n    (point2[0] - point1[0])**2 +\n    (point2[1] - point1[1])**2 +\n    (point2[2] - point1[2])**2\n)\nprint(f"Distance: {distance:.2f}")`,
        hint: "Use the 3D distance formula: √((x2-x1)² + (y2-y1)² + (z2-z1)²)"
      }
    ],
    quiz: [
      {
        question: "What is the key difference between a list and a tuple?",
        options: ["Tuples are slower", "Tuples are immutable", "Tuples can only hold numbers", "Tuples are unordered"],
        correct: 1,
        explanation: "The main difference is that tuples are immutable — once created, they cannot be modified."
      },
      {
        question: "How do you create a tuple with a single element?",
        options: ["(42)", "(42,)", "[42]", "{42}"],
        correct: 1,
        explanation: "A single-element tuple requires a trailing comma: (42,). Without the comma, (42) is just an integer in parentheses."
      }
    ],
    youtubeLinks: [
      { title: "Python Tuples", channel: "Corey Schafer", url: "https://www.youtube.com/watch?v=NI26dqhs2Rk" },
      { title: "Tuples in Python", channel: "Tech With Tim", url: "https://www.youtube.com/watch?v=NI26dqhs2Rk" }
    ]
  },
  {
    day: 10,
    title: "Dictionaries",
    icon: "📖",
    difficulty: "beginner",
    week: 2,
    estimatedTime: "1-2 hours",
    topics: ["Creating Dict", "Accessing Items", "Dict Methods", "Keys, Values, Items"],
    description: "Dictionaries store data as key-value pairs, making them perfect for organized data storage and quick lookups.",
    content: [
      {
        type: "code",
        title: "Working with Dictionaries",
        filename: "dictionaries.py",
        code: `# Creating dictionaries
person = {
    "name": "Alice",
    "age": 25,
    "city": "New York",
    "hobbies": ["reading", "coding"]
}

# Accessing values
print(person["name"])          # "Alice"
print(person.get("age"))       # 25
print(person.get("email", "N/A"))  # "N/A" (default)

# Adding/Updating
person["email"] = "alice@mail.com"  # Add new key
person["age"] = 26                   # Update existing

# Dictionary methods
print(person.keys())    # All keys
print(person.values())  # All values
print(person.items())   # Key-value pairs

# Iterating
for key, value in person.items():
    print(f"  {key}: {value}")

# Removing items
del person["city"]           # Delete key
email = person.pop("email")  # Remove & return

# Dictionary comprehension
squares = {x: x**2 for x in range(1, 6)}
print(squares)  # {1: 1, 2: 4, 3: 9, 4: 16, 5: 25}`,
        explanation: "Dictionaries are unordered collections of key-value pairs. Keys must be unique and immutable (strings, numbers, tuples). Values can be anything."
      }
    ],
    exercises: [
      {
        id: "ex-10-1",
        title: "Student Database",
        difficulty: "medium",
        description: "Create a student database using dictionaries and perform various operations.",
        starterCode: `students = {}\n\n# Add students\nstudents["Alice"] = {"age": 20, "grade": "A"}\nstudents["Bob"] = {"age": 22, "grade": "B"}\n\n# Print all students\nfor name, info in students.items():\n    print(f"{name}: Age={info['age']}, Grade={info['grade']}")`,
        solution: `students = {}\n\nstudents["Alice"] = {"age": 20, "grade": "A"}\nstudents["Bob"] = {"age": 22, "grade": "B"}\nstudents["Charlie"] = {"age": 21, "grade": "A"}\n\nfor name, info in students.items():\n    print(f"{name}: Age={info['age']}, Grade={info['grade']}")`,
        hint: "Nested dictionaries let you store complex data for each student."
      }
    ],
    quiz: [
      {
        question: "How do you access a value in a dictionary?",
        options: ["dict(key)", "dict[key]", "dict.key", "dict{key}"],
        correct: 1,
        explanation: "Use square brackets with the key: dict[key] to access values."
      },
      {
        question: "What does dict.get(key, default) do if the key doesn't exist?",
        options: ["Raises an error", "Returns None", "Returns the default value", "Adds the key"],
        correct: 2,
        explanation: ".get() returns the default value if the key is not found, instead of raising a KeyError."
      }
    ],
    youtubeLinks: [
      { title: "Python Dictionaries - Detailed Tutorial", channel: "Corey Schafer", url: "https://www.youtube.com/watch?v=daefaLgNkw0" },
      { title: "Python Dictionaries", channel: "Programming with Mosh", url: "https://www.youtube.com/watch?v=_uQrJ0TkZlc&t=7200" }
    ]
  },
  {
    day: 11,
    title: "Sets",
    icon: "🔵",
    difficulty: "beginner",
    week: 2,
    estimatedTime: "1-2 hours",
    topics: ["Creating Sets", "Set Methods", "Union", "Intersection", "Difference"],
    description: "Sets are unordered collections of unique elements. Perfect for removing duplicates and performing mathematical set operations.",
    content: [
      {
        type: "code",
        title: "Working with Sets",
        filename: "sets.py",
        code: `# Creating sets
fruits = {"apple", "banana", "cherry"}
numbers = set([1, 2, 2, 3, 3, 4])  # Duplicates removed!
print(numbers)  # {1, 2, 3, 4}

# Set operations
a = {1, 2, 3, 4, 5}
b = {4, 5, 6, 7, 8}

print(a | b)    # Union: {1, 2, 3, 4, 5, 6, 7, 8}
print(a & b)    # Intersection: {4, 5}
print(a - b)    # Difference: {1, 2, 3}
print(a ^ b)    # Symmetric difference: {1, 2, 3, 6, 7, 8}

# Set methods
fruits.add("date")
fruits.discard("banana")
print("apple" in fruits)  # True

# Practical: Remove duplicates from a list
names = ["Alice", "Bob", "Alice", "Charlie", "Bob"]
unique_names = list(set(names))
print(unique_names)`,
        explanation: "Sets automatically eliminate duplicates and support mathematical set operations like union, intersection, and difference."
      }
    ],
    exercises: [
      {
        id: "ex-11-1",
        title: "Common Friends",
        difficulty: "easy",
        description: "Find common and unique friends between two people using set operations.",
        starterCode: `alice_friends = {"Bob", "Charlie", "Dave", "Eve"}\nbob_friends = {"Charlie", "Dave", "Frank", "Grace"}\n\ncommon = alice_friends & bob_friends\nprint(f"Common friends: {common}")`,
        solution: `alice_friends = {"Bob", "Charlie", "Dave", "Eve"}\nbob_friends = {"Charlie", "Dave", "Frank", "Grace"}\n\ncommon = alice_friends & bob_friends\nonly_alice = alice_friends - bob_friends\nonly_bob = bob_friends - alice_friends\nall_friends = alice_friends | bob_friends\n\nprint(f"Common: {common}")\nprint(f"Only Alice's: {only_alice}")\nprint(f"Only Bob's: {only_bob}")\nprint(f"All friends: {all_friends}")`,
        hint: "Use & for intersection, - for difference, | for union."
      }
    ],
    quiz: [
      {
        question: "What happens when you add a duplicate to a set?",
        options: ["Error", "Nothing (ignored)", "Added twice", "Replaces existing"],
        correct: 1,
        explanation: "Sets only contain unique elements. Adding a duplicate is silently ignored."
      }
    ],
    youtubeLinks: [
      { title: "Python Sets Tutorial", channel: "Corey Schafer", url: "https://www.youtube.com/watch?v=W8KRzm-HUcc" },
      { title: "Sets in Python", channel: "Tech With Tim", url: "https://www.youtube.com/watch?v=sBvaPopWOmQ" }
    ]
  },
  {
    day: 12, title: "Strings", icon: "✏️", difficulty: "beginner", week: 2, estimatedTime: "1-2 hours",
    topics: ["String Indexing", "Slicing", "String Methods", "String Formatting"],
    description: "Dive deep into string manipulation — one of the most important skills in programming.",
    content: [
      {
        type: "code", title: "String Operations", filename: "strings.py",
        code: `text = "Hello, Python World!"\n\n# Indexing & Slicing\nprint(text[0])       # "H"\nprint(text[-1])      # "!"\nprint(text[7:13])    # "Python"\nprint(text[:5])      # "Hello"\n\n# String Methods\nprint(text.upper())          # "HELLO, PYTHON WORLD!"\nprint(text.lower())          # "hello, python world!"\nprint(text.replace("World", "Universe"))\nprint(text.split(", "))      # ["Hello", "Python World!"]\nprint("  spaces  ".strip())  # "spaces"\nprint(text.find("Python"))   # 7\nprint(text.count("o"))       # 2\nprint(text.startswith("Hello")) # True\n\n# String is immutable\n# text[0] = "h"  # ❌ Error! Strings can't be changed\nnew_text = "h" + text[1:]  # ✅ Create a new string\n\n# Join\nwords = ["Python", "is", "awesome"]\nsentence = " ".join(words)\nprint(sentence)  # "Python is awesome"`,
        explanation: "Strings are immutable sequences of characters. Python provides dozens of built-in methods for string manipulation."
      }
    ],
    exercises: [{id: "ex-12-1", title: "Word Counter", difficulty: "easy", description: "Count the number of words in a sentence.", starterCode: `sentence = "Python is a great programming language"\nwords = sentence.split()\nprint(f"Word count: {len(words)}")`, solution: `sentence = "Python is a great programming language"\nwords = sentence.split()\nprint(f"Word count: {len(words)}")\nfor i, word in enumerate(words, 1):\n    print(f"  {i}. {word}")`, hint: "Use .split() to break a string into words."}],
    quiz: [{question: "Are strings mutable or immutable in Python?", options: ["Mutable", "Immutable", "Both", "Neither"], correct: 1, explanation: "Strings are immutable — you cannot change individual characters. You must create a new string."}],
    youtubeLinks: [{title: "Python Strings", channel: "Corey Schafer", url: "https://www.youtube.com/watch?v=k9TUPpGqYTo"}]
  },
  {
    day: 13, title: "String Advanced", icon: "🔤", difficulty: "intermediate", week: 3, estimatedTime: "1-2 hours",
    topics: ["Escape Characters", "Raw Strings", "f-strings", "String Operations"],
    description: "Go beyond basics with advanced string techniques including escape characters, raw strings, and powerful f-string formatting.",
    content: [
      {
        type: "code", title: "Advanced String Techniques", filename: "strings_advanced.py",
        code: "# Escape Characters\nprint(\"Line 1\\\\nLine 2\")       # Newline\nprint(\"Tab\\\\there\")             # Tab\nprint(\"She said \\\\\"hello\\\\\"\")    # Quote in string\n\n# Raw Strings (ignore escape characters)\nprint(r\"C:\\\\Users\\\\file\")  # Prints literally\n\n# Advanced f-strings\nname = \"Alice\"\npi = 3.14159265\n\n# Alignment and formatting examples\nprint(f\"Right-aligned: {'Hello':>20}\")\nprint(f\"Left-aligned: {'Hello':<20}\")\nprint(f\"Centered: {'Hello':^20}\")\nprint(f\"Pi rounded: {pi:.2f}\")\nprint(f\"With commas: {1000000:,}\")\nprint(f\"Percentage: {0.85:.0%}\")\n\n# String operations\ntext = \"python programming\"\nprint(text.title())      # Python Programming\nprint(text.capitalize()) # Python programming\nprint(text.swapcase())   # PYTHON PROGRAMMING\n\n# Check string content\nprint(\"hello123\".isalnum())   # True\nprint(\"hello\".isalpha())      # True\nprint(\"12345\".isdigit())      # True",
        explanation: "Master escape characters for special formatting, raw strings for file paths, and advanced f-string formatting for professional output."
      }
    ],
    exercises: [{id: "ex-13-1", title: "Format Report", difficulty: "medium", description: "Create a formatted report using f-strings with alignment.", starterCode: "products = [(\"Widget\", 9.99, 100), (\"Gadget\", 24.99, 50)]\n\nfor name, price, qty in products:\n    print(f\"{name:<15} ${price:>9.2f} {qty:>8}\")", solution: "products = [(\"Widget\", 9.99, 100), (\"Gadget\", 24.99, 50), (\"Doohickey\", 4.99, 200)]\n\nprint(f\"{'Product':<15} {'Price':>10} {'Qty':>8}\")\nprint(\"-\" * 35)\nfor name, price, qty in products:\n    print(f\"{name:<15} ${price:>9.2f} {qty:>8}\")", hint: "Use < for left-align, > for right-align, and .2f for 2 decimal places."}],
    quiz: [{question: "What does r'\\n' print?", options: ["A newline", "\\n", "r\\n", "Error"], correct: 1, explanation: "Raw strings (prefix r) treat backslashes as literal characters. r'\\n' prints \\n literally."}],
    youtubeLinks: [{title: "Python String Formatting - f-strings", channel: "Corey Schafer", url: "https://www.youtube.com/watch?v=nghuHvKLhJA"}]
  },
  {
    day: 14, title: "List Comprehension", icon: "📋", difficulty: "intermediate", week: 3, estimatedTime: "1-2 hours",
    topics: ["What is List Comprehension?", "Examples", "Nested List Comprehension"],
    description: "Write elegant, concise code for creating and transforming lists using Python's powerful list comprehension syntax.",
    content: [
      {
        type: "code", title: "List Comprehension", filename: "list_comp.py",
        code: `# Basic list comprehension\nsquares = [x**2 for x in range(1, 11)]\nprint(squares)  # [1, 4, 9, 16, 25, 36, 49, 64, 81, 100]\n\n# With condition (filter)\nevens = [x for x in range(20) if x % 2 == 0]\nprint(evens)  # [0, 2, 4, 6, 8, 10, 12, 14, 16, 18]\n\n# Transform + filter\nnames = ["alice", "bob", "charlie", "dave"]\nlong_names = [name.title() for name in names if len(name) > 3]\nprint(long_names)  # ["Alice", "Charlie", "Dave"]\n\n# If-else in comprehension\nlabels = ["even" if x % 2 == 0 else "odd" for x in range(5)]\nprint(labels)  # ["even", "odd", "even", "odd", "even"]\n\n# Nested list comprehension\nmatrix = [[i*j for j in range(1, 4)] for i in range(1, 4)]\n# [[1,2,3], [2,4,6], [3,6,9]]\nfor row in matrix:\n    print(row)\n\n# Flatten a matrix\nflat = [num for row in matrix for num in row]\nprint(flat)  # [1, 2, 3, 2, 4, 6, 3, 6, 9]`,
        explanation: "List comprehensions provide a concise way to create lists. They combine a for loop and optional condition into a single line."
      }
    ],
    exercises: [{id: "ex-14-1", title: "FizzBuzz Comprehension", difficulty: "medium", description: "Create a FizzBuzz list using list comprehension.", starterCode: `# Create FizzBuzz for 1-20\nfizzbuzz = [\n    "FizzBuzz" if x % 15 == 0\n    else "Fizz" if x % 3 == 0\n    else "Buzz" if x % 5 == 0\n    else x\n    for x in range(1, 21)\n]\nprint(fizzbuzz)`, solution: `fizzbuzz = [\n    "FizzBuzz" if x % 15 == 0\n    else "Fizz" if x % 3 == 0\n    else "Buzz" if x % 5 == 0\n    else x\n    for x in range(1, 21)\n]\nfor item in fizzbuzz:\n    print(item)`, hint: "Use if-else expressions inside the comprehension."}],
    quiz: [{question: "What is [x*2 for x in [1,2,3]]?", options: ["[1, 2, 3]", "[2, 4, 6]", "[1, 4, 9]", "Error"], correct: 1, explanation: "Each element is multiplied by 2: [2, 4, 6]."}],
    youtubeLinks: [{title: "Python List Comprehensions", channel: "Corey Schafer", url: "https://www.youtube.com/watch?v=3dt4OGnU5sM"}]
  },
  {
    day: 15, title: "Dictionary Comprehension", icon: "📕", difficulty: "intermediate", week: 3, estimatedTime: "1-2 hours",
    topics: ["What is Dict Comprehension?", "Examples"],
    description: "Apply the same concise syntax to create dictionaries efficiently with dictionary comprehension.",
    content: [
      {
        type: "code", title: "Dictionary Comprehension", filename: "dict_comp.py",
        code: `# Basic dictionary comprehension\nsquares = {x: x**2 for x in range(1, 6)}\nprint(squares)  # {1: 1, 2: 4, 3: 9, 4: 16, 5: 25}\n\n# With condition\neven_squares = {x: x**2 for x in range(10) if x % 2 == 0}\nprint(even_squares)  # {0: 0, 2: 4, 4: 16, 6: 36, 8: 64}\n\n# From two lists\nnames = ["Alice", "Bob", "Charlie"]\nages = [25, 30, 35]\npeople = {name: age for name, age in zip(names, ages)}\nprint(people)\n\n# Transform dictionary\nprices = {"apple": 1.5, "banana": 0.75, "cherry": 2.0}\ntax_prices = {item: round(price * 1.1, 2) for item, price in prices.items()}\nprint(tax_prices)\n\n# Swap keys and values\nswapped = {v: k for k, v in prices.items()}\nprint(swapped)`,
        explanation: "Dictionary comprehensions create dictionaries using the same concise pattern as list comprehensions, with key: value pairs."
      }
    ],
    exercises: [{id: "ex-15-1", title: "Word Length Dict", difficulty: "easy", description: "Create a dictionary mapping words to their lengths.", starterCode: `words = ["python", "is", "awesome"]\nword_lengths = {___}\nprint(word_lengths)`, solution: `words = ["python", "is", "awesome"]\nword_lengths = {word: len(word) for word in words}\nprint(word_lengths)  # {'python': 6, 'is': 2, 'awesome': 7}`, hint: "Use word as key and len(word) as value."}],
    quiz: [{question: "What is {x: x**2 for x in range(3)}?", options: ["{0: 0, 1: 1, 2: 4}", "[0, 1, 4]", "{0, 1, 4}", "Error"], correct: 0, explanation: "Dict comprehension produces {0: 0, 1: 1, 2: 4}."}],
    youtubeLinks: [{title: "Dictionary Comprehensions", channel: "Corey Schafer", url: "https://www.youtube.com/watch?v=3dt4OGnU5sM"}]
  },
  {
    day: 16, title: "File Handling", icon: "📁", difficulty: "intermediate", week: 3, estimatedTime: "1-2 hours",
    topics: ["Open, Read, Write", "Modes", "with statement", "Examples"],
    description: "Learn to read from and write to files — an essential skill for building real-world applications.",
    content: [
      {
        type: "code", title: "File Operations", filename: "file_handling.py",
        code: `# Writing to a file\nwith open("example.txt", "w") as file:\n    file.write("Hello, World!\\n")\n    file.write("Python file handling is easy!\\n")\n    file.write("Line 3\\n")\n\n# Reading entire file\nwith open("example.txt", "r") as file:\n    content = file.read()\n    print(content)\n\n# Reading line by line\nwith open("example.txt", "r") as file:\n    for line in file:\n        print(line.strip())\n\n# Appending to a file\nwith open("example.txt", "a") as file:\n    file.write("This line was appended!\\n")\n\n# Reading into a list\nwith open("example.txt", "r") as file:\n    lines = file.readlines()\n    print(f"Total lines: {len(lines)}")\n\n# File modes: 'r' read, 'w' write, 'a' append,\n# 'r+' read/write, 'b' binary mode`,
        explanation: "The `with` statement ensures files are properly closed. Use 'w' mode for writing (overwrites), 'a' for appending, and 'r' for reading."
      }
    ],
    exercises: [{id: "ex-16-1", title: "Line Counter", difficulty: "easy", description: "Count lines, words, and characters in a text file.", starterCode: `# Create a sample file first\nwith open("sample.txt", "w") as f:\n    f.write("Hello World\\nPython is great\\nI love coding")\n\n# Count lines, words, chars\nwith open("sample.txt", "r") as f:\n    content = f.read()\n    lines = content.split("\\n")\n    words = content.split()\n    print(f"Lines: {len(lines)}")\n    print(f"Words: {len(words)}")\n    print(f"Chars: {len(content)}")`, solution: `with open("sample.txt", "w") as f:\n    f.write("Hello World\\nPython is great\\nI love coding")\n\nwith open("sample.txt", "r") as f:\n    content = f.read()\n    lines = content.split("\\n")\n    words = content.split()\n    print(f"Lines: {len(lines)}")\n    print(f"Words: {len(words)}")\n    print(f"Characters: {len(content)}")`, hint: "Use .split('\\n') for lines and .split() for words."}],
    quiz: [{question: "What does the 'with' statement do when working with files?", options: ["Opens files faster", "Automatically closes the file", "Creates backup", "Encrypts the file"], correct: 1, explanation: "The 'with' statement ensures the file is properly closed even if an error occurs."}],
    youtubeLinks: [{title: "File Handling in Python", channel: "Corey Schafer", url: "https://www.youtube.com/watch?v=Uh2ebFW8OYM"}]
  },
  {
    day: 17, title: "Exception Handling", icon: "⚠️", difficulty: "intermediate", week: 3, estimatedTime: "1-2 hours",
    topics: ["try", "except", "else", "finally", "raise"],
    description: "Build robust programs that gracefully handle errors instead of crashing. Master Python's exception handling system.",
    content: [
      {
        type: "code", title: "Try-Except Blocks", filename: "exceptions.py",
        code: `# Basic try-except\ntry:\n    number = int(input("Enter a number: "))\n    result = 10 / number\n    print(f"Result: {result}")\nexcept ValueError:\n    print("That's not a valid number!")\nexcept ZeroDivisionError:\n    print("Cannot divide by zero!")\nexcept Exception as e:\n    print(f"Something went wrong: {e}")\nelse:\n    print("No errors occurred!")\nfinally:\n    print("This always runs.")\n\n# Raising exceptions\ndef set_age(age):\n    if age < 0:\n        raise ValueError("Age cannot be negative!")\n    if age > 150:\n        raise ValueError("Age is unrealistic!")\n    return age\n\ntry:\n    my_age = set_age(-5)\nexcept ValueError as e:\n    print(f"Error: {e}")`,
        explanation: "Exception handling prevents your program from crashing on errors. `try` contains risky code, `except` handles specific errors, `else` runs if no error, `finally` always runs."
      }
    ],
    exercises: [{id: "ex-17-1", title: "Safe Division", difficulty: "easy", description: "Write a function that safely divides two numbers.", starterCode: `def safe_divide(a, b):\n    try:\n        return a / b\n    except ZeroDivisionError:\n        return "Cannot divide by zero!"\n    except TypeError:\n        return "Invalid input types!"\n\nprint(safe_divide(10, 3))\nprint(safe_divide(10, 0))\nprint(safe_divide("10", 2))`, solution: `def safe_divide(a, b):\n    try:\n        return a / b\n    except ZeroDivisionError:\n        return "Cannot divide by zero!"\n    except TypeError:\n        return "Invalid input types!"\n\nprint(safe_divide(10, 3))\nprint(safe_divide(10, 0))\nprint(safe_divide("10", 2))`, hint: "Use try-except to catch ZeroDivisionError and TypeError."}],
    quiz: [{question: "Which block always executes, whether an error occurs or not?", options: ["try", "except", "else", "finally"], correct: 3, explanation: "The 'finally' block always executes, regardless of whether an exception occurred."}],
    youtubeLinks: [{title: "Python Exception Handling", channel: "Corey Schafer", url: "https://www.youtube.com/watch?v=NIWwJbo-9_8"}]
  },
  {
    day: 18, title: "Modules & Packages", icon: "📦", difficulty: "intermediate", week: 3, estimatedTime: "1-2 hours",
    topics: ["What is a Module?", "Import Module", "Built-in Modules", "Creating your own Module"],
    description: "Organize your code with modules and packages. Learn to use Python's vast standard library and create your own reusable modules.",
    content: [
      {
        type: "code", title: "Using Modules", filename: "modules.py",
        code: `# Importing modules\nimport math\nprint(math.pi)        # 3.14159...\nprint(math.sqrt(16))  # 4.0\n\n# Import specific items\nfrom random import randint, choice\nprint(randint(1, 100))          # Random number 1-100\nprint(choice(["a", "b", "c"])) # Random choice\n\n# Import with alias\nimport datetime as dt\nnow = dt.datetime.now()\nprint(f"Today: {now.strftime('%Y-%m-%d')}")\n\n# Useful built-in modules\nimport os\nimport json\nimport sys\n\nprint(os.getcwd())        # Current directory\nprint(sys.platform)       # Operating system\nprint(sys.version)        # Python version\n\n# Creating your own module:\n# Save functions in a .py file (e.g., mymodule.py)\n# Then import: from mymodule import my_function`,
        explanation: "Modules are Python files containing functions, classes, and variables. Python's standard library includes hundreds of useful modules."
      }
    ],
    exercises: [{id: "ex-18-1", title: "Random Quote", difficulty: "easy", description: "Use the random module to display a random quote.", starterCode: `import random\n\nquotes = [\n    "Code is like humor. When you have to explain it, it's bad.",\n    "First, solve the problem. Then, write the code.",\n    "Experience is the name everyone gives to their mistakes.",\n]\n\nprint(random.choice(quotes))`, solution: `import random\n\nquotes = [\n    "Code is like humor. When you have to explain it, it's bad.",\n    "First, solve the problem. Then, write the code.",\n    "Experience is the name everyone gives to their mistakes.",\n    "In order to be irreplaceable, one must always be different.",\n]\n\nprint("💡 Quote of the moment:")\nprint(f"  \\"{random.choice(quotes)}\\"")`, hint: "Use random.choice() to pick a random item from a list."}],
    quiz: [{question: "What is the correct way to import just 'sqrt' from the math module?", options: ["import sqrt from math", "from math import sqrt", "import math.sqrt", "math import sqrt"], correct: 1, explanation: "The syntax is 'from module import item'."}],
    youtubeLinks: [{title: "Python Modules", channel: "Corey Schafer", url: "https://www.youtube.com/watch?v=CqvZ3vGoGs0"}]
  },
  {
    day: 19, title: "Object Oriented Programming (OOP) Part 1", icon: "🏗️", difficulty: "advanced", week: 4, estimatedTime: "2 hours",
    topics: ["Class & Object", "Attributes", "Methods"],
    description: "Enter the world of Object-Oriented Programming. Learn to create classes and objects — the foundation of modern software design.",
    content: [
      {
        type: "code", title: "Classes and Objects", filename: "oop_basics.py",
        code: `# Defining a class\nclass Dog:\n    # Class attribute (shared by all instances)\n    species = "Canis familiaris"\n    \n    # Constructor (initializer)\n    def __init__(self, name, age, breed):\n        # Instance attributes (unique to each object)\n        self.name = name\n        self.age = age\n        self.breed = breed\n    \n    # Instance method\n    def bark(self):\n        return f"{self.name} says: Woof! 🐕"\n    \n    def description(self):\n        return f"{self.name} is a {self.age}-year-old {self.breed}"\n    \n    # String representation\n    def __str__(self):\n        return f"Dog({self.name}, {self.breed})"\n\n# Creating objects (instances)\ndog1 = Dog("Buddy", 3, "Golden Retriever")\ndog2 = Dog("Max", 5, "German Shepherd")\n\nprint(dog1.bark())         # "Buddy says: Woof! 🐕"\nprint(dog2.description())  # "Max is a 5-year-old German Shepherd"\nprint(dog1.species)        # "Canis familiaris"\nprint(dog1)                # "Dog(Buddy, Golden Retriever)"`,
        explanation: "A class is a blueprint for creating objects. `__init__` is the constructor that runs when you create a new object. `self` refers to the current instance."
      }
    ],
    exercises: [{id: "ex-19-1", title: "Bank Account Class", difficulty: "medium", description: "Create a BankAccount class with deposit and withdraw methods.", starterCode: `class BankAccount:\n    def __init__(self, owner, balance=0):\n        self.owner = owner\n        self.balance = balance\n    \n    def deposit(self, amount):\n        self.balance += amount\n        print(f"Deposited \${amount}. Balance: \${self.balance}")\n    \n    def withdraw(self, amount):\n        if amount > self.balance:\n            print("Insufficient funds!")\n        else:\n            self.balance -= amount\n            print(f"Withdrew \${amount}. Balance: \${self.balance}")\n\naccount = BankAccount("Alice", 1000)\naccount.deposit(500)\naccount.withdraw(200)`, solution: `class BankAccount:\n    def __init__(self, owner, balance=0):\n        self.owner = owner\n        self.balance = balance\n    \n    def deposit(self, amount):\n        self.balance += amount\n        print(f"Deposited \${amount}. Balance: \${self.balance}")\n    \n    def withdraw(self, amount):\n        if amount > self.balance:\n            print("Insufficient funds!")\n        else:\n            self.balance -= amount\n            print(f"Withdrew \${amount}. Balance: \${self.balance}")\n    \n    def __str__(self):\n        return f"Account({self.owner}: \${self.balance})"\n\naccount = BankAccount("Alice", 1000)\naccount.deposit(500)\naccount.withdraw(200)\nprint(account)`, hint: "Use self.balance to track the current balance."}],
    quiz: [{question: "What does 'self' refer to in a class method?", options: ["The class itself", "The current instance/object", "The parent class", "A global variable"], correct: 1, explanation: "'self' refers to the specific instance of the class that the method is called on."}],
    youtubeLinks: [{title: "Python OOP Tutorial 1 - Classes and Instances", channel: "Corey Schafer", url: "https://www.youtube.com/watch?v=ZDa-Z5JzLYM"}]
  },
  {
    day: 20, title: "OOP Part 2", icon: "🔧", difficulty: "advanced", week: 4, estimatedTime: "2 hours",
    topics: ["Constructor (__init__)", "Self", "Instance Variables", "Class Variables"],
    description: "Deepen your OOP knowledge with constructors, instance vs class variables, and the 'self' parameter.",
    content: [
      {
        type: "code", title: "Constructors and Variables", filename: "oop_part2.py",
        code: `class Employee:\n    # Class variable - shared by ALL instances\n    company = "TechCorp"\n    employee_count = 0\n    raise_rate = 1.05  # 5% raise\n    \n    def __init__(self, first, last, salary):\n        # Instance variables - unique to each instance\n        self.first = first\n        self.last = last\n        self.salary = salary\n        self.email = f"{first.lower()}.{last.lower()}@company.com"\n        Employee.employee_count += 1\n    \n    @property\n    def fullname(self):\n        return f"{self.first} {self.last}"\n    \n    def apply_raise(self):\n        self.salary = int(self.salary * self.raise_rate)\n    \n    @classmethod\n    def set_raise_rate(cls, rate):\n        cls.raise_rate = rate\n    \n    @staticmethod\n    def is_workday(day):\n        return day.weekday() < 5\n\nemp1 = Employee("Alice", "Smith", 70000)\nemp2 = Employee("Bob", "Jones", 80000)\n\nprint(emp1.fullname)          # Alice Smith\nprint(emp1.email)             # alice.smith@company.com\nprint(Employee.employee_count) # 2`,
        explanation: "Class variables are shared across all instances. Instance variables are unique to each object. @classmethod and @staticmethod are special method types."
      }
    ],
    exercises: [{id: "ex-20-1", title: "Student Class", difficulty: "medium", description: "Create a Student class that tracks the total number of students.", starterCode: `class Student:\n    total_students = 0\n    \n    def __init__(self, name, grade):\n        self.name = name\n        self.grade = grade\n        Student.total_students += 1\n\ns1 = Student("Alice", "A")\ns2 = Student("Bob", "B")\nprint(f"Total students: {Student.total_students}")`, solution: `class Student:\n    total_students = 0\n    \n    def __init__(self, name, grade):\n        self.name = name\n        self.grade = grade\n        Student.total_students += 1\n    \n    def __str__(self):\n        return f"{self.name} (Grade: {self.grade})"\n\ns1 = Student("Alice", "A")\ns2 = Student("Bob", "B")\ns3 = Student("Charlie", "A")\nprint(f"Total students: {Student.total_students}")`, hint: "Increment the class variable in __init__."}],
    quiz: [{question: "What is the difference between a class variable and an instance variable?", options: ["No difference", "Class vars are shared, instance vars are unique", "Instance vars are shared, class vars are unique", "Class vars are faster"], correct: 1, explanation: "Class variables are shared by all instances, while instance variables are unique to each instance."}],
    youtubeLinks: [{title: "Python OOP Tutorial 2 - Class Variables", channel: "Corey Schafer", url: "https://www.youtube.com/watch?v=BJ-VvGyQxho"}]
  },
  {
    day: 21, title: "OOP Part 3", icon: "🧬", difficulty: "advanced", week: 4, estimatedTime: "2 hours",
    topics: ["Inheritance", "Types of Inheritance", "super() function"],
    description: "Learn inheritance — one of the four pillars of OOP. Create hierarchies of classes that share behavior.",
    content: [
      {
        type: "code", title: "Inheritance", filename: "oop_inheritance.py",
        code: `# Base/Parent class\nclass Animal:\n    def __init__(self, name, sound):\n        self.name = name\n        self.sound = sound\n    \n    def speak(self):\n        return f"{self.name} says {self.sound}!"\n    \n    def __str__(self):\n        return f"Animal: {self.name}"\n\n# Child class - inherits from Animal\nclass Dog(Animal):\n    def __init__(self, name, breed):\n        super().__init__(name, "Woof")  # Call parent constructor\n        self.breed = breed\n    \n    def fetch(self):\n        return f"{self.name} fetches the ball! 🎾"\n\nclass Cat(Animal):\n    def __init__(self, name, indoor=True):\n        super().__init__(name, "Meow")\n        self.indoor = indoor\n    \n    def purr(self):\n        return f"{self.name} purrs... 😺"\n\n# Using inheritance\ndog = Dog("Buddy", "Golden Retriever")\ncat = Cat("Whiskers")\n\nprint(dog.speak())    # Inherited method\nprint(dog.fetch())    # Dog-specific method\nprint(cat.speak())    # Inherited method\nprint(cat.purr())     # Cat-specific method\n\n# Check inheritance\nprint(isinstance(dog, Dog))      # True\nprint(isinstance(dog, Animal))   # True\nprint(issubclass(Dog, Animal))   # True`,
        explanation: "Inheritance lets you create new classes based on existing ones. The child class inherits all methods and attributes from the parent, and can add its own. `super()` calls the parent's methods."
      }
    ],
    exercises: [{id: "ex-21-1", title: "Vehicle Hierarchy", difficulty: "medium", description: "Create a Vehicle base class and Car/Motorcycle child classes.", starterCode: `class Vehicle:\n    def __init__(self, make, model, year):\n        self.make = make\n        self.model = model\n        self.year = year\n\nclass Car(Vehicle):\n    def __init__(self, make, model, year, doors=4):\n        super().__init__(make, model, year)\n        self.doors = doors\n\ncar = Car("Toyota", "Camry", 2024)\nprint(f"{car.year} {car.make} {car.model} ({car.doors} doors)")`, solution: `class Vehicle:\n    def __init__(self, make, model, year):\n        self.make = make\n        self.model = model\n        self.year = year\n    \n    def __str__(self):\n        return f"{self.year} {self.make} {self.model}"\n\nclass Car(Vehicle):\n    def __init__(self, make, model, year, doors=4):\n        super().__init__(make, model, year)\n        self.doors = doors\n\nclass Motorcycle(Vehicle):\n    def __init__(self, make, model, year, cc):\n        super().__init__(make, model, year)\n        self.cc = cc\n\ncar = Car("Toyota", "Camry", 2024)\nbike = Motorcycle("Harley", "Sportster", 2023, 883)\nprint(car)\nprint(bike)`, hint: "Use super().__init__() to call the parent constructor."}],
    quiz: [{question: "What does super() do?", options: ["Creates a superclass", "Calls the parent class methods", "Deletes the parent class", "Makes the class abstract"], correct: 1, explanation: "super() is used to call methods from the parent (super) class, typically used in __init__ to initialize parent attributes."}],
    youtubeLinks: [{title: "Python OOP Tutorial 4 - Inheritance", channel: "Corey Schafer", url: "https://www.youtube.com/watch?v=RSl87lqOXDE"}]
  },
  {
    day: 22, title: "OOP Part 4", icon: "🎭", difficulty: "advanced", week: 4, estimatedTime: "2 hours",
    topics: ["Polymorphism", "Method Overloading (Concept)", "Method Overriding"],
    description: "Complete your OOP mastery with polymorphism — the ability of objects to take many forms.",
    content: [
      {
        type: "code", title: "Polymorphism", filename: "oop_polymorphism.py",
        code: `# Polymorphism - same interface, different behavior\nclass Shape:\n    def area(self):\n        raise NotImplementedError("Subclass must implement")\n    \n    def __str__(self):\n        return f"{self.__class__.__name__}: area = {self.area():.2f}"\n\nclass Circle(Shape):\n    def __init__(self, radius):\n        self.radius = radius\n    \n    def area(self):  # Override parent method\n        return 3.14159 * self.radius ** 2\n\nclass Rectangle(Shape):\n    def __init__(self, width, height):\n        self.width = width\n        self.height = height\n    \n    def area(self):  # Override parent method\n        return self.width * self.height\n\nclass Triangle(Shape):\n    def __init__(self, base, height):\n        self.base = base\n        self.height = height\n    \n    def area(self):\n        return 0.5 * self.base * self.height\n\n# Polymorphism in action\nshapes = [Circle(5), Rectangle(4, 6), Triangle(3, 8)]\nfor shape in shapes:\n    print(shape)  # Each calls its own area() method`,
        explanation: "Polymorphism allows objects of different classes to be treated through the same interface. Each class implements its own version of the method."
      }
    ],
    exercises: [{id: "ex-22-1", title: "Shape Calculator", difficulty: "medium", description: "Extend the Shape hierarchy with a Square class.", starterCode: `# Add a Square class that inherits from Rectangle`, solution: `class Square(Rectangle):\n    def __init__(self, side):\n        super().__init__(side, side)`, hint: "A Square is just a Rectangle with equal width and height."}],
    quiz: [{question: "What is polymorphism?", options: ["Having many attributes", "Objects taking many forms/behaviors", "Multiple inheritance", "Method hiding"], correct: 1, explanation: "Polymorphism means 'many forms' — the same method name can have different implementations in different classes."}],
    youtubeLinks: [{title: "Python OOP - Polymorphism", channel: "Tech With Tim", url: "https://www.youtube.com/watch?v=XKu_71Yq2KA"}]
  },
  {
    day: 23, title: "Date & Time", icon: "📅", difficulty: "advanced", week: 4, estimatedTime: "1-2 hours",
    topics: ["datetime module", "date", "time", "strftime()", "timedelta"],
    description: "Work with dates, times, and time differences using Python's datetime module.",
    content: [
      {
        type: "code", title: "Date & Time", filename: "datetime_demo.py",
        code: `from datetime import datetime, date, time, timedelta\n\n# Current date and time\nnow = datetime.now()\nprint(f"Now: {now}")\nprint(f"Date: {now.date()}")\nprint(f"Time: {now.time()}")\nprint(f"Year: {now.year}, Month: {now.month}, Day: {now.day}")\n\n# Formatting dates\nprint(now.strftime("%B %d, %Y"))    # October 01, 2024\nprint(now.strftime("%I:%M %p"))     # 02:30 PM\nprint(now.strftime("%Y-%m-%d"))     # 2024-10-01\n\n# Timedelta - date arithmetic\ntomorrow = now + timedelta(days=1)\nnext_week = now + timedelta(weeks=1)\nprint(f"Tomorrow: {tomorrow.strftime('%Y-%m-%d')}")\nprint(f"Next week: {next_week.strftime('%Y-%m-%d')}")\n\n# Date difference\nbirthday = datetime(2000, 6, 15)\nage_days = (now - birthday).days\nprint(f"You've been alive for {age_days:,} days!")`,
        explanation: "The datetime module provides classes for working with dates and times. Use strftime() for formatting and timedelta for date arithmetic."
      }
    ],
    exercises: [{id: "ex-23-1", title: "Age Calculator", difficulty: "easy", description: "Calculate your exact age in years, months, and days.", starterCode: `from datetime import datetime\n\nbirthday = datetime(2000, 1, 15)\nnow = datetime.now()\ndiff = now - birthday\nprint(f"You are {diff.days // 365} years old")`, solution: `from datetime import datetime\n\nbirthday = datetime(2000, 1, 15)\nnow = datetime.now()\ndiff = now - birthday\nyears = diff.days // 365\nremaining_days = diff.days % 365\nmonths = remaining_days // 30\ndays = remaining_days % 30\nprint(f"You are {years} years, {months} months, and {days} days old")`, hint: "Use integer division (//) and modulus (%) to break down the days."}],
    quiz: [{question: "What method formats a datetime object as a string?", options: ["format()", "str()", "strftime()", "to_string()"], correct: 2, explanation: "strftime() (string format time) converts a datetime object to a formatted string."}],
    youtubeLinks: [{title: "Python datetime Module", channel: "Corey Schafer", url: "https://www.youtube.com/watch?v=eirjjyP2qcQ"}]
  },
  {
    day: 24, title: "Regular Expressions", icon: "🔍", difficulty: "advanced", week: 4, estimatedTime: "2 hours",
    topics: ["re module", "Patterns", "Search", "Findall", "Sub"],
    description: "Master pattern matching with regular expressions — a powerful tool for text processing and validation.",
    content: [
      {
        type: "code", title: "Regular Expressions", filename: "regex.py",
        code: `import re\n\ntext = "Contact us at support@email.com or sales@company.org"\n\n# Search - find first match\nmatch = re.search(r'\\w+@\\w+\\.\\w+', text)\nif match:\n    print(f"Found: {match.group()}")  # support@email.com\n\n# Findall - find all matches\nemails = re.findall(r'\\w+@\\w+\\.\\w+', text)\nprint(f"All emails: {emails}")\n\n# Sub - replace patterns\ncleaned = re.sub(r'\\d+', '#', "Call 123-456-7890")\nprint(cleaned)  # "Call #-#-#"\n\n# Common patterns\nphone = re.match(r'\\d{3}-\\d{3}-\\d{4}', "123-456-7890")\nprint(f"Valid phone: {bool(phone)}")  # True\n\n# Pattern flags\nresult = re.findall(r'python', 'Python PYTHON python', re.IGNORECASE)\nprint(result)  # ['Python', 'PYTHON', 'python']`,
        explanation: "Regular expressions (regex) are powerful patterns for searching, matching, and manipulating text. The re module provides all regex functionality in Python."
      }
    ],
    exercises: [{id: "ex-24-1", title: "Email Validator", difficulty: "medium", description: "Write a regex pattern to validate email addresses.", starterCode: `import re\n\ndef is_valid_email(email):\n    pattern = r'^[\\w.+-]+@[\\w-]+\\.[\\w.]+$'\n    return bool(re.match(pattern, email))\n\nprint(is_valid_email("user@example.com"))  # True\nprint(is_valid_email("invalid@"))           # False`, solution: `import re\n\ndef is_valid_email(email):\n    pattern = r'^[\\w.+-]+@[\\w-]+\\.[\\w.]+$'\n    return bool(re.match(pattern, email))\n\ntests = ["user@example.com", "name@co.uk", "invalid@", "@missing.com"]\nfor email in tests:\n    print(f"{email}: {is_valid_email(email)}")`, hint: "Use \\w for word characters, + for one or more, and $ for end of string."}],
    quiz: [{question: "What does \\d match in regex?", options: ["Any letter", "Any digit", "Any whitespace", "Any character"], correct: 1, explanation: "\\d matches any digit (0-9) in regular expressions."}],
    youtubeLinks: [{title: "Python Regular Expressions", channel: "Corey Schafer", url: "https://www.youtube.com/watch?v=K8L6KVGG-7o"}]
  },
  {
    day: 25, title: "Working with JSON", icon: "📋", difficulty: "advanced", week: 5, estimatedTime: "1-2 hours",
    topics: ["What is JSON?", "Parse JSON", "Convert Python to JSON"],
    description: "Learn to work with JSON — the most popular data format for APIs and web services.",
    content: [
      {
        type: "code", title: "JSON in Python", filename: "json_demo.py",
        code: `import json\n\n# Python dict to JSON string\nperson = {\n    "name": "Alice",\n    "age": 25,\n    "hobbies": ["reading", "coding"],\n    "address": {\n        "city": "NYC",\n        "zip": "10001"\n    }\n}\n\n# Convert to JSON string\njson_string = json.dumps(person, indent=2)\nprint(json_string)\n\n# JSON string to Python dict\nparsed = json.loads(json_string)\nprint(parsed["name"])  # "Alice"\n\n# Write JSON to file\nwith open("data.json", "w") as f:\n    json.dump(person, f, indent=2)\n\n# Read JSON from file\nwith open("data.json", "r") as f:\n    data = json.load(f)\n    print(data)`,
        explanation: "JSON (JavaScript Object Notation) is a lightweight data format. Use json.dumps()/json.loads() for strings, and json.dump()/json.load() for files."
      }
    ],
    exercises: [{id: "ex-25-1", title: "Config Manager", difficulty: "medium", description: "Create a configuration manager that reads and writes settings as JSON.", starterCode: `import json\n\nconfig = {"theme": "dark", "font_size": 14, "language": "en"}\n\n# Save config\nwith open("config.json", "w") as f:\n    json.dump(config, f, indent=2)\n\n# Load config\nwith open("config.json", "r") as f:\n    loaded = json.load(f)\n    print(loaded)`, solution: `import json\n\nconfig = {"theme": "dark", "font_size": 14, "language": "en"}\n\nwith open("config.json", "w") as f:\n    json.dump(config, f, indent=2)\n\nwith open("config.json", "r") as f:\n    loaded = json.load(f)\n    print(f"Theme: {loaded['theme']}")\n    print(f"Font Size: {loaded['font_size']}")`, hint: "Use json.dump() to write and json.load() to read."}],
    quiz: [{question: "What is the difference between json.dump() and json.dumps()?", options: ["No difference", "dump() writes to file, dumps() returns string", "dumps() writes to file, dump() returns string", "dump() is faster"], correct: 1, explanation: "json.dump() writes to a file object, while json.dumps() returns a JSON string (s = string)."}],
    youtubeLinks: [{title: "Python JSON Tutorial", channel: "Corey Schafer", url: "https://www.youtube.com/watch?v=9N6a-VLBa2I"}]
  },
  {
    day: 26, title: "Web Scraping (Basics)", icon: "🌐", difficulty: "advanced", week: 5, estimatedTime: "2 hours",
    topics: ["What is Web Scraping?", "BeautifulSoup", "Scrape a simple website"],
    description: "Learn the basics of web scraping — extracting data from websites using Python and BeautifulSoup.",
    content: [
      {
        type: "code", title: "Web Scraping Basics", filename: "scraping.py",
        code: `# Note: You need to install beautifulsoup4 and requests\n# pip install beautifulsoup4 requests\n\nimport requests\nfrom bs4 import BeautifulSoup\n\n# Fetch a webpage\nurl = "https://quotes.toscrape.com"\nresponse = requests.get(url)\n\n# Parse HTML\nsoup = BeautifulSoup(response.text, "html.parser")\n\n# Extract data\nquotes = soup.find_all("div", class_="quote")\n\nfor quote in quotes:\n    text = quote.find("span", class_="text").get_text()\n    author = quote.find("small", class_="author").get_text()\n    print(f'"{text}" — {author}')\n    print()\n\n# Getting links\nlinks = soup.find_all("a")\nfor link in links[:5]:\n    href = link.get("href")\n    text = link.get_text()\n    print(f"{text}: {href}")`,
        explanation: "Web scraping involves fetching web pages and extracting data from them. BeautifulSoup makes it easy to parse HTML and find specific elements."
      }
    ],
    exercises: [{id: "ex-26-1", title: "Quote Scraper", difficulty: "medium", description: "Scrape quotes from a website and save them to a JSON file.", starterCode: `# This is a conceptual exercise\n# Showing the pattern for web scraping\n\nimport json\n\n# Simulated scraped data\nquotes = [\n    {"text": "Be yourself; everyone else is taken.", "author": "Oscar Wilde"},\n    {"text": "Two things are infinite...", "author": "Albert Einstein"}\n]\n\nwith open("quotes.json", "w") as f:\n    json.dump(quotes, f, indent=2)\n\nprint(f"Saved {len(quotes)} quotes!")`, solution: `import json\n\nquotes = [\n    {"text": "Be yourself; everyone else is taken.", "author": "Oscar Wilde"},\n    {"text": "Two things are infinite...", "author": "Albert Einstein"},\n    {"text": "Be the change you wish to see.", "author": "Mahatma Gandhi"}\n]\n\nwith open("quotes.json", "w") as f:\n    json.dump(quotes, f, indent=2)\n\nprint(f"Saved {len(quotes)} quotes to quotes.json")`, hint: "Use requests.get() to fetch and BeautifulSoup to parse HTML."}],
    quiz: [{question: "Which library is commonly used for parsing HTML in Python?", options: ["requests", "BeautifulSoup", "pandas", "Flask"], correct: 1, explanation: "BeautifulSoup (bs4) is the most popular library for parsing HTML and XML documents in Python."}],
    youtubeLinks: [{title: "Web Scraping with Python", channel: "Corey Schafer", url: "https://www.youtube.com/watch?v=ng2o98k983k"}, {title: "Beautiful Soup Tutorial", channel: "Tech With Tim", url: "https://www.youtube.com/watch?v=gRLHr664tXA"}]
  },
  {
    day: 27, title: "Mini Project 1: To-Do List App", icon: "✅", difficulty: "project", week: 5, estimatedTime: "2-3 hours",
    topics: ["Build: To-Do List App", "Add, View, Delete, Mark Complete"],
    description: "Build your first complete project — a fully functional To-Do List application using everything you've learned!",
    isProject: true,
    content: [
      {
        type: "text",
        title: "Project Overview",
        body: `In this project, you'll build a command-line To-Do List application that lets users:
- **Add** new tasks
- **View** all tasks with their status
- **Mark tasks** as complete
- **Delete** tasks
- **Save** tasks to a JSON file so they persist between sessions`
      },
      {
        type: "code", title: "To-Do List App — Complete Code", filename: "todo_app.py",
        code: `import json\nimport os\nfrom datetime import datetime\n\n# File to store tasks\nTASK_FILE = "tasks.json"\n\ndef load_tasks():\n    """Load tasks from JSON file."""\n    if os.path.exists(TASK_FILE):\n        with open(TASK_FILE, "r") as f:\n            return json.load(f)\n    return []\n\ndef save_tasks(tasks):\n    """Save tasks to JSON file."""\n    with open(TASK_FILE, "w") as f:\n        json.dump(tasks, f, indent=2)\n\ndef add_task(tasks):\n    """Add a new task."""\n    title = input("Enter task: ").strip()\n    if title:\n        task = {\n            "id": len(tasks) + 1,\n            "title": title,\n            "completed": False,\n            "created": datetime.now().strftime("%Y-%m-%d %H:%M")\n        }\n        tasks.append(task)\n        save_tasks(tasks)\n        print(f"✅ Task added: {title}")\n    else:\n        print("❌ Task cannot be empty!")\n\ndef view_tasks(tasks):\n    """Display all tasks."""\n    if not tasks:\n        print("📋 No tasks yet! Add some.")\n        return\n    \n    print("\\n📋 Your To-Do List:")\n    print("-" * 50)\n    for i, task in enumerate(tasks, 1):\n        status = "✅" if task["completed"] else "⬜"\n        print(f"  {i}. {status} {task['title']}")\n        print(f"      Created: {task['created']}")\n    print(f"\\n  Total: {len(tasks)} | Done: {sum(1 for t in tasks if t['completed'])}")\n\ndef complete_task(tasks):\n    """Mark a task as complete."""\n    view_tasks(tasks)\n    if tasks:\n        try:\n            idx = int(input("\\nTask number to complete: ")) - 1\n            if 0 <= idx < len(tasks):\n                tasks[idx]["completed"] = True\n                save_tasks(tasks)\n                print(f"✅ Completed: {tasks[idx]['title']}")\n            else:\n                print("❌ Invalid task number!")\n        except ValueError:\n            print("❌ Please enter a valid number!")\n\ndef delete_task(tasks):\n    """Delete a task."""\n    view_tasks(tasks)\n    if tasks:\n        try:\n            idx = int(input("\\nTask number to delete: ")) - 1\n            if 0 <= idx < len(tasks):\n                removed = tasks.pop(idx)\n                save_tasks(tasks)\n                print(f"🗑️ Deleted: {removed['title']}")\n            else:\n                print("❌ Invalid task number!")\n        except ValueError:\n            print("❌ Please enter a valid number!")\n\ndef main():\n    """Main application loop."""\n    tasks = load_tasks()\n    \n    print("\\n🎯 Welcome to PyToDo!")\n    print("=" * 30)\n    \n    while True:\n        print("\\n[1] Add Task")\n        print("[2] View Tasks")\n        print("[3] Complete Task")\n        print("[4] Delete Task")\n        print("[5] Exit")\n        \n        choice = input("\\nChoose (1-5): ").strip()\n        \n        if choice == "1": add_task(tasks)\n        elif choice == "2": view_tasks(tasks)\n        elif choice == "3": complete_task(tasks)\n        elif choice == "4": delete_task(tasks)\n        elif choice == "5":\n            print("\\n👋 Goodbye! Happy coding!")\n            break\n        else:\n            print("❌ Invalid choice!")\n\nif __name__ == "__main__":\n    main()`,
        explanation: "This project combines file handling (JSON), functions, loops, conditionals, lists, and dictionaries — all concepts from the first 25 days!"
      }
    ],
    exercises: [{id: "ex-27-1", title: "Enhance the To-Do App", difficulty: "hard", description: "Add a 'priority' feature (high/medium/low) and the ability to sort tasks by priority.", starterCode: `# Add priority to the task dictionary\n# Modify add_task to ask for priority\n# Add a sort_by_priority function`, solution: `# Enhanced version with priority\ndef add_task(tasks):\n    title = input("Enter task: ").strip()\n    priority = input("Priority (high/medium/low): ").lower()\n    if priority not in ["high", "medium", "low"]:\n        priority = "medium"\n    task = {"title": title, "priority": priority, "completed": False}\n    tasks.append(task)\n    print(f"Added: {title} [{priority}]")`, hint: "Add a 'priority' field and use list.sort() with a key function."}],
    quiz: [{question: "What design pattern does this To-Do app use?", options: ["MVC", "Command Loop", "Observer", "Singleton"], correct: 1, explanation: "The app uses a command loop pattern — continuously prompting the user for input and executing commands until they choose to exit."}],
    youtubeLinks: [{title: "Python To-Do List Project", channel: "Tech With Tim", url: "https://www.youtube.com/watch?v=yMhkmBk0Wio"}, {title: "Build a To-Do App in Python", channel: "Programming with Mosh", url: "https://www.youtube.com/watch?v=_uQrJ0TkZlc"}]
  },
  {
    day: 28, title: "Mini Project 2: Password Generator", icon: "🔐", difficulty: "project", week: 5, estimatedTime: "2-3 hours",
    topics: ["Build: Password Generator", "Strong Password using conditions", "random module"],
    isProject: true,
    description: "Build a secure password generator that creates strong, randomized passwords with customizable options.",
    content: [
      {
        type: "code", title: "Password Generator — Complete Code", filename: "password_generator.py",
        code: `import random\nimport string\n\ndef generate_password(length=16, use_upper=True, use_lower=True,\n                      use_digits=True, use_special=True):\n    """Generate a strong random password."""\n    characters = ""\n    required = []\n    \n    if use_lower:\n        characters += string.ascii_lowercase\n        required.append(random.choice(string.ascii_lowercase))\n    if use_upper:\n        characters += string.ascii_uppercase\n        required.append(random.choice(string.ascii_uppercase))\n    if use_digits:\n        characters += string.digits\n        required.append(random.choice(string.digits))\n    if use_special:\n        characters += string.punctuation\n        required.append(random.choice(string.punctuation))\n    \n    if not characters:\n        return "Error: Select at least one character type!"\n    \n    # Fill remaining length with random characters\n    remaining = length - len(required)\n    password = required + [random.choice(characters) for _ in range(remaining)]\n    \n    # Shuffle to randomize positions\n    random.shuffle(password)\n    return "".join(password)\n\ndef check_strength(password):\n    """Check password strength."""\n    score = 0\n    if len(password) >= 8: score += 1\n    if len(password) >= 12: score += 1\n    if any(c.isupper() for c in password): score += 1\n    if any(c.islower() for c in password): score += 1\n    if any(c.isdigit() for c in password): score += 1\n    if any(c in string.punctuation for c in password): score += 1\n    \n    levels = {0: "Very Weak", 1: "Weak", 2: "Fair",\n              3: "Good", 4: "Strong", 5: "Very Strong", 6: "Excellent"}\n    bars = "█" * score + "░" * (6 - score)\n    return levels.get(score, "Unknown"), bars\n\n# Main program\nprint("🔐 Secure Password Generator")\nprint("=" * 35)\n\nfor i in range(5):\n    pwd = generate_password(length=16)\n    strength, bar = check_strength(pwd)\n    print(f"  {i+1}. {pwd}  [{bar}] {strength}")\n\nprint("\\n🔑 Custom password:")\ncustom = generate_password(length=20, use_special=True)\nprint(f"  → {custom}")`,
        explanation: "This project uses the `random` and `string` modules. It demonstrates function parameters, list operations, string methods, and conditional logic."
      }
    ],
    exercises: [{id: "ex-28-1", title: "Password Manager", difficulty: "hard", description: "Extend the generator to save passwords associated with website names.", starterCode: `# Save generated passwords with site names`, solution: `import json\n\ndef save_password(site, password):\n    try:\n        with open("passwords.json", "r") as f:\n            data = json.load(f)\n    except FileNotFoundError:\n        data = {}\n    data[site] = password\n    with open("passwords.json", "w") as f:\n        json.dump(data, f, indent=2)\n    print(f"Saved password for {site}")`, hint: "Use a JSON file to store site-password pairs."}],
    quiz: [{question: "Why is random.shuffle() important in password generation?", options: ["Makes it faster", "Prevents predictable patterns", "Reduces memory", "Required by Python"], correct: 1, explanation: "Shuffling prevents predictable patterns like always having uppercase first, making the password more secure."}],
    youtubeLinks: [{title: "Python Password Generator", channel: "Tech With Tim", url: "https://www.youtube.com/watch?v=3_-a5XZMDMg"}]
  },
  {
    day: 29, title: "Mini Project 3: Rock Paper Scissors", icon: "✊", difficulty: "project", week: 5, estimatedTime: "2-3 hours",
    topics: ["Build: Rock Paper Scissors Game"],
    isProject: true,
    description: "Build the classic Rock Paper Scissors game against the computer with score tracking and best-of-N rounds!",
    content: [
      {
        type: "code", title: "Rock Paper Scissors — Complete Code", filename: "rps_game.py",
        code: `import random\n\ndef get_computer_choice():\n    """Computer picks randomly."""\n    return random.choice(["rock", "paper", "scissors"])\n\ndef determine_winner(player, computer):\n    """Determine the winner."""\n    if player == computer:\n        return "tie"\n    \n    wins = {"rock": "scissors", "paper": "rock", "scissors": "paper"}\n    if wins[player] == computer:\n        return "player"\n    return "computer"\n\ndef display_choice(choice):\n    """Display ASCII art for choice."""\n    art = {\n        "rock": "    🪨  ROCK",\n        "paper": "    📄  PAPER",\n        "scissors": "    ✂️  SCISSORS"\n    }\n    return art.get(choice, choice)\n\ndef play_game():\n    """Main game loop."""\n    print("\\n🎮 Rock Paper Scissors!")\n    print("=" * 30)\n    \n    player_score = 0\n    computer_score = 0\n    rounds = 0\n    \n    while True:\n        print(f"\\n📊 Score → You: {player_score} | Computer: {computer_score}")\n        print("\\nChoose: [r]ock, [p]aper, [s]cissors, [q]uit")\n        \n        choice_map = {"r": "rock", "p": "paper", "s": "scissors"}\n        player_input = input("→ ").lower().strip()\n        \n        if player_input == "q":\n            break\n        \n        player = choice_map.get(player_input)\n        if not player:\n            print("❌ Invalid choice! Try r, p, or s.")\n            continue\n        \n        computer = get_computer_choice()\n        rounds += 1\n        \n        print(f"\\n  You chose:      {display_choice(player)}")\n        print(f"  Computer chose: {display_choice(computer)}")\n        \n        result = determine_winner(player, computer)\n        if result == "tie":\n            print("  🤝 It's a tie!")\n        elif result == "player":\n            print("  🎉 You win this round!")\n            player_score += 1\n        else:\n            print("  💻 Computer wins this round!")\n            computer_score += 1\n    \n    # Game over summary\n    print("\\n" + "=" * 30)\n    print(f"🏁 Game Over! Rounds played: {rounds}")\n    print(f"📊 Final Score → You: {player_score} | Computer: {computer_score}")\n    if player_score > computer_score:\n        print("🏆 You are the champion!")\n    elif computer_score > player_score:\n        print("💻 Computer wins the series!")\n    else:\n        print("🤝 It's an overall tie!")\n\nplay_game()`,
        explanation: "This game demonstrates randomization, dictionary lookups, loops, user input handling, and game state management."
      }
    ],
    exercises: [{id: "ex-29-1", title: "Best of 5", difficulty: "medium", description: "Modify the game to play best-of-5 rounds.", starterCode: `# Modify the game to end after someone wins 3 rounds`, solution: `# In the while loop, add:\n# if player_score == 3 or computer_score == 3:\n#     break`, hint: "Add a condition to break the loop when either player reaches 3 wins."}],
    quiz: [{question: "What data structure is best for mapping choices to winning conditions?", options: ["List", "Tuple", "Dictionary", "Set"], correct: 2, explanation: "A dictionary is ideal for mapping each choice to the choice it beats: {'rock': 'scissors', 'paper': 'rock', 'scissors': 'paper'}."}],
    youtubeLinks: [{title: "Rock Paper Scissors in Python", channel: "Tech With Tim", url: "https://www.youtube.com/watch?v=fn68QNcBNwc"}]
  },
  {
    day: 30, title: "Revision & Challenge", icon: "🏆", difficulty: "project", week: 5, estimatedTime: "3+ hours",
    topics: ["Revise All Concepts", "Solve Problems", "Build something of your choice"],
    isProject: true,
    description: "Congratulations on reaching Day 30! 🎉 Review everything you've learned, tackle challenge problems, and build your own project!",
    content: [
      {
        type: "text",
        title: "🎉 Congratulations!",
        body: `You've completed the 30-Day Python Challenge! Here's a recap of everything you've learned:

**Week 1: Fundamentals** — Variables, Data Types, I/O, Operators, Conditionals, Loops
**Week 2: Data Structures** — Functions, Lists, Tuples, Dicts, Sets, Strings  
**Week 3: Intermediate** — Advanced Strings, Comprehensions, File Handling, Exceptions, Modules
**Week 4: Advanced** — OOP (4 parts), Date & Time, Regular Expressions
**Week 5: Real Projects** — JSON, Web Scraping, To-Do App, Password Generator, RPS Game`
      },
      {
        type: "code", title: "Final Challenge: Build a Contact Book", filename: "contact_book.py",
        code: `import json\n\nclass ContactBook:\n    def __init__(self, filename="contacts.json"):\n        self.filename = filename\n        self.contacts = self._load()\n    \n    def _load(self):\n        try:\n            with open(self.filename, "r") as f:\n                return json.load(f)\n        except (FileNotFoundError, json.JSONDecodeError):\n            return []\n    \n    def _save(self):\n        with open(self.filename, "w") as f:\n            json.dump(self.contacts, f, indent=2)\n    \n    def add(self, name, phone, email=""):\n        contact = {"name": name, "phone": phone, "email": email}\n        self.contacts.append(contact)\n        self._save()\n        print(f"✅ Added {name}")\n    \n    def search(self, query):\n        results = [c for c in self.contacts\n                   if query.lower() in c["name"].lower()]\n        return results\n    \n    def display_all(self):\n        for i, c in enumerate(self.contacts, 1):\n            print(f"{i}. {c['name']} | 📞 {c['phone']} | ✉️ {c.get('email', 'N/A')}")\n\n# Example usage\nbook = ContactBook()\nbook.add("Alice", "555-0101", "alice@email.com")\nbook.add("Bob", "555-0102", "bob@email.com")\nbook.display_all()`,
        explanation: "This final challenge combines OOP, file handling, JSON, list comprehensions, and error handling — all the skills from your 30-day journey!"
      },
      {
        type: "tip",
        title: "What's Next?",
        body: `Keep building! Here are some ideas for your next projects:
- 🌐 **Web Development** — Learn Flask or Django
- 📊 **Data Science** — Explore Pandas, NumPy, Matplotlib
- 🤖 **Machine Learning** — Start with scikit-learn
- 🎮 **Game Development** — Try Pygame
- 📱 **Automation** — Automate tasks with Selenium
- 🔗 **APIs** — Build REST APIs with FastAPI`
      }
    ],
    exercises: [{id: "ex-30-1", title: "Your Own Project", difficulty: "hard", description: "Build a project of your choice that uses at least 5 different concepts from the challenge.", starterCode: `# Your project here!\n# Ideas:\n# - Quiz Game\n# - Expense Tracker\n# - Weather App (using API)\n# - File Organizer\n# - Chatbot\n\n# Start coding!`, solution: `# There's no single solution — build YOUR project!\n# Make sure to use:\n# 1. Functions\n# 2. Classes (OOP)\n# 3. File handling\n# 4. Error handling\n# 5. Data structures (lists, dicts)\n\nprint("Build something amazing! 🚀")`, hint: "Choose a project you're passionate about and use classes, functions, file handling, and error handling."}],
    quiz: [{question: "What is the best way to continue learning after this challenge?", options: ["Stop coding", "Build real projects", "Just read books", "Memorize syntax"], correct: 1, explanation: "The best way to learn is by building real projects. Practice consistently, build things you're interested in, and never stop learning!"}],
    youtubeLinks: [{title: "10 Python Projects for Beginners", channel: "Programming with Mosh", url: "https://www.youtube.com/watch?v=8ext9G7xspg"}, {title: "12 Beginner Python Projects", channel: "freeCodeCamp", url: "https://www.youtube.com/watch?v=8ext9G7xspg"}]
  }
];

// Week definitions
export const weeks = [
  { number: 1, title: "Python Fundamentals", difficulty: "beginner", days: [1,2,3,4,5,6], description: "Build your foundation with variables, operators, conditions, and loops" },
  { number: 2, title: "Data Structures & Functions", difficulty: "beginner", days: [7,8,9,10,11,12], description: "Master functions and Python's built-in data structures" },
  { number: 3, title: "Intermediate Python", difficulty: "intermediate", days: [13,14,15,16,17,18], description: "Level up with comprehensions, file handling, and modules" },
  { number: 4, title: "Object-Oriented Programming", difficulty: "advanced", days: [19,20,21,22,23,24], description: "Learn OOP, dates, and regular expressions" },
  { number: 5, title: "Projects & Mastery", difficulty: "project", days: [25,26,27,28,29,30], description: "Apply your skills with real-world projects and challenges" }
];

export function getDayByNumber(dayNum) {
  return curriculum.find(d => d.day === dayNum);
}

export function getWeekByNumber(weekNum) {
  return weeks.find(w => w.number === weekNum);
}

export function getDaysForWeek(weekNum) {
  const week = getWeekByNumber(weekNum);
  if (!week) return [];
  return week.days.map(d => getDayByNumber(d)).filter(Boolean);
}

export function searchCurriculum(query) {
  const q = query.toLowerCase();
  return curriculum.filter(day =>
    day.title.toLowerCase().includes(q) ||
    day.topics.some(t => t.toLowerCase().includes(q)) ||
    day.description.toLowerCase().includes(q)
  );
}
