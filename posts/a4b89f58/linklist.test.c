/***********************************************************************
  module:   linklist.test
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

int main(void) {
    int arr[] = {1, 2, 3, 4, 5};
    LinkList list = initLinkList(arr, length(arr));

    printf("\n======= Debug ING ======\n");
    solution(list);
    printf("\n======= Debug END ======\n");

    printf("\n======= Result ING ======\n");
    printLinkList(list);
    printf("\n======= Result ING ======\n");
    printLinkList(list);

    return 0;
}