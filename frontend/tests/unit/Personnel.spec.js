import { shallowMount } from '@vue/test-utils'
import personnel from "../../src/components/Personnel.vue"

describe('Personnel.vue', () => {
    it('renders props.msg when passed', () => {
      const msg = '7:00'
      const wrapper = shallowMount(personnel, {
        propsData: { msg }
      })
      expect(wrapper.text()).toMatch(msg)
    })
  })