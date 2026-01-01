import csv

def read_csv_range(filename, start_rank, end_rank):
    try:
        # Try both utf-8 and cp932 (Shift-JIS)
        for encoding in ['utf-8', 'cp932']:
            try:
                with open(filename, mode='r', encoding=encoding) as f:
                    reader = csv.reader(f)
                    header = next(reader)
                    print(f"Header: {header}")
                    for row in reader:
                        if not row: continue
                        # Assuming rank is the first column or index 0
                        # The previous grep showed "P-445" which is an ID.
                        # ID is usually at index 0. Let's find rows where ID is between P-450 and P-460
                        id_str = row[0]
                        if id_str.startswith("P-"):
                            try:
                                rank_val = int(id_str.split("-")[1])
                                if start_rank <= rank_val <= end_rank:
                                    print(f"ID: {id_str}, Name: {row[1]}, Summary: {row[2]}")
                            except:
                                pass
                return # If successful, stop
            except UnicodeDecodeError:
                continue
    except Exception as e:
        print(f"Error: {e}")

read_csv_range('C:/Users/kiku/Desktop/Contents/thinkers-700/thinkers_summary.csv', 450, 465)
