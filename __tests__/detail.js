import { render, screen } from "@testing-library/react";
import Detail from "../pages/detail";

describe("App", () => {
  it("메뉴가 렌더링 되어야 한다", () => {
    const { getByText } = render(<Detail />);

    const menu = getByText("메뉴");

    expect(menu).toBeInTheDocument();
  });
});
