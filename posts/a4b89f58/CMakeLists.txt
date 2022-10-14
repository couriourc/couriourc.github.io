cmake_minimum_required(VERSION 3.19)
project(data_structure_list C)

set(CMAKE_C_STANDARD 11)

include_directories(.)

add_executable(data_structure_list
        2023-p18-01-order-array-delete-x.c
        utils.h)
