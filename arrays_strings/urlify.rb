# URLify: Write a method to replace all spaces in a string with '%20: You may assume that the string
# has sufficient space at the end to hold the additional characters, and that you are given the "true"
# length of the string. (Note: If implementing in Java, please use a character array so that you can
# perform this operation in place.)

def urlify(string)
  queue = []
  string.each_char.with_index do |ch, i|
    next if queue.empty? && ch != ' '
    if ch == ' '
      queue += ['%', '2', '0']
    else
      queue << ch
    end
    string[i] = queue.shift
  end
  string
end
