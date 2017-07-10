#   Is Unique:
#   Implement an algorithm to determine if a string has all unique characters.
#   What if you cannot use additional data structures?

class String
  def unique?
    char_hash = Hash.new { |hash, key| hash[key] = 0 }

    self.each_char do |ch|
      char_hash[ch] += 1
    end

    char_hash.values.all? { |val| val == 1 }
  end
end
