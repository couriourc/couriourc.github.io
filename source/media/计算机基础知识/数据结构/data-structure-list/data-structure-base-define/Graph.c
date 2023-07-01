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
#include <intrin.h>

typedef struct Node {
    int data;
    struct Node *left;
    struct Node *right;
} TreeNode, *Tree;

int search(Tree root, int x) {
    int l, r, res = 0;
    if (!root) return res;
    if (!(root->data % x)) ++res;

    l = search(root->left, x);
    r = search(root->right, x);
    // 数据整合
    return res + l + r;
}

int main() {

    Tree root = (Tree) malloc(sizeof(TreeNode)),
            l1 = (Tree) malloc(sizeof(TreeNode)),
            r1 = (Tree) malloc(sizeof(TreeNode)),
            l2 = (Tree) malloc(sizeof(TreeNode)),
            r2 = (Tree) malloc(sizeof(TreeNode));
    root->data = 0;
    l1->data = 1;
    r1->data = 2;
    l2->data = 3;
    r2->data = 4;
    root->left = l1;
    root->right = r1;

    l1->left = l2;
    l1->right = NULL;
    l2->left = NULL;
    l2->right = NULL;

    r1->right = r2;
    r1->left = NULL;
    r2->left = NULL;
    r2->right = NULL;


    int res = search(root, 2);
    printf("%d", res);
    return 0;
}