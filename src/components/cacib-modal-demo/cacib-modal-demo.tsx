import { Component, Element, Method, State, h } from '@stencil/core';

@Component({
  tag: 'cacib-modal-demo',
  styleUrl: 'cacib-modal-demo.css',
})
export class CacibModalDemo {
  @Element() el!: HTMLElement;

  @State() basicModalOpen = false;
  @State() confirmModalOpen = false;
  @State() contentModalOpen = false;
  @State() noCloseModalOpen = false;

  @Method()
  async openBasicModal() {
    this.basicModalOpen = true;
  }

  @Method()
  async openConfirmModal() {
    this.confirmModalOpen = true;
  }

  @Method()
  async openContentModal() {
    this.contentModalOpen = true;
  }

  @Method()
  async openNoCloseModal() {
    this.noCloseModalOpen = true;
  }

  private handleBasicModalClick = (event: UIEvent) => {
    event.preventDefault();
    this.openBasicModal();
  };

  private handleConfirmModalClick = (event: UIEvent) => {
    event.preventDefault();
    this.openConfirmModal();
  };

  private handleContentModalClick = (event: UIEvent) => {
    event.preventDefault();
    this.openContentModal();
  };

  private handleNoCloseModalClick = (event: UIEvent) => {
    event.preventDefault();
    this.openNoCloseModal();
  };

  private handleBasicModalClose = () => {
    console.log('Basic modal fermée');
    this.basicModalOpen = false;
  };

  private handleConfirmModalClose = () => {
    console.log('Confirm modal fermée');
    this.confirmModalOpen = false;
  };

  private handleContentModalClose = () => {
    console.log('Content modal fermée');
    this.contentModalOpen = false;
  };

  private handleNoCloseModalClose = () => {
    console.log('No close modal fermée');
    this.noCloseModalOpen = false;
  };

  private handleConfirmAction = () => {
    console.log('Action confirmée!');
    alert('Action confirmée !');
    this.confirmModalOpen = false;
  };

  private handleCancelAction = () => {
    console.log('Action annulée');
    this.confirmModalOpen = false;
  };

  render() {
    return [
      <div class="tw:max-w-6xl tw:mx-auto tw:my-10 tw:bg-white tw:p-10 tw:rounded-lg tw:shadow-lg">
        <h1 class="tw:text-teal-600 tw:mb-2.5 tw:text-4xl tw:font-normal">CACIB Modal Component</h1>
        <p class="tw:text-gray-600 tw:text-lg tw:mb-10">Composant modal développé avec Stencil.js</p>

        <h2 class="tw:text-gray-700 tw:mt-10 tw:mb-5 tw:text-xl tw:border-b-2 tw:border-gray-300 tw:pb-2.5">Démonstration</h2>
        <p class="tw:text-gray-600 tw:mb-4">
          Cliquez sur les boutons ci-dessous pour ouvrir les différents types de modals. Toute la logique est encapsulée dans le composant de démonstration.
        </p>

        <div class="tw:flex tw:flex-wrap tw:gap-2 tw:my-8 tw:flex-row md:tw:flex-row">
          <button
            class="tw:px-6 tw:py-3 tw:border-2 tw:m-2 tw:border-teal-600 tw:bg-teal-600 tw:text-white tw:rounded-md tw:cursor-pointer tw:text-sm tw:font-medium tw:transition-all tw:duration-200 tw:ease-in-out tw:hover:bg-teal-700 tw:hover:border-teal-700 tw:hover:-translate-y-0.5"
            onClick={this.handleBasicModalClick}
          >
            Modal Basique
          </button>

          <button
            class="tw:px-6 tw:py-3 tw:border-2 tw:m-2 tw:border-teal-600 tw:bg-teal-600 tw:text-white tw:rounded-md tw:cursor-pointer tw:text-sm tw:font-medium tw:transition-all tw:duration-200 tw:ease-in-out tw:hover:bg-teal-700 tw:hover:border-teal-700 tw:hover:-translate-y-0.5"
            onClick={this.handleConfirmModalClick}
          >
            Modal de Confirmation
          </button>

          <button
            class="tw:px-6 tw:py-3 tw:border-2 tw:m-2 tw:border-teal-600 tw:bg-teal-600 tw:text-white tw:rounded-md tw:cursor-pointer tw:text-sm tw:font-medium tw:transition-all tw:duration-200 tw:ease-in-out tw:hover:bg-teal-700 tw:hover:border-teal-700 tw:hover:-translate-y-0.5"
            onClick={this.handleContentModalClick}
          >
            Modal avec Contenu
          </button>

          <button
            class="tw:px-6 tw:py-3 tw:border-2 tw:m-2 tw:border-teal-600 tw:bg-white tw:text-teal-600 tw:rounded-md tw:cursor-pointer tw:text-sm tw:font-medium tw:transition-all tw:duration-200 tw:ease-in-out tw:hover:bg-teal-50"
            onClick={this.handleNoCloseModalClick}
          >
            Modal sans X
          </button>
        </div>
        <h2 class="tw:text-gray-700 tw:mt-10 tw:mb-5 tw:text-xl tw:border-b-2 tw:border-gray-300 tw:pb-2.5">Usage</h2>
        <p class="tw:text-gray-600 tw:mb-4">Utilisation simple du composant modal dans votre HTML :</p>

        <div class="tw:bg-gray-100 tw:p-4 tw:rounded-md tw:font-mono tw:text-sm tw:text-gray-700 tw:overflow-x-auto tw:my-4 tw:border-l-4 tw:border-teal-600">
          &lt;cacib-modal is-open="false" modal-title="Titre de la modal" subtitle="Description ou sous-titre" primary-button-text="Confirmer" secondary-button-text="Annuler"
          show-close-button="true" &gt; &lt;p&gt;Contenu personnalisé de la modal&lt;/p&gt; &lt;/cacib-modal&gt;
        </div>

        <p class="tw:text-gray-600 tw:mb-4 tw:mt-6">Pour une approche plus complexe avec boutons intégrés, utilisez le composant de démonstration :</p>

        <div class="tw:bg-gray-100 tw:p-4 tw:rounded-md tw:font-mono tw:text-sm tw:text-gray-700 tw:overflow-x-auto tw:my-4 tw:border-l-4 tw:border-teal-600">
          &lt;cacib-modal-demo&gt;&lt;/cacib-modal-demo&gt;
        </div>
      </div>,

      <cacib-modal
        id="demo-modal-basic"
        isOpen={this.basicModalOpen}
        modal-title="Modal Basique"
        onModalClose={this.handleBasicModalClose}
        subtitle="Ceci est une modal simple avec un titre et du contenu."
      >
        <p class="tw:text-gray-700 tw:leading-relaxed">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </cacib-modal>,

      <cacib-modal
        id="demo-modal-confirm"
        isOpen={this.confirmModalOpen}
        modal-title="Confirmer l'action"
        onModalClose={this.handleConfirmModalClose}
        onModalPrimaryAction={this.handleConfirmAction}
        onModalSecondaryAction={this.handleCancelAction}
        primary-button-text="Oui, continuer"
        secondary-button-text="Non, annuler"
        subtitle="Êtes-vous sûr de vouloir effectuer cette action ?"
      >
        <p class="tw:text-gray-700 tw:leading-relaxed">Cette action est irréversible. Veuillez confirmer votre choix.</p>
      </cacib-modal>,

      <cacib-modal
        id="demo-modal-content"
        isOpen={this.contentModalOpen}
        modal-title="Modal avec Contenu"
        onModalClose={this.handleContentModalClose}
        subtitle="Cette modal contient plus de contenu pour tester le défilement."
      >
        <div>
          <h3 class="tw:text-lg tw:font-semibold tw:mb-2 tw:text-gray-900">Section 1</h3>
          <p class="tw:mb-4 tw:text-gray-700 tw:leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
            exercitation ullamco laboris.
          </p>

          <h3 class="tw:text-lg tw:font-semibold tw:mb-2 tw:text-gray-900">Section 2</h3>
          <p class="tw:mb-4 tw:text-gray-700 tw:leading-relaxed">
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
            officia deserunt mollit anim id est laborum.
          </p>

          <h3 class="tw:text-lg tw:font-semibold tw:mb-2 tw:text-gray-900">Section 3</h3>
          <p class="tw:mb-0 tw:text-gray-700 tw:leading-relaxed">
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et
            quasi architecto beatae vitae dicta sunt explicabo.
          </p>
        </div>
      </cacib-modal>,

      <cacib-modal
        id="demo-modal-no-close"
        isOpen={this.noCloseModalOpen}
        modal-title="Modal sans bouton fermer"
        onModalClose={this.handleNoCloseModalClose}
        show-close-button={false}
        subtitle="Cette modal ne peut être fermée qu'avec les boutons d'action."
      >
        <p class="tw:text-gray-700 tw:leading-relaxed">Vous devez utiliser les boutons d'action pour fermer cette modal.</p>
      </cacib-modal>,
    ];
  }
}
