import React from "react"
import { shallow } from "enzyme"
import Header from "./Header";

describe("Header", () => {
  let container:any;
  beforeEach(() => (container = shallow(<Header />)))
  it("should render a <div />", () => {
    expect(container.find("div").length).toEqual(1)
  })
})