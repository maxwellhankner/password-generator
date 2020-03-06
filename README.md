# password-generator

## Welcome to Maxwell Hankner's Password Generator
Instructions: To generate a password, click 'Generate Password' and then follow the prompts. You must enter a password length between 8 and 128 and select at least one type of character to get a result. You can then copy the password and use it for whatever you may wish.

### Features
The password generator will provide a result that meets the users requirements. The result will be of the specified length and include at least one character for each character type the user requested. If the user enters a length that is not between 8 and 128, they will be notified to try again. Also, if the user does not select any of the character types, they will be notified to try again. Once the generator has created a password, the user can copy it for use, or generate a new password.

### Challenges
The hardest part of this project was realizing all of the steps it takes to generate a unique password that meets the users requirements. And then, actually coding the script was quite challenging, as well. Generating a random number with Math.random() was used in a few applications and made that part of things easy, but taking that number and using it to achieve the things I wanted was not so easy. For example, I used it to get a random character from a character index. Also, comprehending the for loops I was using took some time. To iterate over the password I generated and see if it met the requirements, I used nested for loops, and that was hard to wrap my head around. Lastly, I tried to handle the various ways a user could break the project. I caught one good one. When the user entered a number for the requested password length, The app would spin and throw some errors. I'm sure there are a lot more ways a user could break the project, but I had to call it good at some point.

#### Thanks for checking out this project!