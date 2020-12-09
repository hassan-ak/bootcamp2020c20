import React from "react"
import { shallow } from "enzyme"
import {Time} from "./Time";

describe("Header", () => {
  let container:any;
  beforeEach(() => (container = shallow(<Time Time={{ ms: 979, s: 54, m: 1, h: 87 }} />)))
  it("should render a <div />", () => {
    expect(container.find("div").length).toEqual(1)
  })
  it("should render a <p />", () => {
    expect(container.find("p").length).toEqual(1)
  })
  it("should render a <span />", () => {
    expect(container.find("span").length).toEqual(4)
  })
  it("should render timer", () => {
    expect(container.find("span").slice(0, 1).text()).toBe("87:");
  });
  it("should render timer", () => {
    expect(container.find("span").slice(1, 2).text()).toBe("01:");
  });
  it("should render timer", () => {
    expect(container.find("span").slice(2, 3).text()).toBe("54.");
  });
  it("should render timer", () => {
    expect(container.find("span").slice(3, 4).text()).toBe("979");
  });
})