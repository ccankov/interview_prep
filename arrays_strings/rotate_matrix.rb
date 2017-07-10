# Rotate Matrix: Given an image represented by an NxN matrix, where each pixel in the image is 4
# bytes, write a method to rotate the image by 90 degrees. Can you do this in place?

def rotate_matrix(image_matrix)
  reverse_matrix = image_matrix.reverse
  rotated_matrix = []
  (0...image_matrix.length).each do |i|
    col = reverse_matrix.map { |row| row[i] }
    rotated_matrix[i] = col
  end
  rotated_matrix
end

def rotate_matrix_in_place(image_matrix)
  n = image_matrix.length
  (0...(n / 2)).each do |i|
    (i...(n - 1 - i)).each do |j|
      vals_to_shift = []
      vals_to_shift << image_matrix[i][j]
      vals_to_shift << image_matrix[n - 1 - j][i]
      vals_to_shift << image_matrix[n - 1 - i][n - 1 - j]
      vals_to_shift << image_matrix[j][n - 1 - i]
      vals_to_shift = vals_to_shift.rotate(1)
      image_matrix[i][j] = vals_to_shift.shift
      image_matrix[n - 1 - j][i] = vals_to_shift.shift
      image_matrix[n - 1 - i][n - 1 - j] = vals_to_shift.shift
      image_matrix[j][n - 1 - i] = vals_to_shift.shift
    end
  end
  image_matrix
end

p rotate_matrix([[1, 2, 3], [4, 5, 6], [7, 8, 9]]) == [[7, 4, 1], [8, 5, 2], [9, 6, 3]]
p rotate_matrix_in_place([[1, 2, 3], [4, 5, 6], [7, 8, 9]]) == [[7, 4, 1], [8, 5, 2], [9, 6, 3]]
