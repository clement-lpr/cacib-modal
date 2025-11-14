import { newE2EPage } from '@stencil/core/testing';

const wait = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

describe('cacib-modal', () => {
  it('renders without crashing', async () => {
    const page = await newE2EPage();

    await page.setContent('<cacib-modal></cacib-modal>');
    const element = await page.find('cacib-modal');

    expect(element).toHaveClass('hydrated');
  });

  it('closes modal when close button is clicked', async () => {
    const page = await newE2EPage();
    await page.setContent('<cacib-modal is-open="true"></cacib-modal>');

    const element = await page.find('cacib-modal');
    const modalCloseSpy = await element.spyOnEvent('modalClose');

    await page.waitForChanges();
    await wait(100);

    const closeButton = await page.find('cacib-modal >>> #modal-close-button');
    expect(closeButton).not.toBeNull();

    await closeButton.click();

    // Animation
    await wait(250);

    expect(modalCloseSpy).toHaveReceivedEvent();
  });

  it('emits primary action event when primary button is clicked', async () => {
    const page = await newE2EPage();
    await page.setContent('<cacib-modal is-open="true"></cacib-modal>');

    const element = await page.find('cacib-modal');
    const primaryActionSpy = await element.spyOnEvent('modalPrimaryAction');

    await page.waitForChanges();
    await wait(100);

    const primaryButton = await page.find('cacib-modal >>> #modal-primary-button');
    expect(primaryButton).not.toBeNull();

    await primaryButton.click();

    expect(primaryActionSpy).toHaveReceivedEvent();
  });
});
