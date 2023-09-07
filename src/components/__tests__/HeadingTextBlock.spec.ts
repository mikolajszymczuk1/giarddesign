import { expect, it, describe } from 'vitest';
import { mount, type VueWrapper } from '@vue/test-utils';
import HeadingTextBlock from '@/components/HeadingTextBlock.vue';

describe('HeadingTextBlock', () => {
  let wrapper: VueWrapper;
  const createComponent = (config = {}) => { wrapper = mount(HeadingTextBlock, config); };
  const findSmallHeading = () => wrapper.find('[data-test="small-heading"]');
  const findTextHeading = () => wrapper.find('[data-test="text-heading"]');
  const findContent = () => wrapper.find('[data-test="content"]');

  it('Should render correct slots content', () => {
    createComponent({
      slots: {
        'section-name': 'Offer',
        'section-title-first-part': 'See what we can do',
        'section-title-second-part': 'for you',
        'section-content': 'Some test content',
      },
    });

    expect(findSmallHeading().text()).toBe('Offer');
    expect(findTextHeading().text()).toBe('See what we can dofor you');
    expect(findContent().text()).toBe('Some test content');
  });

  it('Should change text color based on light prop value', () => {
    createComponent({
      props: {
        light: true,
      },
    });

    expect(findSmallHeading().classes()).toContain('text-lightCream');
    expect(findTextHeading().classes()).toContain('text-lightCream');
    expect(findContent().classes()).toContain('text-lightCream');
  });
});
