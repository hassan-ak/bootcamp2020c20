import React from "react"
import { shallow } from "enzyme"
import {Timer} from "./Timer";
import { Time } from "../Time/Time";
import { Buttons } from "../Buttons/Buttons";

describe("Header", () => {
  let container:any;
  beforeEach(() => (container = shallow(<Timer />)))
  it("should render a <div />", () => {
    expect(container.find("div").length).toEqual(1)
  })
  it("should render the Header Component", () => {
    expect(container.containsMatchingElement(<Time/>)).toEqual(true)
  })
  it("should render the Header Component", () => {
    expect(container.containsMatchingElement(<Buttons/>)).toEqual(true)
  })
})