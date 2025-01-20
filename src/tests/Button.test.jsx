import { vi, describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Button from "../components/Button.jsx";

describe("Button Component", () => {
    it("Should render a button with a text Click me", () => {
        render(<Button text="Click me"/>)

        const btn = screen.getByRole("button", { name: "Click me" });

        expect(btn).toBeInTheDocument();
    })

    it("should call the onClick function when clicked", async () => {
        const onClick = vi.fn();
        const user = userEvent.setup()
        render(<Button onClick={onClick} text="Click me" />);
        
        const btn = screen.getByRole("button", { name: "Click me" });

        await user.click(btn);

        expect(onClick).toHaveBeenCalled();
    });

    it("should not call the onclick function when it isn't clicked", async () => {
        const onClick = vi.fn();
        render(<Button onClick={onClick} />)
        
        expect(onClick).not.toHaveBeenCalled();
    })
})