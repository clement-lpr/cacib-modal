import { newSpecPage } from 'jest-stencil-runner';
import { CacibModalDemo } from './cacib-modal-demo';

describe('cacib-modal-demo', () => {
  it('renders without crashing', async () => {
    const { root } = await newSpecPage({
      components: [CacibModalDemo],
      html: '<cacib-modal-demo></cacib-modal-demo>',
    });

    expect(root).toBeTruthy();
    const buttons = root?.querySelectorAll('button');
    expect(buttons?.length).toBe(4);
  });

  it('opens basic modal when basic modal button is clicked', async () => {
    const { root, rootInstance } = await newSpecPage({
      components: [CacibModalDemo],
      html: '<cacib-modal-demo></cacib-modal-demo>',
    });

    expect(rootInstance.basicModalOpen).toBe(false);

    await rootInstance.openBasicModal();

    expect(rootInstance.basicModalOpen).toBe(true);
  });

  it('opens confirm modal when confirm modal button is clicked', async () => {
    const { root, rootInstance } = await newSpecPage({
      components: [CacibModalDemo],
      html: '<cacib-modal-demo></cacib-modal-demo>',
    });

    expect(rootInstance.confirmModalOpen).toBe(false);

    await rootInstance.openConfirmModal();

    expect(rootInstance.confirmModalOpen).toBe(true);
  });
});
