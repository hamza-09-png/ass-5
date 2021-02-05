var a="the quick brown fox jumps over the lazy dog";
var b="the";
function checking(word)
{
var count=word.split(b).length-1;
console.log(count);
}
checking(a);