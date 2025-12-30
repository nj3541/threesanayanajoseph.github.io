import turtle
import math

screen = turtle.Screen()
screen.bgcolor("#040812")

t = turtle.Turtle()
t.speed(0)
t.width(2)
t.color("#00f0ff")

for i in range(400):
    t.forward(i * 0.8)
    t.left(59)

t.hideturtle()
turtle.done()
