var a=prompt("Enter word to check palindrome");
    var b=a.toLowerCase();
function checkpalindrome(word)
{
    
    var splitted=word.split('');
    var reversed=splitted.reverse();
    var newword=reversed.join('');
    if(newword==word)
    return alert("its a palindrome");
    return alert("its not a palindrome");
}
checkpalindrome(b);
