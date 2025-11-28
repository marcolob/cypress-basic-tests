[
  { "username": "wrong_user", "password": "wrong_pass", "expectedError": "Username and password do not match any user in this service" },
  { "username": "", "password": "any_pass", "expectedError": "Username is required" },
  { "username": "standard_user", "password": "", "expectedError": "Password is required" },
  { "username": "", "password": "", "expectedError": "Username is required" }
]
