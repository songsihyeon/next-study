import { render, screen } from "@testing-library/react";
import Menu from "@/components/Menu";

describe("Menu는", () => {
  it("fastcampus라는 Text를 가지고 있어야 한다.", () => {
    const { getByText } = render(<Menu />);

    const menuText = getByText("fastcampus");

    expect(menuText).toBeInTheDocument();
  });
});
