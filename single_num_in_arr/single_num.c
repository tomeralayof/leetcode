
#include <stdio.h>
#include <stdlib.h>

int singleNumber(int* nums, int numsSize);

int main()
{

    int nums[] = {1,1,20,1,2,1};
    int num_size = sizeof(nums) / sizeof(int);

    printf("%d\n",singleNumber(nums,num_size));

    return 0;
}

int singleNumber(int* nums, int numsSize)
{

    int i = 0;
    int mx = 0;
    int *lut = NULL;

    for (i = 0; i < numsSize; i++)
    {
        if (nums[i] > mx)
        {
            mx = nums[i];
        }
    }

    lut = (int *)malloc(sizeof(int) * mx);

    for (i = 0; i < numsSize; i++)
    {
        ++lut[nums[i]];
    }

    for (i = 0; i < numsSize; i++)
    {
       if (lut[nums[i]] == 1)
       {
           free(lut);
           return nums[i];
       }
       
    }
        
    free(lut);
    return -1;
}