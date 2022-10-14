#include <stdio.h>
// 获取数组长度
#define length(arr) sizeof(arr)/sizeof (arr[0])

void printArr(int arr[], int len) {
    printf("\n============== array result =============\n");
    for (int i = 0; i < len; ++i) {
        printf("%d\n", arr[i]);
    }
}