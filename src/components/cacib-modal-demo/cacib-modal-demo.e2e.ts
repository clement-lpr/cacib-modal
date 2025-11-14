import { newE2EPage } from '@stencil/core/testing';

describe('cacib-modal-demo', () => {
  it('renders without crashing', async () => {
    const page = await newE2EPage();
    await page.setContent('<cacib-modal-demo></cacib-modal-demo>');
    const element = await page.find('cacib-modal-demo');
    expect(element).toHaveClass('hydrated');
  });

  it('displays all demo buttons', async () => {
    const page = await newE2EPage();
    await page.setContent('<cacib-modal-demo></cacib-modal-demo>');

    const buttons = await page.findAll('cacib-modal-demo button');
    expect(buttons.length).toBe(4);

    expect(buttons[0].textContent.trim()).toBe('Modal Basique');
    expect(buttons[1].textContent.trim()).toBe('Modal de Confirmation');
    expect(buttons[2].textContent.trim()).toBe('Modal avec Contenu');
    expect(buttons[3].textContent.trim()).toBe('Modal sans X');
  });

  it('opens basic modal when basic modal button is clicked', async () => {
    const page = await newE2EPage();
    await page.setContent('<cacib-modal-demo></cacib-modal-demo>');

    const basicModalButton = await page.find('cacib-modal-demo button');
    await basicModalButton.click();

    await page.waitForChanges();

    const modal = await page.find('cacib-modal-demo cacib-modal[id="demo-modal-basic"]');
    const isOpen = await modal.getProperty('isOpen');
    expect(isOpen).toBe(true);
  });
});
