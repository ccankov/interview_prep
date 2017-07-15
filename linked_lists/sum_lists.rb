# Sum Lists: You have two numbers represented by a linked list, where each node contains a single
# digit. The digits are stored in reverse order, such that the 1's digit is at the head of the list. Write a
# function that adds the two numbers and returns the sum as a linked list.

def sum_lists(list_one_head, list_two_head)
  carry = false

  list_one_current = list_one_head
  list_two_current = list_two_head
  sum_list_head = Node.new(:head, nil)
  sum_list_current = sum_list_head

  until list_one_current.nil? && list_two_current.nil?
    list_one_digit = list_one_current ? list_one_current.value : 0
    list_two_digit = list_two_current ? list_two_current.value : 0
    sum_digits = list_one_digit + list_two_digit
    sum_digits += 1 if carry
    carry = (sum_digits > 10)

    sum_list_current.next = Node.new(sum_digits % 10, nil)
    sum_list_current = sum_list_current.next
    list_one_current = list_one_current.next if list_one_current
    list_two_current = list_two_current.next if list_two_current
  end
  sum_list_head = sum_list_head.next
  sum_list_head.prev = nil
  sum_list_head
end
