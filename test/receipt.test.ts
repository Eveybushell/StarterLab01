import { test, expect, describe, beforeEach, afterEach, jest, } from "@jest/globals";

import {
    ITEMS,
    addItem,
    deleteItem,
    total,
    tax,
    printReceipt,
} from "../src/fixed_receipt";

describe ("Happy path tests for receipt", () => {

    beforeEach(() => {
        ITEMS.length = 0;
    
        ITEMS.push(
                { name: "paper towels", price: 21.99 },
                { name: "sandwich", price: 8.75 },
                { name: "eggs", price: 6.75 },
                { name: "avocado oil", price: 10.00 }
            );
    })

    afterEach(() => {
        jest.restoreAllMocks();
    });

    test("Add an item", () => {
        addItem("testItem", 10.0);
        expect(ITEMS).toContainEqual({ name: "testItem", price: 10.0 });
    });

    test("Remove an item", () => {
        const result = deleteItem("eggs");
        expect(result).not.toContain({ name: "eggs", price: 6.75 });
    });

    test("Total without tax", () => {
        expect(total()).toBe(47.49);
    });

    test("Total with tax", () => {
        expect(tax(0.1)).toBe(52.24);
    });

    test("Receipt output", () => {
        let consoleSpy: ReturnType<typeof jest.spyOn>;
        consoleSpy = jest.spyOn(console, 'log').mockImplementation(() => {})
        printReceipt(0.1);
        expect(consoleSpy).toHaveBeenNthCalledWith(1, "************************");
        expect(consoleSpy).toHaveBeenNthCalledWith(2, "paper towels : $21.99");
        expect(consoleSpy).toHaveBeenNthCalledWith(3, "sandwich : $8.75");
        expect(consoleSpy).toHaveBeenNthCalledWith(4, "eggs : $6.75");
        expect(consoleSpy).toHaveBeenNthCalledWith(5, "avocado oil : $10.00");
        expect(consoleSpy).toHaveBeenNthCalledWith(6, "************************");
        expect(consoleSpy).toHaveBeenNthCalledWith(7, "Subtotal: $47.49");
        expect(consoleSpy).toHaveBeenNthCalledWith(8, "Tax: $4.75");
        expect(consoleSpy).toHaveBeenNthCalledWith(9, "Total: $52.24")

    });
});

describe ("Unhappy path tests for receipt", () => {

    beforeEach(() => {
        ITEMS.length = 0;
    
        ITEMS.push(
                { name: "paper towels", price: 21.99 },
                { name: "sandwich", price: 8.75 },
                { name: "eggs", price: 6.75 },
                { name: "avocado oil", price: 10.00 }
            );
    })

    afterEach(() => {
        jest.restoreAllMocks();
    });

    test("Add an item", () => {
       expect(() => {
        addItem("fakeItem", -3.00);
       }).toThrow("Item cannot have negative price")
    });

    test("Remove an item", () => {
        const result = deleteItem("unlisted item");
        expect(result).toEqual(ITEMS);
    });

    test("Total with tax", () => {
        expect(() => {
            tax(-0.1);
        }).toThrow("Cannot have negative value")
    });

    test("Receipt output", () => {
        expect(() => {
            printReceipt(-0.1);
        }).toThrow("Cannot have negative value")
    });
});

describe ("Edge case tests for receipt", () => {

    beforeEach(() => {
        ITEMS.length = 0;
    
        ITEMS.push(
                { name: "paper towels", price: 21.99 },
                { name: "sandwich", price: 8.75 },
                { name: "eggs", price: 6.75 },
                { name: "avocado oil", price: 10.00 }
            );
    })

    afterEach(() => {
        jest.restoreAllMocks();
    });

    test("Add an item", () => {
        addItem("paper towels", 21.99);
        expect(ITEMS).toEqual([
        { name: "paper towels", price: 21.99 },
        { name: "sandwich", price: 8.75 },
        { name: "eggs", price: 6.75 },
        { name: "avocado oil", price: 10.00 },
        { name: "paper towels", price: 21.99 },
        ]);
    });

    test("Remove an item", () => {
        const result = deleteItem("Eggs");
        expect(result).not.toContain({ name: "eggs", price: 6.75 });
    });


    test("Total with tax", () => {
        expect(tax(0)).toBe(47.49);
    });

    test("Receipt output", () => {
        let consoleSpy: ReturnType<typeof jest.spyOn>;
        consoleSpy = jest.spyOn(console, 'log').mockImplementation(() => {})
        printReceipt(0);
        expect(consoleSpy).toHaveBeenNthCalledWith(1, "************************");
        expect(consoleSpy).toHaveBeenNthCalledWith(2, "paper towels : $21.99");
        expect(consoleSpy).toHaveBeenNthCalledWith(3, "sandwich : $8.75");
        expect(consoleSpy).toHaveBeenNthCalledWith(4, "eggs : $6.75");
        expect(consoleSpy).toHaveBeenNthCalledWith(5, "avocado oil : $10.00");
        expect(consoleSpy).toHaveBeenNthCalledWith(6, "************************");
        expect(consoleSpy).toHaveBeenNthCalledWith(7, "Subtotal: $47.49");
        expect(consoleSpy).toHaveBeenNthCalledWith(8, "Tax: $0.00");
        expect(consoleSpy).toHaveBeenNthCalledWith(9, "Total: $47.49")

    });
});

// AI transparency: AI was used to research proper methods of testing console logs