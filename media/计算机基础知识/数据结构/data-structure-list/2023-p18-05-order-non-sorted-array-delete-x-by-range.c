/***********************************************************************
  module:       2023-p18-05-order-non-sorted-array-delete-x-by-range
  author:   CouriourC
 ***********************************************************************/
#include "utils.h"

int solution(int *arr,int s, int t, int len) {
    if (!len || s > t) return 0;
    int k = 0;
    for (int i = 0; i < len; ++i) {
        if (arr[i] < s || arr[i] > t) {
            arr[k++] = arr[i];
        }
    }
    return k;
}

int main(void) {
    int arr[] = {1, 2, 3, 4, 5};
    int len = length(arr);
    int s = 2, t = 3;

    printf("\n======= Debug ING ======\n");
    len = solution(arr,s, t, len);
    printf("\n======= Debug END ======\n");

    printf("\n======= Result ING ======\n");
    printArr(arr, len);
    printf("\n======= Result ING ======\n");

    return 0;
}