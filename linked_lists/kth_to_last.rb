# Return Kth to Last: Implement an algorithm to find the kth to last element of a singly linked list.

def kth_to_last(k, first_node)
  length = 0
  current_node = first_node
  until current_node.nil?
    length += 1
    current_node = current_node.next
  end
  target = length - k
  return nil if target < 1
  current_node = first_node
  target.times do
    current_node = current_node.next
  end
  current_node.value
end
