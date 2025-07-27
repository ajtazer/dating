import re
import json

def parse_chat_line(line):
    # WhatsApp chat regex
    pattern = r'^\[(\d{1,2}/\d{1,2}/\d{2,4}), (\d{1,2}:\d{2}:\d{2}\s[APMapm\.]*)\] ([^:]+): (.+)$'
    match = re.match(pattern, line)
    if match:
        return {
            "datetime": f"{match.group(1)} {match.group(2)}",
            "sender": match.group(3).strip(),
            "message": match.group(4).strip()
        }
    return None


def convert_to_mistral_format(chat_lines, output_file):
    parsed = [parse_chat_line(line) for line in chat_lines]
    parsed = [p for p in parsed if p is not None]

    conversations = []
    i = 0
    while i < len(parsed) - 1:
        user_msg = parsed[i]
        bot_msg = parsed[i+1]
        
        # Only make pairs between 2 different people
        if user_msg['sender'] != bot_msg['sender']:
            instruction = f"{user_msg['sender']}: {user_msg['message']}"
            response = f"{bot_msg['sender']}: {bot_msg['message']}"
            text = f"<s>[INST] {instruction} [/INST] {response} </s>"
            conversations.append({"text": text})
            i += 2  # move to next pair
        else:
            i += 1  # skip same-speaker continuation

    with open(output_file, 'w', encoding='utf-8') as f:
        json.dump(conversations, f, ensure_ascii=False, indent=2)

    print(f"✅ Converted {len(conversations)} pairs to {output_file}")

# Example usage
if __name__ == "__main__":
    with open("arshi.txt", "r", encoding="utf-8") as f:
        lines = f.readlines()
    
    convert_to_mistral_format(lines, "mistral_chat_data.jsonl")
