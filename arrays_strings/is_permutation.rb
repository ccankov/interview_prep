#  Check Permutation:
#  Given two strings, write a method to decide if one is a permutation of the other.

def permutations?(str1, str2)
  str1.chars.sort == str2.chars.sort
end

puts permutations?("aabc", "caab")
puts permutations?("", "stufff")
