/***********************************************************************
  module:       2023-p18-03-order-array-delete-x
  author:   CouriourC
 ***********************************************************************/
#include "utils.h"

void solution(int *arr, int x, int len) {
    printf("\n======= Debug ING ======\n");
    for (int i = 0; i < len; ++i) {
        if ( arr[i] == x ) {
            // 如果值相等，那么后面的值向前覆盖
            arr[i] = arr[i+1];
        }
    }
    printf("\n======= Debug END ======\n");
}

int main() {
    int arr[] = {1, 2, 3, 4, 5};
    int len = length(arr);

    printf("\n======= Debug ING ======\n");
    solution(arr, 2, len);
    printf("\n======= Debug END ======\n");

    printf("\n======= Result ING ======\n");
    printArr(arr, len);
    printf("\n======= Result ING ======\n");

    return 0;
}