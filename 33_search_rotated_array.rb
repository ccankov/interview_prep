# @param {Integer[]} nums
# @param {Integer} target
# @return {Integer}
def search(nums, target)
  start_idx = 0
  (1...nums.length).each do |i|
    if nums[i] < nums[i - 1]
      start_idx = i
      break
    end
  end

  binary_ring_search(nums, target, start_idx)
end

def binary_ring_search(array, target, offset)
  return -1 if array.empty?
  midpoint = ((array.length / 2) + offset) % array.length
  midval = array[midpoint]

  case target <=> midval
  when -1
    subarr = nil
    if midpoint < offset
      subarr = array[offset...array.length] + array[0...midpoint]
    else
      subarr = array[offset...midpoint]
    end
    sub_call = binary_ring_search(subarr, target, 0)
    return -1 if sub_call == -1
    return (sub_call + offset) % array.length
  when 0
    return midpoint
  when 1
    subarr = nil
    if midpoint < offset
      subarr = array[(midpoint + 1)...offset]
    else
      subarr = array[(midpoint + 1)...array.length] + array[0...offset]
    end
    sub_call = binary_ring_search(subarr, target, 0)
    return -1 if sub_call == -1
    return (sub_call + midpoint + 1) % array.length
  end
end

p search([4, 5, 6, 7, 0, 1, 2], 7)
