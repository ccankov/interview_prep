# One Away: There are three types of edits that can be performed on strings: insert a character,
# remove a character, or replace a character. Given two strings, write a function to check if they are
# one edit (or zero edits) away.

def one_away(str1, str2)
  return true if str1 == str2
  letter_tracker = Hash.new { |letters, char| letters[char] = 0 }

  str1.each_char do |ch|
    letter_tracker[ch] += 1
  end

  str2.each_char do |ch|
    letter_tracker[ch] -= 1 if letter_tracker[ch] > 0
  end

  letter_tracker.values.reduce(&:+) < 2
end

puts one_away('pale', 'ple')
puts one_away('pales', 'pale')
puts one_away('pale', 'bale')
puts one_away('pale', 'bake')
