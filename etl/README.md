# Extraction and Transformation of German n-grams

This section contains the sources and the code used to extract German n-grams.

Most of the ngrams haven been chosed according to  

https://kryptografie.de/kryptografie/kryptoanalyse/haeufigkeitsverteilung.htm

As for German bigrams and words only the 100 most frequent are mentioned, the missing 101-200 bigrams and words have been supplemented with `de_word_final_ngrams.csv`  obtained from https://gist.github.com/gartenfeld/4ea0c5b4091f6fefb691c5b6ebd5d935,
which is a frequency table of the most common German ngrams/words. Unfortunately, it's not mentioned how the frequency table was built.

R has then be used to extract the most 101-200 bigrams/words. 

Noticeably, for example the top 10 bigrams/words of kryptografie.de doesn't match gartenfeld's csv. One reason could be that gartenfeld's csv mainly organized the ngrams as endings.

As I didn't find a fast solution to extract German ngrams as edmundlam for the French ngrams of Project Gutenberg, I stuck with the abov mentioned method.