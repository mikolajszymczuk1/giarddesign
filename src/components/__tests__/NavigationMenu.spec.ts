import { expect, it, describe } from 'vitest';
import { shallowMount, type VueWrapper } from '@vue/test-utils';
import NavigationMenu from '../navigation/NavigationMenu.vue';
import NavigationLink from '../navigation/NavigationLink.vue';

describe('NavigationMenu', () => {
  let wrapper: VueWrapper;
  const createComponent = () => {
    wrapper = shallowMount(NavigationMenu, {
      global: {
        stubs: ['FontAwesomeIcon'],
      },
    });
  };

  const findNavigationLinks = () => wrapper.findAllComponents(NavigationLink);

  it('Should render correct number of links (count only visible links)', async () => {
    createComponent();
    expect(findNavigationLinks().length).toBe(4);
  });
});
