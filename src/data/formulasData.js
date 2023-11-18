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
  {
    name: "FV",
    description: "Calculate future value of an investment",
    usage: "=FV(rate, nper, pmt, [pv], [type])",
  },
  {
    name: "RATE",
    description: "Calculate interest rate for a loan or investment",
    usage: "=RATE(nper, pmt, pv, [fv], [type], [guess])",
  },
  {
    name: "PRICE",
    description: "Calculate price of a security that pays periodic interest",
    usage:
      "=PRICE(settlement, maturity, rate, yld, redemption, frequency, [basis])",
  },
  {
    name: "GEOMEAN",
    description: "Calculate geometric mean",
    usage: "=GEOMEAN(number1, [number2], ...)",
  },
  {
    name: "CUMIPMT",
    description:
      "Calculate cumulative interest over a range of payment periods",
    usage: "=CUMIPMT(rate, nper, pv, start_period, end_period, type)",
  },
  {
    name: "CUMPRINC",
    description: "Calculate cumulative principal paid over a range of periods",
    usage: "=CUMPRINC(rate, nper, pv, start_period, end_period, type)",
  },
  {
    name: "PPMT",
    description:
      "Calculate payment on the principal for an investment based on constant payments and a constant interest rate",
    usage: "=PPMT(rate, per, nper, pv, [fv], [type])",
  },
  {
    name: "EFFECT",
    description: "Calculate the effective annual interest rate",
    usage: "=EFFECT(nominal_rate, npery)",
  },
  {
    name: "STOCKHISTORY",
    description: "Retrieve historical stock price data",
    usage:
      "=STOCKHISTORY(stock, start_date, [end_date], [interval], [headers], [property0], [property1], ...)",
  },
  { name: "PI", description: "Return the value of PI", usage: "=PI()" },
  {
    name: "POWER",
    description: "Return the result of a number raised to a power",
    usage: "=POWER(number, power)",
  },
  {
    name: "SQRT",
    description: "Return the square root of a number",
    usage: "=SQRT(number)",
  },
  {
    name: "NPER",
    description:
      "Calculate the number of periods for an investment based on periodic, constant payments and a constant interest rate",
    usage: "=NPER(rate, pmt, pv, [fv], [type])",
  },
  {
    name: "PV",
    description: "Calculate the present value of a loan or an investment",
    usage: "=PV(rate, nper, pmt, [fv], [type])",
  },
  {
    name: "TEXTJOIN",
    description:
      "Combine text from multiple ranges, and each item is separated by a delimiter",
    usage: "=TEXTJOIN(delimiter, ignore_empty, text1, [text2], ...)",
  },
  {
    name: "MID",
    description:
      "Return a specific number of characters from a text string starting at the position you specify",
    usage: "=MID(text, start_num, num_chars)",
  },
  {
    name: "TEXTSPLIT",
    description:
      "Split text into an array of text strings based on a delimiter",
    usage:
      "=TEXTSPLIT(text, [column_delimiter], [row_delimiter], [ignore_empty], [pad_with])",
  },
  {
    name: "INDIRECT",
    description: "Return the reference specified by a text string",
    usage: "=INDIRECT(ref_text, [a1])",
  },
  {
    name: "SEQUENCE",
    description:
      "Generate a list of sequential numbers in an array, such as 1, 2, 3, 4",
    usage: "=SEQUENCE(rows, [columns], [start], [step])",
  },
  {
    name: "LET",
    description: "Assign names to calculation results",
    usage: "=LET(name1, name_value1, [name2], [name_value2], ..., calculation)",
  },
  {
    name: "SCAN",
    description:
      "Scan a range or array and apply a lambda function to each item",
    usage: "=SCAN(initial_value, array, lambda)",
  },
  {
    name: "IPMT",
    description:
      "Calculate the interest payment for a given period for an investment based on periodic, constant payments and a constant interest rate",
    usage: "=IPMT(rate, per, nper, pv, [fv], [type])",
  },
  {
    name: "HSTACK",
    description: "Stack arrays horizontally",
    usage: "=HSTACK(array1, [array2], ...)",
  },
  {
    name: "VSTACK",
    description: "Stack arrays vertically",
    usage: "=VSTACK(array1, [array2], ...)",
  },
  {
    name: "Count between dates by age range",
    description: "Counts dates by age range",
    usage: "COUNTIFS, FIND, LEFT, RIGHT, SUMPRODUCT, TEXTBEFORE",
  },
  {
    name: "Count birthdays by year",
    description: "Counts the number of birthdays in a specific year",
    usage: "SUMPRODUCT, YEAR, COUNTIFS, BYROW, UNIQUE, SORT, LET",
  },
  {
    name: "Count cells between dates",
    description: "Counts cells that contain dates within a specified range",
    usage: "COUNTIFS, SUMPRODUCT",
  },

  {
    name: "Calculate running total",
    description: "Calculates a running total or cumulative sum",
    usage: "SUM, SCAN",
  },
  {
    name: "Count cells that contain formulas",
    description: "Counts cells containing formulas",
    usage: "SUMPRODUCT, ISFORMULA, NOT",
  },
  {
    name: "Subtotal by color",
    description: "Calculates a subtotal based on a specific cell color",
    usage: "SUMIF, COUNTIF",
  },

  {
    name: "Average and ignore errors",
    description: "Calculates the average of values, ignoring errors",
    usage: "AVERAGEIF, AGGREGATE, AVERAGE, IFERROR, FILTER",
  },
  {
    name: "Average by group",
    description: "Calculates the average within each group of a dataset",
    usage: "UNIQUE, AVERAGEIFS",
  },
  {
    name: "Average call time per month",
    description: "Calculates the average call time per month",
    usage: "AVERAGEIFS, EDATE, FILTER, AVERAGE, TEXT",
  },
];

export default formulasData;
