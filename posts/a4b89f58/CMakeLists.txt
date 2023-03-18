cmake_minimum_required(VERSION 3.19)
project(data_structure_list C)

set(CMAKE_C_STANDARD 11)

include_directories(.)

file(GLOB_RECURSE files *.c)
foreach (file ${files})
    string(REGEX REPLACE ".+/(.+)\\..*" "\\1" exe ${file})
    add_executable(${exe} ${file} data-structure-base-define/linklist.h data-structure-base-define/stack.h data-structure-base-define/data-structure-base-define.h data-structure-base-define/tree.h data-structure-base-define/queue.h data-structure-base-define/graph.h)
    message(\ \ \ \ --\ src/${exe}.c\ will\ be\ compiled\ to\ bin/${exe})
endforeach ()