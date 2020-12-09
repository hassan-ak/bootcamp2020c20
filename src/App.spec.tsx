import React from "react"
import { shallow } from "enzyme"
import App from "./App"
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import { Timer } from "./components/Timer/Timer";

describe("App", () => {
  let container:any;

  beforeEach(() => (container = shallow(<App />)))

  it("should render a <div />", () => {
    expect(container.find("div").length).toEqual(2)
  })

  it("should render the Header Component", () => {
    expect(container.containsMatchingElement(<Header/>)).toEqual(true)
  })

  it("should render the Header Component", () => {
    expect(container.containsMatchingElement(<Footer/>)).toEqual(true)
  })

  it("should render the Header Component", () => {
    expect(container.containsMatchingElement(<Timer/>)).toEqual(true)
  })
})