import React from "react"
import renderer from "react-test-renderer"
import Banner from "./banner"

describe("Banner", () => {
  it("renders correctly", () => {
    const tree = renderer.create(<Banner>My banner</Banner>).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
