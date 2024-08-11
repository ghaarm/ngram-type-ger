# https://gist.github.com/gartenfeld/4ea0c5b4091f6fefb691c5b6ebd5d935
ngrams <- read.csv( "de_word_final_ngrams.csv", header = TRUE, sep = "," )

saveRDS(ngrams, file = "ngrams.rds")

ngrams_rds <- readRDS("ngrams.rds")

bigrams_top_100_200 <- ngrams_rds %>%
  arrange(desc(ngram_weight)) %>%
  filter(length == 2) %>%
  slice(101:200) %>%
  select(ending)

nrow(bigrams_top_100_200)

print(bigrams_top_100_200)

bigrams_top_200_mit_words <- bigrams %>%
 arrange(desc(ngram_weight)) %>%
    slice(1:200) %>%
    select(ending, top, top2, top3)

print(bigrams_top_200_mit_words)

words_top_100_200 <- ngrams_rds %>%
  filter(is_word == 1) %>%
  arrange(desc(ngram_weight)) %>%
  slice(101:200) %>%
  select(ending)

print(words_top_100_200)

words_top_200_mit_words <- ngrams_rds %>%
  filter(is_word == 1) %>%
  arrange(desc(ngram_weight)) %>%
  slice(1:200) %>%
  select(ending, top, top2, top3)

print(words_top_200_mit_words)
