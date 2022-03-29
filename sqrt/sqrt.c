
#include <stdio.h>

int mySqrt(int x);

int main()
{
    printf("%d\n",mySqrt(10));

    return 0;
}

int mySqrt(int x)
{
    long start = 0;
    long end = x;

    while (start + 1 < end)
    {
        long middle = (start + end) / 2;

        if (middle * middle == x)
        {
            return (int)middle;
        }
        else if (middle * middle < x)
        {
            start = middle;
        }

        else
        {
            end = middle;
        }
    }

    return end * end == x ? (int)end : (int)start;
}