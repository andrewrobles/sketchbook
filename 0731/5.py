from processing_py import *

x = 10 
y = 600
app = App(800, 800)
app.strokeWeight(10)
app.line(x, y, x + 200, y-400)
app.line(x+100, y, x+300, y-400)
app.line(x+200, y, x+ 400,y-400)
app.line(x+300, y, x+500, y-400)
app.redraw()
