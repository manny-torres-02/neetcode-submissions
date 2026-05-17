class Solution:
    def isValid(self, s: str) -> bool:
        
        # build a dictionary of each item 
        # Stack is a last in First out data structure . 
        # ideal that each closeing bracket has an opening bracket. 

        #create a new stack - this is the placeholder to hold everything 
        stack =[]
        #Dictionary 
        #{'}':'{', ')': '(', ']':'[' }

        my_dict = {'}':'{', ')': '(', ']':'[' }
        
        #cycle tghrough each section in string. 
        for i in s:
            #discern if character is an opening bracket/item
            #if statement 
            if i == '{' or i == '(' or i =='[':
                #push i onto the stack 
                stack.append(i)
            #else - character is be a closing bracket 
            #take the value at current index in s, 
            #and check if the value exists in 
            #the keys of the dict.  
            elif i in my_dict.keys() : 
                #if stack - checks if there is one element in the stack 
                #stack[-1] - this can throw an error if there is no element at the top 
                # of the stack to compare 
                if stack and stack[-1] in my_dict[i]:
                #stack[-1] - access the last element of the stack
                #Last in First out 
                #* Top of stack matches opening bracket, pop the top of the stack
                    stack.pop()
                else :
                #return false - this means that the brackets dont match or the stack is empty 
                    return False
            else:
                return False
        return len(stack) == 0

