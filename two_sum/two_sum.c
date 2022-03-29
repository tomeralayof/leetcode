#include <stdio.h>
#include <stdlib.h>

int* twoSum(int* nums, int numsSize, int target, int* returnSize);
int Findmx(int max,int numsSize,int *nums);
void InitAuxLut(int numsSize,int *aux,int *nums);
int *ResultArrSumIdxs(int *returnSize,int *aux,int target,int numsSize,int *nums);

int main()
{
    int nums[] = {2,5,11,15,10};
    int target = 25;
    int num_size = sizeof(nums) / sizeof(int);
    int return_size[2] = {2,1}; 

    twoSum(nums,num_size,target,return_size);

    printf("%d\n",return_size[0]);
    printf("%d\n",return_size[1]);

    return 0;
}

int* twoSum(int* nums, int numsSize, int target, int* returnSize)
{
    int *aux = NULL;
    int max = nums[0];

    max = Findmx(max,numsSize,nums);

    aux = (int *)malloc(sizeof(int) * max);

    InitAuxLut(numsSize,aux,nums);

    return ResultArrSumIdxs(returnSize,aux,target,numsSize,nums);

}

int Findmx(int max,int numsSize,int *nums)
{
    int i = 0;
   for (i = 0; i < numsSize; i++)
    {
        if (nums[i] > max)
        {
           max = nums[i];
        }
    }

    return max;
}

void InitAuxLut(int numsSize,int *aux,int *nums)
{
    int i = 0;
    for (i = 0; i < numsSize; i++)
    {
        aux[nums[i]] = i;
    }
}

int *ResultArrSumIdxs(int *returnSize,int *aux,int target,int numsSize,int *nums)
{
    int temp = 0;
    int i = 0;
    int result_idx = 0;

    for (i = 0; i <= numsSize; i++)
    {
        temp = target - nums[i];
        if (temp + nums[i] == target && aux[temp] != 0)
        {
            returnSize[result_idx] = i;
            returnSize[++result_idx] = aux[temp];
            free(aux);
            return returnSize;
        }    
    }

    return NULL; 
}