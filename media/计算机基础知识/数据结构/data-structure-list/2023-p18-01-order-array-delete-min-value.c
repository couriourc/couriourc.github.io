#include "utils.h"

void solution(int *arr, int len) {
    printf("\n============== start =============\n");
    int index = 0, min = arr[0];
    // 获得 index
    for (int i = 0; i < len; ++i) {
        if (min > arr[i]) {
            index = i;
            min = arr[i];
        }
    }
    printf("%d", index);

    // 删除元素
    for (int i = index + 1; i < len; ++i) {
        arr[i - 1] = arr[i];
    }
    printf("\n============== end =============\n");
}

int main(void) {
    int arr[] = {3, 4, 1, 2, 5, 6, 7, 6};
    int len = length(arr);
    solution(arr, len);
    printArr(arr, len);
    return 0;
}