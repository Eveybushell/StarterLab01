Location: receipt.ts const ITEMS
Issue: extra comma in line 12
Explanation: There is an extra line and comma added after the first comma in eggs
Suggested Fix: Remove extra comma and line
Status: Fixed

Location: receipt.ts addItem
Issue: syntax issue with name and price
Explanation: Name and price should use a colon rather than an equals sign
Suggested Fix: Replace equals signs with colons
Status: Fixed

Location: receipt.ts addItem
Issue: allows negative prices
Explanation: There is no check against an item being added with a negative price
Suggested Fix: Add a conditional check for only positive items and throw an error otherwise
Status: Fixed

Location: receipt.ts deleteItem
Issue: incorrect index extraction
Explanation: indexOf cannot be used with just a name property when the entire object is stored.
Suggested Fix: Use findIndex and check that -1 is not returned
Status: Fixed

Location: receipt.ts deleteItem
Issue: incorrect removal implementation
Explanation: The item index is extracted, but not used because the array is popped rather than the item being removed via index
Suggested Fix: Use ITEMS.splice(idx)
Status: Fixed

Location: receipt.ts deleteItem
Issue: syntax issue with ITEMS.indexOf
Explanation: indexOf has a new string assigned in its parameter, not the string given it
Suggested Fix: Remove the quotes around name
Status: Fixed

Location: receipt.ts total
Issue: syntax issue with for loop
Explanation: Loop should specify ITEMS so it includes all items in list
Suggested Fix: Replace 3 with ITEMS and replace ITEMS[i] with i
Status: Fixed

Location: receipt.ts total
Issue: Uses function name as variable
Explanation: total inside function needs to be replaced with a new instantiated variable
Suggested Fix: Instantiate new variable such as 'let amount = 0' and replace the 'total's in function with amount
Status: Fixed

Location: receipt.ts total
Issue: Possible format issue
Explanation: Because we are working in dollars and cents, it would be ideal to return the total with two decimal places
Suggested Fix: Change return to include Number constructor plus toFixed(2) method
Status: Fixed

Location: receipt.ts tax
Issue: incorrect tax calculation
Explanation: Taxes are not generally a flat rate, but are a multiplicative factor
Suggested Fix: Create a new number variable from total and add it to itself when multiplied by the taxRate
Status: Fixed

Location: receipt.ts tax
Issue: Possible format issue
Explanation: This returns in dollars and cents and should reflect that. The return should be to two decimals
Suggested Fix: Change return to include Number constructor plus toFixed(2) method
Status: Fixed

Location: receipt.ts tax
Issue: allows negative taxes
Explanation: There is no check against a negative tax rate
Suggested Fix: Add a conditional check for only positive tax rates and throw an error otherwise
Status: Fixed

Location: receipt.ts printReceipt
Issue: synxtax issues in console.log
Explanation: The expected Tax and Total logs end in a double quote and the list of items has a single quote rather than the needed back tick
Suggested Fix: Replace the double quotes in Tax and Total console.logs and the single quote with the needed back tick
Status: Fixed

Location: receipt.ts printReceipt
Issue: for loop is misconstructed
Explanation: ITEMS[i][name] is not the correct method. i is already instantiated so the name can be pulled directly from it.
Suggested Fix: Replace ITEMS[i][name] and ITEMS[i][price] with i.name and i.price or preferably rename i to item for readability.
Status: Fixed

Location: receipt.ts printReceipt
Issue: Tax is incorrectly calculated
Explanation: Tax shows the tax rate, not the amount of tax based on the items
Suggested Fix: Either create new function calculating the amount of tax or do the calculation within this function. This should equal the total * the taxRate
Status: Fixed

Location: receipt.ts printReceipt
Issue: syntax issue with for loop
Explanation: Added an extra end curly brace when listing items
Suggested Fix: Remove the extra curly brace
Status: Fixed

Location: receipt.ts printReceipt
Issue: syntax issue with total before tax
Explanation: total function is missing empty parantheses
Suggested Fix: Add empty parantheses next to total
Status: Fixed

Location: receipt.ts printReceipt
Issue: Total with tax has syntax issue
Explanation: the String constructor is inside of the tax parameter
Suggested Fix: Move the String constructor to encompass the entire tax function call
Status: Fixed

Location: receipt.ts printReceipt
Issue: syntax issue with logged tax and total
Explanation: An added + is included when it should not be there
Suggested Fix: Remove the + and spaces around it to reflect the pattern on the subtotal
Status: Fixed

Location: receipt.ts printReceipt
Issue: Price of items displays without dollar/cents formatting
Explanation: Items on receipts typically are formatted to two decimals.
Suggested Fix: Add a toFixed(2) to the prices
Status: Fixed

Location: receipt.ts printReceipt
Issue: Listed tax amount displays without dollar/cents formatting
Explanation: Tax amount typically is formatted to tow decimals.
Suggested Fix: Add toFixed(2) to the taxAmount and remove the String constructor
Status: Fixed

Location: receipt.ts printReceipt
Issue: allows negative tax rate
Explanation: There is no check against a negative tax rate
Suggested Fix: Add a conditional check for only positive tax rates and throw an error otherwise
Status: Fixed

Example of Root cause to Failure using tax function:
Root cause: Tax is not specified to be a multiplicative tax based on item price
Error: Developer is unaware of how taxes should be handled
Defect: Tax function's calculations are incorrect
Failure: Tax amount is wrong which means that the printReceipt output will be wrong and depending on how this program is handled, a customer could be mischarged.