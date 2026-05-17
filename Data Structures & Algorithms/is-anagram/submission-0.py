class Solution:
    def isAnagram(self, s: str, t: str) -> bool:
        
        #1 check that the length of both strings is the same 
        
        #2 sort both strings 

        #2 a - set both to lowercase 

        #3 set sorted s == to sorted t and check if they are they same 

        s_sorted = ''.join(sorted(s.lower()))
        t_sorted = ''.join(sorted(t.lower()))

        if len(s_sorted) != len(t_sorted):
            return False 

        if s_sorted == t_sorted:
            return True
        else: 
            return False
        