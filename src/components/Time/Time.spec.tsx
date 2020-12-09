import React from "react"
import { shallow } from "enzyme"
import {Time} from "./Time";

describe("Header", () => {
  let container:any;
  beforeEach(() => (container = shallow(<Time />)))
  it("should render a <div />", () => {
    expect(container.find("div").length).toEqual(1)
  })
  it("should render a <p />", () => {
    expect(container.find("p").length).toEqual(1)
  })
})