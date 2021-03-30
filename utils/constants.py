# Constants for the project
FILE_URL = "https://www.bseindia.com/download/BhavCopy/Equity/{filename}_CSV.ZIP"

# Downloaded file name
FILE_NAME = "EQ{}"

# Column names to be considered from CSV
RESULT_HEADERS = ["SC_CODE", "SC_NAME", "OPEN", "HIGH", "LOW", "CLOSE"]

# Name of the Hashset which will hold CSV data
HASH_NAME = "SC_CODES"

# Holds the count of all SC_CODES
HASH_COUNT = "HASH_COUNT"

# Stores Last file process time
LAST_DOWNLOAD = "LAST_DOWNLOAD"

# Value of the key with which search is performed
SEARCH_FIELD = RESULT_HEADERS[1]
