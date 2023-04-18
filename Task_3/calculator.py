# Define a function to perform addition
def add(x, y):
    return x + y

# Define a function to perform subtraction
def subtract(x, y):
    return x - y

# Define a function to perform multiplication
def multiply(x, y):
    return x * y

# Define a function to perform division
def divide(x, y):
    return x / y

# Get user input for the two numbers and the operation to perform
num1 = float(input("Enter first number: "))
num2 = float(input("Enter second number: "))
operator = input("Enter operator (+,-,*,/): ")

# Perform the requested operation
if operator == '+':
    result = add(num1, num2)
elif operator == '-':
    result = subtract(num1, num2)
elif operator == '*':
    result = multiply(num1, num2)
elif operator == '/':
    result = divide(num1, num2)
else:
    print("Invalid operator")

# Print the result
print("Result: ", result)
