import { render, screen } from "@testing-library/react";
import Index from "../pages/index";

describe("Home", () => {
  it("강의 목록이 렌더링 되어야 한다.", () => {
    const { getByTitle } = render(<Index />);

    const lectureList = getByTitle("lectureList", {
      name: "",
    });

    expect(lectureList).toBeInTheDocument();
  });
});
