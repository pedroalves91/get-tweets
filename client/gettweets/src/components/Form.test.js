import React from "react";
import { render, fireEvent } from "@testing-library/react";
import Form from "./Form";

describe("Input value" , () => {
    it("Updates on change", () => {
        const {queryByPlaceholderText} = render(<Form/>)
        const searchInput = queryByPlaceholderText("Enter username ...")

        fireEvent.change(searchInput, {target: {value: "test"}})

        expect(searchInput.value).toBe("test")
    })
})