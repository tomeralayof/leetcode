
#define MAX_ASCII (255)
#include <stdio.h>
#include <string.h>

int romanToInt(char * s);
void InitialLut(int *lut);

int main()
{
    char *s = "MCMXCIV";
    printf("%d\n",romanToInt(s));
    return 0;
}



int romanToInt(char * s)
{
    static int lut_translation[MAX_ASCII] = {0};
    int result = 0;
    size_t i = 0;

    InitialLut(lut_translation);

    for (i = 0; i < strlen(s); i++)
    {
        int idx = s[i];
        result = result + lut_translation[idx];
    }
    
    return result;
}

void InitialLut(int *lut)
{
    lut['I'] = 1;
    lut['V'] = 5;
    lut['X'] = 10;
    lut['L'] = 50;
    lut['C'] = 100;
    lut['D'] = 500;
    lut['M'] = 1000;
} 