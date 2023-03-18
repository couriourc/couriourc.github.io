/***********************************************************************
  module:       2023-p18-03-order-array-delete-x
  author:   CouriourC
 ***********************************************************************/
#include "utils.h"

int solution(int *arr, int x, int len) {
    printf("\n======= Debug ING ======\n");
    // k 用于记录处理成功之后顺序表的位置
    int k = 0;
    for (int i = 0; i < len; ++i) {
        if (arr[i] != x) {
            // 如果碰到了不等于 x,k 指针移动并
            arr[k++] = arr[i];
        }
    }
    printf("\n======= Debug END ======\n");
    return k;
}

int main() {
    int arr[] = {1, 2, 3, 4, 5};
    int len = length(arr);

    printf("\n======= Debug ING ======\n");
    len = solution(arr, 2, len);
    printf("\n======= Debug END ======\n");

    printf("\n======= Result ING ======\n");
    printArr(arr, len);
    printf("\n======= Result ING ======\n");

    return 0;
}