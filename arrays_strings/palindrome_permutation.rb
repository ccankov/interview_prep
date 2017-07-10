# Palindrome Permutation: Given a string, write a function to check if it is a permutation of a palin-
# drome. A palindrome is a word or phrase that is the same forwards and backwards. A permutation
# is a rearrangement of letters. The palindrome does not need to be limited to just dictionary words.

def palindrome_permutation(string)
  string = string.downcase.delete(' ')
  letter_counts = Hash.new { |counts, letter| counts[letter] = 0 }

  string.each_char { |ch| letter_counts[ch] += 1 }
  even_length = string.length.even?
  single_odd_count = letter_counts.values.select(&:odd?).length == 1
  return true if even_length && letter_counts.values.all?(&:even?)
  return true if single_odd_count && !even_length
  false
end

puts palindrome_permutation("Tact Coa")
puts palindrome_permutation("abbccc")
