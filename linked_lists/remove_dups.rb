# Remove Dups: Write code to remove duplicates from an unsorted linked list.
# How would you solve this problem if a temporary buffer is not allowed?

def remove_dups(first_node)
  seen_vals = []
  node = first_node
  until node.nil?
    if seen_vals.include?(node.value)
      node.prev.next = node.next
      node.next.prev = node.prev
    else
      seen_vals << node.value
    end
    node = node.next
  end
end

def remove_dups_no_buffer(first_node)
  current_node = first_node
  until current_node.nil?
    runner_node = current_node.next
    until runner_node.nil?
      if current_node.value == runner_node.value
        runner_node.prev.next = runner_node.next
        runner_node.next.prev = runner_node.prev
      end
      runner_node = runner_node.next
    end
    current_node = current_node.next
  end
end
