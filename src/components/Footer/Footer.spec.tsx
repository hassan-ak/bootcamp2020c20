import React from "react"
import { shallow } from "enzyme"
import Footer from "./Footer";

describe("Footer", () => {
  let container:any;
  beforeEach(() => (container = shallow(<Footer />)))
  it("should render a <div />", () => {
    expect(container.find("div").length).toEqual(2)
  })
})