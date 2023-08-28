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

/**

---Email----------------------------------------------------

^ - The beginning of the string.
( - Start of a capturing group.
[a-zA-Z0-9._%-]+ - Matches one or more of the following characters: letters (both uppercase and lowercase), numbers, periods, underscores, percent signs, and hyphens.
@ - Matches the “@” symbol.
[a-zA-Z0-9.-]+ - Matches one or more of the following characters: letters (both uppercase and lowercase), numbers, periods, and hyphens.
\. - Matches a literal period character.
[a-zA-Z]{2,} - Matches two or more letters (both uppercase and lowercase).
) - End of the capturing group.
$ - The end of the string.

------Password--------------------

^ - The password string will start this way
(?=.*[a-z]) - The string must contain at least 1 lowercase alphabetical character
(?=.*[A-Z]) - The string must contain at least 1 uppercase alphabetical character
(?=.*[0-9]) - The string must contain at least 1 numeric character
(?=.*[!@#$%^&*])  	The string must contain at least one special character, but we are escaping reserved RegEx characters to avoid conflict
(?=.{8,}) - The string must be eight characters or longer


*/
