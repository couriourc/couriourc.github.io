#include "utils.h"

void solution(int arr[], int len) {
    for (int i = 0; i < len / 2; ++i) {
        arr[i] = arr[i] ^ arr[len - i - 1];
        arr[len - i - 1] = arr[i] ^ arr[len - i - 1];
        arr[i] = arr[i] ^ arr[len - i - 1];
    }
}


int main(void) {
    int arr[] = {1, 2, 3, 4, 5, 6};
    int len = length(arr);
    solution(arr, len);
    printArr(arr, len);
    return 0;
}
