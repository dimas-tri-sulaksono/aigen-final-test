import Input from "@/components/atoms/Input";
import "@testing-library/jest-dom";
import { fireEvent, render } from "@testing-library/react";

describe("Input", () => {
  it("render input dengan placeholder yang sesuai", () => {
    const { getByPlaceholderText } = render(<Input placeholder={"username"} />);

    //
    const input = getByPlaceholderText("username");
    expect(input.placeholder).toBe("username");
  });

  it("test fungsi onChange pada elemen input", () => {
    const onChange = jest.fn();
    const { getByPlaceholderText } = render(
      <Input placeholder={"username"} onChange={onChange} />,
    );
    const input = getByPlaceholderText("username");

    fireEvent.change(input, { target: { value: "dimas" } });

    expect(onChange).toHaveBeenCalledTimes(1);
  });
});
