/*2. Cоздать функцию greeting, которая принимает имя и выводит приветствие, используя переданное имя, в консоль.*/

function greeting (userName) 
{
    console.log(`Welcome, ${userName}`);
}
    
const user = prompt("Enter your name: ");
greeting(user);