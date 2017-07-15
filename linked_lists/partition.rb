# Partition: Write code to partition a linked list around a value x, such that all nodes less than x come
# before all nodes greater than or equal to x. If x is contained within the list, the values of x only need
# to be after the elements less than x (see below). The partition element x can appear anywhere in the
# "right partition"; it does not need to appear between the left and right partitions.

def partition(val, first_node)
  partition_boundary = first_node
  until partition_boundary.value < val
    partition_boundary = partition_boundary.next
  end

  current_node = first_node

  until current_node.nil?
    next_node = current_node.next
    if current_node.value < val && current_node != partition_boundary
      # Take current node out of the list
      current_node.prev.next = current_node.next
      current_node.next.prev = current_node.prev

      # Place current node immediately before partition_boundary
      partition_boundary.prev.next = current_node
      current_node.prev = partition_boundary.prev
      partition_boundary.prev = current_node
      current_node.next = partition_boundary
    else
      # Take current node out of the list
      current_node.prev.next = current_node.next
      current_node.next.prev = current_node.prev

      # Place current node immediately after partition_boundary
      partition_boundary.next.prev = current_node
      current_node.next = partition_boundary.next
      partition_boundary.next = current_node
      current_node.prev = partition_boundary
    end
    current_node = next_node
  end
end
