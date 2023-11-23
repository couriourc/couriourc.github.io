//
// Created by Administrator on 2022/10/21 0021.
//

#ifndef DATA_STRUCTURE_LIST_LINKLIST_H

#define DATA_STRUCTURE_LIST_LINKLIST_H

#endif //DATA_STRUCTURE_LIST_LINKLIST_H

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

// 创建节点
Node *createNode(int data) {
    Node *node = (Node *) malloc(sizeof(Node));
    node->data.data = data;
    node->next = NULL;
    return node;
}

// 创建链表
LinkList createLinkList() {
    return createNode(0);
}


LinkList initLinkList(int *arr, int length) {
    LinkList head = createLinkList();
    Node *cur = head;
    head->data.data = arr[0];
    for (int i = 1; i < length; ++i) {
        cur->next = createNode(arr[i]);
        cur = cur->next;
    }
    return head;
}

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
    Node *s = (Node *) malloc(sizeof(Node));
    s->data.data = e;
    s->next = p->next;
    p->next = s;
    return true;
}

