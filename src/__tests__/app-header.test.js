import React from 'react'
import AppHeader from '../components/app-header'
import {
    shallow
} from 'enzyme'

const ready = () => {
    // 组件的props
    const props = {
        description: 'test'
    };

    const wrapper = shallow(<AppHeader { ...props} />);

    return {
        props,
        wrapper
    }
}


describe('(Components) AppHeader', () => {
    it('props传值测试', () => {
        const { wrapper, props } = ready();
        const text= wrapper.find('.app-header--desc').text()
        expect(text).toEqual(props.description)
    })
})
