var user=prompt("press 2 or 3");
if(user==2)
{
var ar=[
    [0,1],
    [1,0]
       ];
       for(var a=0;a<2;a++)
        {
            for(var b=0; b<2; b++)
            {
                document.write(ar[a][b]);
                document.write(" ");
               
            }
            document.write("<br>");
            
        }
       

}
else if(user==3)
{
var arr=[
       [1,0,0],
       [0,1,0],
       [0,0,1]
        ];
        for(var a=0;a<3;a++)
        {
            for(var b=0; b<3; b++)
            {
                document.write(arr[a][b]);
                document.write(" ");
               
            }
            document.write("<br>");
            
        }

    }