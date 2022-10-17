#include <stdio.h>
#include <stdbool.h>
#include <malloc.h>
// 获取数组长度
#define length(arr) sizeof(arr)/sizeof (arr[0])

void printArr(int arr[], int len) {
    printf("\n============== array result =============\n");
    for (int i = 0; i < len; ++i) {
        printf("%d\n", arr[i]);
    }
}

// 链表结构体
typedef int ElemType;
typedef union {
    // 可能是链中链
    ElemType *L;
    ElemType data;
} Data;
struct LNode {
    Data data;
    struct LNode *next;
};
typedef struct LNode *LinkList;
typedef struct LNode Node;

Node *GetElm(LinkList L, int i) {
    Node *p = L->next;
    if (i == 0) return L;
    if (i < 1) return NULL;
    for (int j = 0; p && j < i; p = p->next, ++j);
    return p;
};

/**
 * 在第 i 个位置插入 e (带头结点)
 * */
bool ListInsert(LinkList L, int i, ElemType e) {
    if (i < 1) return false;
    Node *p = L;
    for (int j = 0; p && j < i - 1; p = p->next, ++j);
    if (!p) return false;
    Node *s = (LinkList) malloc(sizeof(Node));
    s->data.data = e;
    s->next = p->next;
    p->next = s;
    return true;
}
