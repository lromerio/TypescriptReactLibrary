import "raf/polyfill";
import "jsdom-global/register"

import * as React from "react"
import {configure, mount, shallow} from "enzyme"
import * as Adapter from "enzyme-adapter-react-16"
import toJson from "enzyme-to-json"

import Statefull from "."


describe("<Statefull />", () => {

    const text = "Test"

    const comp = <Statefull content={text} />

    configure({ adapter: new Adapter() })

    it("should render", () => {
        const wrapper = mount(comp)
        expect(toJson(wrapper)).toMatchSnapshot()
        wrapper.unmount()
    })

    it("should update with props", () => {
        const newText = "New Text"
        
        const wrapper = shallow(comp)

        expect(wrapper.find("span").text()).toBe(text)
        wrapper.setProps({content: newText })
        expect(wrapper.find("span").text()).toBe(newText)

        wrapper.unmount()
    })
})