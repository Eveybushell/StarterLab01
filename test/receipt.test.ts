import { test, expect, describe, beforeEach } from "@jest/globals";

import {
    addItem,
    deleteItem,
    total,
    tax,
    printReceipt,
} from "../src/receipt";

describe ("Happy path tests for receipt", () => {


    test("Add an item", () => {
        const ITEMS = [
        { name: "paper towels", price: 21.99 },
        { name: "sandwich", price: 8.75 },
        { name: "eggs", price: 6.75 },
        { name: "avocado oil", price: 10.0 },
        ];
        addItem("item", 10.0);
        expect(ITEMS).toBe([
        { name: "paper towels", price: 21.99 },
        { name: "sandwich", price: 8.75 },
        { name: "eggs", price: 6.75 },
        { name: "avocado oil", price: 10.0 },
        { name: "item", price: 10.0}
        ])
    })


})