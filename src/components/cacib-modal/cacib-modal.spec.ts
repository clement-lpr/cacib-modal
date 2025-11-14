import { newSpecPage } from 'jest-stencil-runner';
import { CacibModal } from './cacib-modal';

describe('cacib-modal', () => {
  it('renders when closed', async () => {
    const { root } = await newSpecPage({
      components: [CacibModal],
      html: '<cacib-modal></cacib-modal>',
    });

    expect(root).toEqualHtml(`
      <cacib-modal>
        <mock:shadow-root></mock:shadow-root>
      </cacib-modal>
    `);
  });

  it('emits modalClose event when close method is called', async () => {
    const { root, rootInstance } = await newSpecPage({
      components: [CacibModal],
      html: '<cacib-modal is-open="true"></cacib-modal>',
    });

    const modalCloseSpy = jest.fn();
    root?.addEventListener('modalClose', modalCloseSpy);

    // Call the close method directly
    await rootInstance.closeModal();

    // Wait for timeout
    await new Promise(resolve => setTimeout(resolve, 250));

    expect(modalCloseSpy).toHaveBeenCalled();
    expect(rootInstance.isOpen).toBe(false);
  });
});
