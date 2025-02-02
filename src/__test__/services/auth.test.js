import { login } from "@/services/auth";
import axios from "axios";

jest.mock("axios");

describe("Login", () => {
  it("cek token jika login berhasil", async () => {
    // dummy
    const payload = {
      username: "dimas",
      password: "123",
    };

    // dummy
    const token = "token123";

    axios.post.mockResolvedValue({ data: { token } });
    const res = await login(payload);

    expect(res).toEqual({ status: true, token });
  });
});
