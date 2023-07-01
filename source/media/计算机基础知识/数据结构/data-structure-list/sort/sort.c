/***********************************************************************
  module:   八大排序算法
  author:   CouriourC
 ***********************************************************************/
#include "utils.h"

int insert_sort(int *arr, int len, int *, int *);

int bubbling_sort(int *arr, int len, int *, int *);

int quick_sort(int *arr, int len);

int select_sort(int *arr, int len);

int merge_sort(int *arr, int len);

int head_sort(int *arr, int len);

int base_key_sort(int *arr, int len);


void trial(int (*fp)(int *, int, int *, int *), int arr[], int len) {
    int _comparsion_count = 0, *comparsion_count = &_comparsion_count; //
    int _swap_count = 0, *swap_count = &_swap_count; //
    fp(arr, len, comparsion_count, swap_count);
    printf("\n==== Trial Data Analyze ====\n");
    printf("Compared Times: \t %d \n", *comparsion_count);
    printf("Swapped Times: \t %d \n", *swap_count);
    printf("\n==== Trial Data Analyze ====\n");
}

int solution(int *arr, int len) {
    trial(bubbling_sort, arr, len);
    return len;
}

int main(void) {
    int arr[] = {1, 2, 5, 3, 4,};
    int len = length(arr);

    printf("\n======= Debug ING ======\n");
    len = solution(arr, len);
    printf("\n======= Debug END ======\n");

    printf("\n======= Result ING ======\n");
    printArr(arr, len);
    printf("\n======= Result ING ======\n");

    return 0;
}

void swap(int arr[], int o, int t) {
    arr[o] = arr[o] ^ arr[t];
    arr[t] = arr[o] ^ arr[t];
    arr[o] = arr[o] ^ arr[t];
}


int insert_sort(int *arr, int len, int *comparsion_count, int *swap_count) {
    for (int j, i = 0; i < len; ++i) {
        j = i;
        for (; arr[i] < arr[j]; --j) {
            arr[j] = arr[j - 1];
        }
        arr[j] = arr[i];
    }
    return len;
}

int bubbling_sort(int *arr, int len, int *comparsion_count, int *swap_count) {
    // 关于冒泡排序：
    // 所谓冒泡排序，就是依次去比较，使得每一次将最大的元素放在后面去
    // 冒泡的比较次数就仍然还是 O(n^2)
    // 实际发生交换,最优,就是一次不换
    // 最差就是 O(n^2)
    // 平均的交换次数就是,O(n^2)
    for (int i = 0; i < len; ++i) {
        for (int j = i; j < len - 1; ++j) {
            ++(*comparsion_count);
            if (arr[j] > arr[j + 1]) {
                ++(*swap_count);
                swap(arr, j, j + 1);
            }
        }
    }
    // 由于在之后已经有 i 个元素排行顺序了
    // 所以只需要从 i 开始继续判定就可以了
    return len;
}
