import { expect, it, describe } from 'vitest';
import { mount, type VueWrapper } from '@vue/test-utils';
import RoundedButton from '@/components/buttons/RoundedButton.vue';

describe('RoundedButton', () => {
  let wrapper: VueWrapper;
  const createComponent = (config = {}) => { wrapper = mount(RoundedButton, config); };
  const findArrowIcon = () => wrapper.find('[data-test="arrow-icon"]');

  it('Should emit event when button is clicked', async () => {
    createComponent();
    await wrapper.trigger('click');
    expect(wrapper.emitted()).toHaveProperty('onClick');
    expect(wrapper.emitted('onClick')).toHaveLength(1);
  });

  it('Should has correct classnames depending on props values (all props off)', () => {
    createComponent({ props: { btnColor: 'green' } });
    expect(wrapper.classes()).toContain('bg-green');
    expect(wrapper.classes()).toContain('py-[12px]');
  });

  it('Should has correct classnames depending on props values (all props on)', () => {
    createComponent({
      props: {
        transparent: true,
        bordered: true,
        noPadding: true,
        btnColor: 'light',
      },
    });

    expect(wrapper.classes()).toContain('text-lightCream');
    expect(wrapper.classes()).toContain('border-lightCream');
    expect(wrapper.classes()).toContain('bg-none');
    expect(wrapper.classes()).toContain('border-solid');
    expect(wrapper.classes()).toContain('border-[1px]');
  });

  it('Should render icon when withIcon prop is active', () => {
    createComponent({
      props: {
        withIcon: true,
      },
    });

    expect(findArrowIcon().exists()).toBeTruthy();
  });

  it('Should correctly render content in default slot', () => {
    createComponent({
      slots: {
        default: 'test content',
      }
    });

    expect(wrapper.text()).toBe('test content');
  });
});
