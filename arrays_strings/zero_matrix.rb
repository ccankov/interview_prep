# Zero Matrix: Write an algorithm such that if an element in an MxN matrix is 0, its entire row and
# column are set to O.

def zero_matrix(matrix)
  zero_rows = Hash.new { |hash, row_num| hash[row_num] = false }
  zero_cols = Hash.new { |hash, row_num| hash[row_num] = false }
  matrix.each_with_index do |row, i|
    row.each_with_index do |val, j|
      zero_rows[i] = true if val.zero?
      zero_cols[j] = true if val.zero?
    end
  end
  zero_rows.keys.each do |row_num|
    matrix[row_num] = matrix[row_num].map { |_| 0 }
  end
  zero_cols.keys.each do |col_num|
    matrix.each_index do |row_num|
      matrix[row_num][col_num] = 0
    end
  end
  matrix
end
