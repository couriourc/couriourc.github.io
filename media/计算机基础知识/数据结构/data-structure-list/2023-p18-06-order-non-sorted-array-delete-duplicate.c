/***********************************************************************
  module:       2023-p18-05-order-non-sorted-array-delete-duplicate
  author:   CouriourC
  description:
 ***********************************************************************/
#include "utils.h"



int check(int *arr, int start, int end, int target) {
    for (int i = start; i < end; ++i) {
        if (arr[i] == target) return 1;
    }
    return 0;
}

int solution(int *arr, int len) {
    // 最终的数组长度
    int k = 0;
    /** !如果是无序表
    * for (int i = 0; i < len; ++i)
    *     if (!check(arr, 0, k, arr[i]))
    *     arr[k++] = arr[i];
    **/
    for (int i = k+1; i < len; ++i) {
        if (arr[i] != arr[k]) {
            arr[++k] = arr[i];
        }
    }
    return k + 1;
}

int main(void) {
    int arr[] = {1, 1,2, 3, 3, 3, 4, 4, 4, 7};
    int len = length(arr);

    printf("\n======= Debug ING ======\n");
    len = solution(arr, len);
    printf("\n======= Debug END ======\n");

    printf("\n======= Result ING ======\n");
    printArr(arr, len);
    printf("\n======= Result ING ======\n");

    return 0;
}