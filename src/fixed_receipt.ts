// Program requirements:
// Items can be added to the grocery list.
// Items can be deleted from the grocery list.
// The subtotal is calculated without tax.
// The total is calculated with tax.
// A receipt can be printed.

export const ITEMS = [
  { name: "paper towels", price: 21.99 },
  { name: "sandwich", price: 8.75 },
  { name: "eggs", price: 6.75 },
  { name: "avocado oil", price: 10.0 },
];

export function addItem(name: string, price: number) {
  if (price < 0) {
    throw new Error("Item cannot have negative price");
  }
  const newItem = { "name": name, "price": price };
  ITEMS.push(newItem);
}

export function deleteItem(name: string) {
  const idx = ITEMS.findIndex(item => item.name === name);
  if (idx !== -1){
    ITEMS.splice(idx, 1);
}
  return ITEMS;
}

export function total() {
  let amount = 0;
  for (const item of ITEMS) {
    amount = amount + item.price;
  }
  return Number(amount.toFixed(2));
}

export function tax(taxRate: number) {
  if (taxRate < 0) {
    throw new Error("Cannot have negative value");
  }
  const base = Number(total());
  const tax = base + (base * taxRate)
  return Number(tax.toFixed(2));
}

export function printReceipt(taxRate: number) {
  if (taxRate < 0) {
    throw new Error("Cannot have negative value");
  }

  const taxAmount = Number((total() * taxRate).toFixed(2));
  console.log("************************");

  for (const item of ITEMS) {
    console.log(`${item.name} : $${item.price.toFixed(2)}`);
  }

  console.log("************************");
  console.log(`Subtotal: $${String(total())}`);
  console.log(`Tax: $${taxAmount.toFixed(2)}`);
  console.log(`Total: $${String(tax(taxRate))}`);
}

// AI transparency: AI was used to clean up this code.