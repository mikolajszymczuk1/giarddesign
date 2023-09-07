import { expect, it, describe } from 'vitest';
import { mount, type VueWrapper } from '@vue/test-utils';
import OfferCard from '@/components/cards/OfferCard.vue';
import PencilIcon from '@/components/icons/PencilIcon.vue';
import EyeIcon from '@/components/icons/EyeIcon.vue';
import StarsIcon from '@/components/icons/StarsIcon.vue';

describe('OfferCard', () => {
  let wrapper: VueWrapper;
  const createComponent = (config = {}) => { wrapper = mount(OfferCard, config); };
  const findCardTitle = () => wrapper.find('[data-test="card-title"]');
  const findCardContent = () => wrapper.find('[data-test="card-content"]');
  const findPencilIconComponent = () => wrapper.findComponent(PencilIcon);
  const findEyeIconComponent = () => wrapper.findComponent(EyeIcon);
  const findStarsIconComponent = () => wrapper.findComponent(StarsIcon);

  it('Should redner slots content correctly', async () => {
    createComponent({
      slots: {
        'card-title': 'Card Title',
        'card-content': 'Card Content',
      },
    });

    expect(findCardTitle().text()).toBe('Card Title');
    expect(findCardContent().text()).toBe('Card Content');
  });

  it('Should render correct icon based on icon prop value', async () => {
    createComponent({
      props: {
        icon: 'pencil',
      },
    });

    expect(findPencilIconComponent().exists()).toBeTruthy();
    await wrapper.setProps({ icon: 'eye' });
    expect(findEyeIconComponent().exists()).toBeTruthy();
    await wrapper.setProps({ icon: 'stars' });
    expect(findStarsIconComponent().exists()).toBeTruthy();
  });
});
