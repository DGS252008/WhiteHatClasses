def countWordsFromFile():
    wordCount = 0
    fileLocation = input("Enter file location: ")
    file = open(fileLocation, 'r')
    for line in file:
        words = line.split()
        print(words)
        wordCount = wordCount + len(words)
    print(wordCount)

countWordsFromFile()