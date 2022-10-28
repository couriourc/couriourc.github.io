/***********************************************************************
  module:       2023-p18-04-order-array-delete-x-by-range
  author:   CouriourC
 ***********************************************************************/
#include "utils.h"

int solution(int *arr, int s, int t, int len) {
    //    因为是顺序表，所以只需要定位到对应元素之后，分批次的覆盖就行
    int k = 0, m;

    // 定位到 > s 的元素，带入值验证 k = 0->1->2 ，++m 定位到的位置就是满足这个元素的位置
    for (; k < len && s > arr[++k];);
    printf("k:%d\n", k);
    // 定位到 < t 的元素，带入值验证 m =1->2->3-4
    // m++ 就是满足当前条件的后一个
    for (m = k; m < len && t >= arr[++m];);
    printf("m:%d\n", m);

    // 合并元素
    for (; m < len;) arr[k++] = arr[m++];

    return k;
}

int main(void) {
    int arr[] = {1, 2, 3, 3, 4, 4, 5};
    int len = length(arr);
    int s = 3, t = 4;
    printf("\n======= Debug ING ======\n");
    len = solution(arr, s, t, len);
    printf("\n======= Debug END ======\n");

    printf("\n======= Result ING ======\n");
    printArr(arr, len);
    printf("\n======= Result ING ======\n");

    return 0;
}