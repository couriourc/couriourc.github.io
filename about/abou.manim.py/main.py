#!/usr/bin/python3.6
# -*- coding: utf-8 -*-
#
# Copyright (C) 2021 #
# @Time    : 2023/2/19 0019 15:01
# @Author  : CouriourC
# @Email   : godakid@outlook.com
# @File    : main
# @Software: PyCharm


from manimlib import *


class NumpyStage(Scene):
    CONFIG = {}

    def construct(self) -> None:
        profile = Text('Numpy')
        name = Text('Numpy N')
        circle = Circle()
        circle.set_fill(ORANGE, 1)
        line = Line(ORIGIN, RIGHT * FRAME_WIDTH, buff=1)
        line.set_fill(BLUE)
        number = DecimalNumber(10, text_config={"foot": "monospace"}).scale(2)

        g = VGroup(profile, name, ).arrange(RIGHT)
        self.add(circle, line, number)
        self.play(Write(profile))
        self.play(Write(name))
        self.play(CountInFrom(number))
        self.wait()
        circle.move_to(line.get_start())
        self.play(MoveAlongPath(
            circle,
            line
        ))
        self.play(Swap(name, profile))
        self.wait()
        self.play(FadeOut(profile))


if __name__ == "__main__":
    from os import system

    system("manimgl {} demo -c black".format(__file__))
