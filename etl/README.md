# Extraction and Transformation of German n-grams and syllables.


## Ngrams
This section contains the sources and the code used to extract German n-grams and syllables.

Most of the ngrams haven been chosed according to  

https://kryptografie.de/kryptografie/kryptoanalyse/haeufigkeitsverteilung.htm

As for German bigrams and words only the 100 most frequent are mentioned, the missing 101-200 bigrams and have been supplemented with `de_word_final_ngrams.csv`  obtained from https://gist.github.com/gartenfeld/4ea0c5b4091f6fefb691c5b6ebd5d935,
which is a frequency table of the most common German ngrams/words. Unfortunately, it's not mentioned how the frequency table was built.

The missing 101-200 words have been supplemented with word list of "The German Professor" (https://www.thegermanprofessor.com/top-500-german-words/top-500-german-words-101-200/). The list derives from Randall Jones & Erwin Tschirner’s "A Frequency Dictionary of German. Core Vocabulary for Learners", which lists the 4034 (!) most commonly used words in German (https://www.amazon.com/exec/obidos/ASIN/0415316332/ref=nosim/thegermanprof-20).

R has then be used to extract the most 101-200 bigrams/words. 

Noticeably, for example the top 10 bigrams/words of kryptografie.de doesn't match gartenfeld's csv. One reason could be that gartenfeld's csv mainly organized the ngrams as endings.

Furthermore, as German words a frequently quite long. The ngram trainer has been extended by penta- and hexagramms. Those have been extracted of the above mentioned csv-file.

As I didn't find a fast solution to extract German ngrams as edmundlam for the French ngrams of Project Gutenberg, I stuck with the abov mentioned method.

## Syllables

The 200 most frequent syllables in German have been derived of a study from the University of Potsdam.

https://www.uni-potsdam.de/fileadmin/projects/treatmentlab/Dokumente/Silbenfrequenzen_TreatmentLab.pdf

The phonetic description has than be translated to written "speech" by ChatGPT 4o.
