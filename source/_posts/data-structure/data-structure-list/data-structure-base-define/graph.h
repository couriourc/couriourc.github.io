//
// Created by Administrator on 2022/10/29 0029.
//
#include "malloc.h"
#include "utils.h"
#ifndef DATA_STRUCTURE_LIST_GRAPH_H
#define DATA_STRUCTURE_LIST_GRAPH_H

typedef struct Vertex {
    int data;
    int capacity;
    struct Edge *edges;
} Vertex;
typedef struct Edge {
    Vertex from;
    Vertex to;
} Edge;

Vertex CreateGraph(int edgeCapacity) {
    Vertex v;
    v.capacity = edgeCapacity;
    v.edges = (struct Edge *) malloc(sizeof(struct Edge) * edgeCapacity);
    return v;
}

void AddEdge(Vertex v, Edge e) {
    if (!v.capacity) return;
    v.edges[v.capacity--] = e;
}


#endif //DATA_STRUCTURE_LIST_GRAPH_H
