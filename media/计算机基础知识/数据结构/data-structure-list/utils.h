#include <stdio.h>
#include <stdbool.h>
#include <malloc.h>
// 自定义的链表方法
#include "data-structure-base-define/data-structure-base-define.h"
// 获取数组长度
#define length(arr) sizeof(arr)/sizeof (arr[0])

void printArr(int arr[], int len) {
    printf("\n============== array result =============\n");
    for (int i = 0; i < len; ++i) {
        printf("%d\n", arr[i]);
    }
}

void printLinkList(LinkList L) {
    printf("\n============== link result =============\n");
    for (; L; L = L->next) {
        printf("%d\n", L->data.data);
    }
}

// 定义树
//typedef struct Tree {
//    struct Tree *left;
//    struct Tree *right;
//    int data;
//
//} Tree;
//
//void FrontTravelTree(Tree *tree) {
//    if (!tree) return;
//    printf("%d", tree->data);
//    FrontTravelTree(tree->left);
//    FrontTravelTree(tree->right);
//}
//
//void MidTravelTree(Tree *tree) {
//    if (!tree) return;
//    MidTravelTree(tree->left);
//    printf("%d", tree->data);
//    MidTravelTree(tree->right);
//}
//
//void AfterTravelTree(Tree *tree) {
//    if (!tree) return;
//    AfterTravelTree(tree->left);
//    AfterTravelTree(tree->right);
//    printf("%d", tree->data);
//}
//
