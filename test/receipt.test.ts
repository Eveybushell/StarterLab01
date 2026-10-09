import { test, expect, describe, beforeEach } from "@jest/globals";

import {
    addItem,
    deleteItem,
    total,
    tax,
    printReceipt,
} from "../src/receipt";

describe ("Happy path tests for receipt", () => {

    let ITEMS: any[];

    beforeEach(() => {
        ITEMS = [
        { name: "paper towels", price: 21.99 },
        { name: "sandwich", price: 8.75 },
        { name: "eggs", price: 6.75 },
        { name: "avocado oil", price: 10.0 },
        ];
    })

    test("Add an item", () => {
        
        addItem("testItem", 10.0);
        expect(ITEMS).toContainEqual({ name: "testItem", price: 10.0 });
    })


})