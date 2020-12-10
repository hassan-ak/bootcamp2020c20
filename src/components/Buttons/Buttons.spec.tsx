import React from "react"
import { shallow } from "enzyme"
import {Buttons} from "./Buttons";

describe("Footer", () => {
  let container:any;
  beforeEach(() => (container = shallow(<Buttons StatusR={"finished"} ResumeR={()=>{}} ResetR={()=>{}} StopR={()=>{}} StartR={()=>{}}/>)))
  it("should render a <div />", () => {
    expect(container.find("div").length).toEqual(1)
  })
  it("should render a <button />", () => {
    expect(container.find("button").length).toEqual(1)
  })
})

describe("Footer", () => {
  let container:any;
  beforeEach(() => (container = shallow(<Buttons StatusR={"running"} ResumeR={()=>{}} ResetR={()=>{}} StopR={()=>{}} StartR={()=>{}}/>)))
  it("should render a <div />", () => {
    expect(container.find("div").length).toEqual(2)
  })
  it("should render a <button />", () => {
    expect(container.find("button").length).toEqual(2)
  })
})

describe("Footer", () => {
  let container:any;
  beforeEach(() => (container = shallow(<Buttons StatusR={"paused"} ResumeR={()=>{}} ResetR={()=>{}} StopR={()=>{}} StartR={()=>{}}/>)))
  it("should render a <div />", () => {
    expect(container.find("div").length).toEqual(2)
  })
  it("should render a <button />", () => {
    expect(container.find("button").length).toEqual(2)
  })
})