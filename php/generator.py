# import string
# import secrets

# def generate_password(length=8):
#     alphabet = string.ascii_letters + string.digits + string.punctuation
#     password = ''.join(secrets.choice(alphabet) for i in range(length))
#     return password

# if _name_ == "_main_":
#     password = generate_password()
#     print("Generated Password:", password)

# generator.py (Password Generation Algorithm in Python)
import string
import secrets

def generate_password(length=12):
    alphabet = string.ascii_letters + string.digits + string.punctuation
    password = ''.join(secrets.choice(alphabet) for i in range(length))
    return password

if _name_ == "_main_":
    password = generate_password()
    print("Generated Password:", password)