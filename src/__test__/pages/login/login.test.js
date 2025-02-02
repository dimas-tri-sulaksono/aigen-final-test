import LoginPage from "@/pages/login";
import { render } from "@testing-library/react";

describe("LoginPage", () => {
  it("render halaman login sesuai spesifikasi", () => {
    const page = render(<LoginPage />);

    expect(page).toMatchSnapshot();
  });
});
