#include <stdio.h>
#include <stdbool.h>
#include <malloc.h>
// 自定义的链表方法
#include "linklist.h"
// 获取数组长度
#define length(arr) sizeof(arr)/sizeof (arr[0])

void printArr(int arr[], int len) {
    printf("\n============== array result =============\n");
    for (int i = 0; i < len; ++i) {
        printf("%d\n", arr[i]);
    }
}

void printLinkList(LinkList L){
    printf("\n============== link result =============\n");
    for (;L;L = L->next) {
        printf("%d\n",L->data.data);
    }
}