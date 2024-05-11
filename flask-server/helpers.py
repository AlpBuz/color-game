import random

def nextColor():
    colors = ["red", "black", "green", "blue", "brown", "yellow", "pink", "purple"]
    newcolor = random.choice(colors)
    return newcolor



def nextWord(color):
    nextWord = ["red", "black", "green", "blue", "brown", "yellow", "pink", "purple"]
    newWord = random.choice(nextWord)

    #check to see if word and color are not the same
    while(newWord == color):
        newWord = random.choice(nextWord)
    return newWord