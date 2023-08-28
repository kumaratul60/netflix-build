export const checkValidData = (name, email, password) => {
  const isEmailValid = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/.test(
    email
  );
  const isPasswordValid =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(
      password
    );

  const isNameValid = /^[A-Za-z\s]+$/.test(name);

  if (!isNameValid) return `Invalid Name input`;
  if (!isEmailValid) return "Invalid Email ";
  if (!isPasswordValid) return "Invalid Password";

  // Return null if no error occurred
  return null;
};


