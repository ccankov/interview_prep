# String Compression: Implement a method to perform basic string compression using the counts
# of repeated characters. For example, the string aabcccccaaa would become a2b1c5a3. If the
# "compressed" string would not become smaller than the original string, your method should return
# the original string. You can assume the string has only uppercase and lowercase letters (a - z).

def string_compression(string)
  compressed = ''
  cur_char = ''
  cur_count = 0
  string.each_char do |ch|
    if ch == cur_char
      cur_count += 1
    else
      compressed << "#{cur_char}#{cur_count}" unless cur_count == 0
      cur_char = ch
      cur_count = 1
    end
  end
  compressed << "#{cur_char}#{cur_count}" unless cur_count == 0
  compressed.length < string.length ? compressed : string
end

puts string_compression('aabcccccaaa') == 'a2b1c5a3'
