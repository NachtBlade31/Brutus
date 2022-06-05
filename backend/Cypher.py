class Cypher:
    
    def encrypt(self,message, shift):
    
        cipher = ''
        for char in message:
            if char == ' ':
                cipher = cipher + char
            elif  char.isupper():
                cipher = cipher + chr((ord(char) + shift - 65) % 26 + 65)
            else:
                cipher = cipher + chr((ord(char) + shift - 97) % 26 + 97)

        return cipher


    def decrypt(self,cipher, shift):
    
        original_text = ''
        for char in cipher:
            if char == ' ':
                original_text = original_text + char
            elif  char.isupper():
                original_text = original_text + chr((ord(char) - shift - 65) % 26 + 65)
            else:
                original_text = original_text + chr((ord(char) - shift - 97) % 26 + 97)
                      
        return original_text
