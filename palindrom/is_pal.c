
#include <stdio.h>

int IsPal(int x);

int main()
{
    int x1 = 123;
    int x2 = 121;

    printf("not palindrom: %d\n",IsPal(x1));
    printf("palindrom: %d\n",IsPal(x2)); 

    return 0;
}

int IsPal(int x)
{
    int aux = 0;
    int copy = x;

    while (copy > 0)
    {
        int temp = copy % 10;
        aux = (aux * 10) + temp;
        copy/=10;
    }
    
    return x == aux;
}