fruit = "apple banana mango"
cored_things = " "

def middle(a):
    length = len(a) - 1
    return (a[1:length])
print(middle("apple"))

def core(things):
    cored_things = " "
    things = things.split()
    for x in things:
        length = len(x) - 1
        cored_things += x[1:length] + " "
    return cored_things
print(core(fruit))
core(fruit)

'''
def split(things):
    things = things.split()
    return(things)
print(split(fruit))
'''

def example(x, y):
    return (x*x) + y
print(example(5, 4))

