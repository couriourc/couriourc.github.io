/***********************************************************************
  module:   reverse_link_list.c
  author:   CouriourC
 ***********************************************************************/
#include "utils.h"

void solution(LinkList L) {
    // TODO-Coding
    LinkList pre = NULL;
    LinkList cur = L;
    for (; cur;) {
        if (!cur->next) break;
        LinkList tmp = cur->next->next;
        LinkList preTmp = cur->next;
        cur->next->next = cur;
        cur->next = pre;
        pre = preTmp;
        cur = tmp;
    }
    *L = *pre;
}

LinkList solution2(LinkList L) {
    if (!L || !L->next) return L;
    // 假定后面的已经排好了
    LinkList now = solution2(L->next);
    // 对于递归子问题：cur->next->NULL
    // cur: next->next = pre
    // pre: cur->NULL
    L->next->next = L;
    L->next = NULL;

    return now;
}

LinkList solution3(LinkList L) {
    // 采用 头插法
    LinkList head = L;
    for (; head; ) {
        LinkList tmp = head->next->next;
        head->next->next =head;
        head = tmp;

    }
    return L;
}

int main(void) {
    int arr[] = {1, 2, 3, 4, 5};
    LinkList list = initLinkList(arr, length(arr));

    printf("\n======= Debug ING ======\n");
    list = solution2(list);
    printf("\n======= Debug END ======\n");

    printf("\n======= Result ING ======\n");
    printLinkList(list);
    printf("\n======= Result ING ======\n");
    printLinkList(list);

    return 0;
}