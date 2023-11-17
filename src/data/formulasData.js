const formulasData = [
  // Previously provided formulas
  {
    name: "SUM",
    description: "Adds a series of numbers",
    usage: "=SUM(A1:A10)",
  },
  {
    name: "AVERAGE",
    description: "Calculates the average of a series of numbers",
    usage: "=AVERAGE(A1:A10)",
  },
  {
    name: "MAX",
    description: "Finds the maximum value in a range",
    usage: "=MAX(A1:A10)",
  },
  {
    name: "MIN",
    description: "Finds the minimum value in a range",
    usage: "=MIN(A1:A10)",
  },

  // Sourced from Simplilearn&#8203;``【oaicite:23】``&#8203;&#8203;``【oaicite:22】``&#8203;&#8203;``【oaicite:21】``&#8203;&#8203;``【oaicite:20】``&#8203;&#8203;``【oaicite:19】``&#8203;&#8203;``【oaicite:18】``&#8203;&#8203;``【oaicite:17】``&#8203;&#8203;``【oaicite:16】``&#8203;&#8203;``【oaicite:15】``&#8203;&#8203;``【oaicite:14】``&#8203;&#8203;``【oaicite:13】``&#8203;&#8203;``【oaicite:12】``&#8203;&#8203;``【oaicite:11】``&#8203;&#8203;``【oaicite:10】``&#8203;&#8203;``【oaicite:9】``&#8203;&#8203;``【oaicite:8】``&#8203;&#8203;``【oaicite:7】``&#8203;&#8203;``【oaicite:6】``&#8203;&#8203;``【oaicite:5】``&#8203;&#8203;``【oaicite:4】``&#8203;&#8203;``【oaicite:3】``&#8203;&#8203;``【oaicite:2】``&#8203;&#8203;``【oaicite:1】``&#8203;&#8203;``【oaicite:0】``&#8203;
  {
    name: "COUNT",
    description: "Counts the number of cells that contain numbers",
    usage: "=COUNT(A2:A10)",
  },
  {
    name: "SUBTOTAL",
    description: "Returns a subtotal in a list or database",
    usage: "=SUBTOTAL(function_num, range)",
  },
  {
    name: "MOD",
    description: "Returns the remainder from division",
    usage: "=MOD(number, divisor)",
  },
  {
    name: "POWER",
    description: "Returns the result of a number raised to a power",
    usage: "=POWER(number, power)",
  },
  {
    name: "CEILING",
    description: "Rounds a number up to the nearest multiple of significance",
    usage: "=CEILING(number, significance)",
  },
  {
    name: "FLOOR",
    description: "Rounds a number down to the nearest multiple of significance",
    usage: "=FLOOR(number, significance)",
  },
  {
    name: "CONCATENATE",
    description: "Joins two or more text strings into one string",
    usage: "=CONCATENATE(text1, [text2], ...)",
  },
  {
    name: "LEN",
    description: "Returns the number of characters in a text string",
    usage: "=LEN(text)",
  },
  {
    name: "REPLACE",
    description: "Replaces characters within text",
    usage: "=REPLACE(old_text, start_num, num_chars, new_text)",
  },
  {
    name: "SUBSTITUTE",
    description: "Substitutes new text for old text in a text string",
    usage: "=SUBSTITUTE(text, old_text, new_text, [instance_num])",
  },
  {
    name: "LEFT",
    description:
      "Returns the specified number of characters from the start of a text string",
    usage: "=LEFT(text, [num_chars])",
  },
  {
    name: "RIGHT",
    description:
      "Returns the specified number of characters from the end of a text string",
    usage: "=RIGHT(text, [num_chars])",
  },
  {
    name: "MID",
    description:
      "Returns a specific number of characters from a text string starting at the position you specify",
    usage: "=MID(text, start_num, num_chars)",
  },
  {
    name: "UPPER",
    description: "Converts text to uppercase",
    usage: "=UPPER(text)",
  },
  {
    name: "LOWER",
    description: "Converts text to lowercase",
    usage: "=LOWER(text)",
  },
  {
    name: "PROPER",
    description:
      "Converts text to proper case, the first letter in each word to uppercase, all others to lowercase",
    usage: "=PROPER(text)",
  },
  {
    name: "NOW",
    description: "Returns the current date and time",
    usage: "=NOW()",
  },
  { name: "TODAY", description: "Returns the current date", usage: "=TODAY()" },
  {
    name: "TIME",
    description: "Returns the serial number of a particular time",
    usage: "=TIME(hour, minute, second)",
  },
  {
    name: "HOUR",
    description: "Converts a serial number to an hour",
    usage: "=HOUR(serial_number)",
  },
  {
    name: "MINUTE",
    description: "Converts a serial number to a minute",
    usage: "=MINUTE(serial_number)",
  },
  {
    name: "SECOND",
    description: "Converts a serial number to a second",
    usage: "=SECOND(serial_number)",
  },
  {
    name: "DATEDIF",
    description:
      "Calculates the number of days, months, or years between two dates",
    usage: '=DATEDIF(start_date, end_date, "unit")',
  },
];

export default formulasData;
