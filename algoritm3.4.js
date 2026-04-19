function fib(n)
{
    if (n <= 1) 
    {
        return n;
    }
    return fib(n - 1) + fib(n - 2);
}
let n = 5 ;
for (let i = 1; i < n; i++) 
{
    console.log(fib(i));
}