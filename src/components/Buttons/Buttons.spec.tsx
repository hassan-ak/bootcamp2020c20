import React from "react"
import { shallow } from "enzyme"
import {Buttons} from "./Buttons";

describe("Footer", () => {
  let container:any;
  beforeEach(() => (container = shallow(<Buttons />)))
  it("should render a <div />", () => {
    expect(container.find("div").length).toEqual(1)
  })
  it("should render a <button />", () => {
    expect(container.find("button").length).toEqual(3)
  })
})