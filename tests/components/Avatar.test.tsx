import { render, screen } from "@testing-library/react"
import { describe, it, expect } from "vitest"
import Avatar from "@/components/Avatar"

describe("Avatar", () => {
  it("renders successfully", () => {
    render(<Avatar name="John" />)
    expect(screen.getByRole("img")).toBeTruthy()
  })

  it("displays the first letter for a simple name", () => {
    render(<Avatar name="john" />)
    expect(screen.getByRole("img")).toHaveTextContent("J")
  })

  it("displays first 2 uppercase letters for a PascalCase name", () => {
    render(<Avatar name="JohnDoe" />)
    expect(screen.getByRole("img")).toHaveTextContent("JD")
  })
})
