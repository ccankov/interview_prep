# @param {Integer[]} nums
# @return {String[]}
def find_relative_ranks(nums)
  sorted_scores = nums.sort.reverse
  nums.map do |num|
    rank_num = sorted_scores.index(num)
    rank_val = nil
    case rank_num
    when 0
      rank_val = 'Gold Medal'
    when 1
      rank_val = 'Silver Medal'
    when 2
      rank_val = 'Bronze Medal'
    else
      rank_val = (rank_num + 1).to_s
    end
    rank_val
  end
end

p find_relative_ranks([4, 5, 3, 2, 1])
