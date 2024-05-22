

// complete the function so that it converts dash/underscore delimited words into camel casting 
// the first word within the output should be capitalized only if the original word was capitalized 
// (known as Upper Camel Case, also often referred to as Pascal case).


// EXAMPLES:
// (A) "the-stealth-warrior" gets converted to  "theStealthWarrior"
// (B) "The-Steal"


function convertcase(text) {
    let parts = text.split(/[-_]/);
    let convertcase = parts[0];

    for (let i = 1; i < parts.length; i++) {
      convertcase += parts[i].charAt(0).toUpperCase() + parts[i].slice(1);
        
    }
    return convertcase;
}

console.log(convertcase("the-stealth-warrior"));
console.log(convertcase("The_Stealth_Warrior"));

