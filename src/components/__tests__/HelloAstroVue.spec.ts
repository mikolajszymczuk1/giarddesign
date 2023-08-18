import { describe, expect, it } from 'vitest';
import { mount, type VueWrapper } from '@vue/test-utils';
import HelloAstroVueVue from '@components/HelloAstroVue.vue';

describe('HelloAstroVue', () => {
  it('Should render msg prop value correctly', () => {
    const wrapper: VueWrapper = mount(HelloAstroVueVue, {
      props: {
        msg: 'Hello',
      },
    });

    expect(wrapper.text()).toBe('Hello');
  });
});
