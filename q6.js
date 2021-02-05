var a,b,c;
for (a=5;a>=1;a--)
{
    for (b=1; b<=a;b++)
    {
      document.write(b);
      
      
    }
    document.write(" ");
    for(c=1; c<=a;c++)
    {
        document.write("*");
    }
    document.write("<br>");
}