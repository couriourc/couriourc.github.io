//
// Created by Administrator on 2022/10/28 0028.
//

#ifndef DATA_STRUCTURE_LIST_STACK_H

#define DATA_STRUCTURE_LIST_STACK_H

typedef struct {
    // 执行初始化栈
    int *data;
    int top;
    int MAXSIZE;
} SeqStack;

/* Start 定义 顺序栈操作 */
int isEmpty(SeqStack stack) {
    return stack.top < 0;
}

void InitStack(SeqStack stack) {
    if (!stack.MAXSIZE) return;
    stack.data = (int *) malloc(sizeof(int) * stack.MAXSIZE);
}

int isFull(SeqStack stack) {
    return stack.top == stack.MAXSIZE;
}

int Push(SeqStack *stack, int data) {
    // 如果栈满了
    if (isFull(*stack)) return 0;
    // 否则 top ++ ，并且设置当前元素
    stack->data[++(stack->top)] = data;
    return 1;
}

int Pop(SeqStack *stack) {
    // 如果栈是空的
    if (isEmpty(*stack)) return -1;
    // 否则 取出元素，并且 top --
    return stack->data[(stack->top)--];
}

int Top(SeqStack *stack) {
    if (isEmpty(*stack)) return -1;
    return stack->data[stack->top];
}

int Size(SeqStack stack) {
    if (isEmpty(stack)) return -1;
    return stack.MAXSIZE - stack.top;
}
/* END 定义 顺序栈操作 */
/* Start 定义 链栈操作 */
#include "linklist.h"

typedef struct {
    Node *data;
    int length;
} LinkStack;


#endif //DATA_STRUCTURE_LIST_STACK_H
