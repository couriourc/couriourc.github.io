//
// Created by Administrator on 2022/10/31 0031.
//
//
//#include "graph.h"
//
//void testGraph() {
//
//    Vertex v = CreateGraph(12);
//    Vertex v1 = CreateGraph(12);
//    Vertex v2 = CreateGraph(12);
//    Vertex v3 = CreateGraph(12);
//    Vertex v4 = CreateGraph(12);
//
//    Edge e;
//    e.from = v;
//    e.to = v1;
//
//    Edge e1;
//    e1.from = v1;
//    e1.to = v2;
//
//    Edge e2;
//
//    e2.from = v2;
//    e2.to = v4;
//
//    Edge e3;
//
//    e3.from = v3;
//    e3.to = v4;
//
//    Edge e4;
//
//    e4.from = v4;
//    e4.to = v2;
//
//
//    AddEdge(v, e1);
//    AddEdge(v2, e2);
//    AddEdge(v3, e3);
//    AddEdge(v4, e4);
//
//    Vertex vs[] = {v, v1, v2, v3, v4};
//    for (int i = 0; i < length(vs); ++i) {
//        printf("%d", v.data);
//    };
//
//
//}
#include <stdio.h>

typedef struct Node {
    int data;
    struct Node *left;
    struct Node *right;
} TreeNode, *Tree;

int search(Tree root, int x, int res) {
    if (!root) return res;
    if (!(root->data) % x) {
        search(root->left, x, res + 1);
        search(root->right, x, res + 1);
    } else {
        search(root->left, x, res);
        search(root->right, x, res);
    }
    return res;
}

int main() {
    Tree root,
            l1 = NULL,
            r1 = NULL,
            l2 = NULL,
            r2 = NULL;

    search(root, 2, 0);
    return 0;
}