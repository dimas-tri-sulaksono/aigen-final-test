import InputForm from "@/components/atoms/InputForm";
import "@testing-library/jest-dom";
import { fireEvent, render } from "@testing-library/react";

describe("Input", () => {
  it("render input dengan placeholder yang sesuai", () => {
    const { getByPlaceholderText } = render(
      <InputForm placeholder={"username"} />,
    );

    const input = getByPlaceholderText("username");
    expect(input.placeholder).toBe("username");
  });
});
