# String Rotation: Assume you have a method isSubstring which checks if one word is a substring
# of another. Given two strings, s1 and s2, write code to check if s2 is a rotation of s1 using only one
# call to isSubstring (e.g., "waterbottle" is a rotation of "erbottlewat").

def string_rotation(s1, s2)
  return false if s1.length != s2.length
  double_s1 = s1 + s1
  isSubstring(double_s1, s2)
end
