# CODE FILES ARE NOT COMPLETE YET DUE TO TIME LIMITATIONS. HOWEVER, IT PROVIDES A QUICK NOTICE ABOUT HOW THE PROJECT WILL WORK

# Not in use for now


import enchant
import nltk
import re

nltk.download('words')
words = set(nltk.corpus.words.words())

def dirtCleaning(text):
    d = enchant.Dict("en")
    text = re.sub(r"[^a-zA-Z0-9]+", " ", text.strip())
    splt = text.split(" ")
    tempArr = []

    for j in range(len(splt)):
        if(len(splt[j]) == 1):
            char = splt[j]
            tempArr.append(char)

    for x in range(len(tempArr)):
        splt.remove(tempArr[x])

    tempArr.clear()

    for b in range(len(splt)):
        sentence = splt[b]
        if(d.check(sentence) == False):
            tempArr.append(sentence)

    for y in range(len(tempArr)):
        splt.remove(tempArr[y])

    tempArr.clear()

    for v in range(len(splt)):
        sentence = splt[v]
        if(sentence.isdigit() == True):
            tempArr.append(sentence)

    for c in range(len(tempArr)):
        splt.remove(tempArr[c])
        

    for i in range(len(splt)):
        if(d.check(splt[i]) == False):
            newWord = d.suggest(splt[i])
            splt = newWord[0].lower()
        
    newText = " ".join(splt)

    newText = " ".join(w for w in nltk.wordpunct_tokenize(
        newText) if w.lower() in words or not w.isalpha())
    print(newText)

    
def startCleaning(text):
    dirtCleaning(text)
