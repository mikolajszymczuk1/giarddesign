import { expect, it, describe } from 'vitest';
import { shallowMount, type VueWrapper } from '@vue/test-utils';
import NavigationLink from '../navigation/NavigationLink.vue';

describe('NavigationLink', () => {
  let wrapper: VueWrapper;
  const createComponent = (config = {}) => {
    wrapper = shallowMount(NavigationLink, {
      global: {
        stubs: ['FontAwesomeIcon'],
      },
      ...config,
    });
  };

  const findNavigationLink = () => wrapper.find('[data-test="navigation-link"]');
  const findNavigationContainer = () => wrapper.find('[data-test="navigation-container"]');

  it('When linkUrl prop not set, should render normal container', async () => {
    createComponent();
    expect(findNavigationContainer().exists()).toBeTruthy();
    expect(findNavigationLink().exists()).toBeFalsy();
  });

  it('When linkUrl prop set, should render hyperlink', async () => {
    createComponent({
      props: {
        linkUrl: 'test',
      },
    });
    expect(findNavigationContainer().exists()).toBeFalsy();
    expect(findNavigationLink().exists()).toBeTruthy();
  });
});
