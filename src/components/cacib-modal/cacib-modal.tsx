import { Component, Prop, State, Event, EventEmitter, h, Host, Listen } from '@stencil/core';

@Component({
  tag: 'cacib-modal',
  styleUrl: 'cacib-modal.css',
  shadow: true,
})
export class CacibModal {
  /**
   * Whether the modal is open or not
   */
  @Prop({ mutable: true, reflect: true }) isOpen: boolean = false;

  /**
   * The title of the modal
   */
  @Prop() modalTitle: string = '';

  /**
   * The subtitle or description of the modal
   */
  @Prop() subtitle: string = '';

  /**
   * Text for the primary action button
   */
  @Prop() primaryButtonText: string = 'Confirmer';

  /**
   * Text for the secondary action button (cancel)
   */
  @Prop() secondaryButtonText: string = 'Annuler';

  /**
   * Whether to show the close button (X)
   */
  @Prop() showCloseButton: boolean = true;

  /**
   * Whether the primary button is disabled
   */
  @Prop() primaryButtonDisabled: boolean = false;

  /**
   * Event emitted when modal is closed
   */
  @Event() modalClose?: EventEmitter<void>;

  /**
   * Event emitted when primary button is clicked
   */
  @Event() modalPrimaryAction?: EventEmitter<void>;

  /**
   * Event emitted when secondary button is clicked
   */
  @Event() modalSecondaryAction?: EventEmitter<void>;

  private modalRef?: HTMLDivElement;

  /**
   * Listen for escape key to close modal
   */
  @Listen('keydown', { target: 'document' })
  handleKeyDown(event: KeyboardEvent) {
    if (event.key === 'Escape' && this.isOpen) {
      this.closeModal();
    }
  }

  /**
   * Handle overlay click to close modal
   */
  private handleOverlayClick = (event: MouseEvent) => {
    if (event.target === this.modalRef) {
      this.closeModal();
    }
  };

  /**
   * Close the modal
   */
  private closeModal = () => {
    setTimeout(() => {
      this.isOpen = false;
      this.modalClose?.emit();
    }, 200);
  };

  /**
   * Handle primary button click
   */
  private handlePrimaryAction = () => {
    if (!this.primaryButtonDisabled) {
      this.modalPrimaryAction?.emit();
    }
  };

  /**
   * Handle secondary button click
   */
  private handleSecondaryAction = () => {
    this.modalSecondaryAction?.emit();
  };

  /**
   * Prevent modal content click from bubbling to overlay
   */
  private handleContentClick = (event: MouseEvent) => {
    event.stopPropagation();
  };

  render() {
    if (!this.isOpen) {
      return null;
    }

    return (
      <Host class={this.isOpen ? 'tw:fixed tw:top-0 tw:left-0 tw:w-full tw:h-full tw:pointer-events-none' : ''}>
        <div
          class={`tw:fixed tw:inset-0 tw:bg-black/50 tw:flex tw:items-center tw:justify-center tw:z-1000 tw:p-4 tw:transition-opacity tw:duration-200 tw:ease-in-out tw:pointer-events-auto ${
            this.isOpen ? 'tw:opacity-100' : 'tw:opacity-0'
          } sm:tw:p-2`}
          ref={el => (this.modalRef = el)}
          onClick={this.handleOverlayClick}
        >
          <div
            class={`tw:bg-white tw:rounded-lg tw:shadow-xl tw:w-full tw:max-w-lg tw:max-h-[90vh] tw:overflow-hidden tw:relative tw:transition-transform tw:duration-200 tw:ease-in-out ${
              this.isOpen ? 'tw:scale-100 tw:translate-y-0' : 'tw:scale-95 tw:translate-y-5'
            } sm:tw:max-h-[95vh]`}
            onClick={this.handleContentClick}
            role="dialog"
            aria-modal="true"
            aria-labelledby={this.modalTitle ? 'modal-title' : undefined}
            aria-describedby={this.subtitle ? 'modal-subtitle' : undefined}
          >
            {/* Close button */}
            {this.showCloseButton && (
              <button
                aria-label="Fermer la modale"
                class="tw:absolute tw:top-4 tw:right-4 tw:bg-transparent tw:border-none tw:cursor-pointer tw:p-2 tw:rounded tw:text-gray-700 tw:transition-all tw:duration-200 tw:ease-in-out tw:z-10 tw:flex tw:items-center tw:justify-center tw:hover:bg-gray-50 tw:hover:text-gray-900 focus:tw:outline-none focus:tw:ring-2 focus:tw:ring-teal-600 focus:tw:ring-offset-2"
                onClick={this.closeModal}
                id="modal-close-button"
                type="button"
              >
                <svg
                  class="tw:w-4 tw:h-4 tw:text-gray-700 tw:transition-colors tw:duration-200 tw:hover:text-gray-900"
                  fill="none"
                  height="16"
                  viewBox="0 0 20 20"
                  width="16"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M4.50444 3.62056C4.26036 3.37648 3.86464 3.37648 3.62056 3.62056C3.37648 3.86464 3.37648 4.26036 3.62056 4.50444L9.11612 10L3.62056 15.4956C3.37648 15.7396 3.37648 16.1354 3.62056 16.3794C3.86464 16.6235 4.26037 16.6235 4.50444 16.3794L10 10.8839L15.4956 16.3794C15.7396 16.6235 16.1354 16.6235 16.3794 16.3794C16.6235 16.1354 16.6235 15.7396 16.3794 15.4956L10.8839 10L16.3794 4.50444C16.6235 4.26036 16.6235 3.86464 16.3794 3.62056C16.1354 3.37648 15.7396 3.37648 15.4956 3.62056L10 9.11612L4.50444 3.62056Z"
                    fill="currentColor"
                  />
                </svg>
              </button>
            )}

            {/* Modal header */}
            <div class="tw:px-6 tw:pt-6 tw:pb-0 sm:tw:px-5">
              {this.modalTitle && (
                <h2 id="modal-title" class="tw:text-xl tw:font-semibold tw:text-gray-900 tw:m-0 tw:mr-6 tw:leading-7 sm:tw:text-lg sm:tw:mr-5">
                  {this.modalTitle}
                </h2>
              )}
              {this.subtitle && (
                <p id="modal-subtitle" class="tw:text-sm tw:text-gray-700 tw:mt-2 tw:mr-6 tw:leading-6 sm:tw:mr-5">
                  {this.subtitle}
                </p>
              )}
            </div>

            {/* Modal body - slot for custom content */}
            <div class="tw:px-6 tw:max-h-[50vh] tw:overflow-y-auto tw:pt-4 sm:tw:px-5">
              <slot></slot>
            </div>

            {/* Modal footer with actions */}
            <div class="tw:px-6 tw:pt-4 tw:pb-6 tw:flex tw:gap-3 tw:justify-end tw:border-t tw:border-gray-300 tw:mt-4 sm:tw:px-5 sm:tw:flex-col-reverse sm:tw:gap-2">
              <button
                aria-label="Annuler"
                class="tw:px-5 tw:py-3 tw:rounded-md tw:text-sm tw:font-medium tw:cursor-pointer tw:border tw:border-gray-300 tw:transition-all tw:duration-200 tw:ease-in-out tw:min-w-[88px] tw:relative tw:inline-flex tw:items-center tw:justify-center tw:bg-transparent tw:text-gray-600 tw:hover:bg-gray-50 tw:hover:text-gray-700 tw:hover:border-gray-600 tw:hover:-translate-y-px tw:hover:shadow-md tw:active:translate-y-0 tw:active:shadow-sm focus:tw:outline-none focus:tw:ring-2 focus:tw:ring-teal-600 focus:tw:ring-offset-2 sm:tw:w-full sm:tw:justify-center"
                onClick={this.handleSecondaryAction}
                type="button"
              >
                {this.secondaryButtonText}
              </button>
              <button
                aria-label="Confirmer"
                class={`tw:px-5 tw:py-3 tw:rounded-md tw:text-sm tw:font-medium tw:cursor-pointer tw:border tw:border-transparent tw:transition-all tw:duration-200 tw:ease-in-out tw:min-w-[88px] tw:relative tw:inline-flex tw:items-center tw:justify-center tw:text-white focus:tw:outline-none focus:tw:ring-2 focus:tw:ring-teal-600 focus:tw:ring-offset-2 sm:tw:w-full sm:tw:justify-center ${
                  this.primaryButtonDisabled
                    ? 'tw:bg-gray-600 tw:border-gray-600 tw:cursor-not-allowed tw:opacity-60'
                    : 'tw:bg-teal-600 tw:border-teal-600 tw:hover:bg-teal-700 tw:hover:border-teal-700 tw:hover:-translate-y-px tw:hover:shadow-lg tw:active:translate-y-0 tw:active:shadow-md'
                }`}
                onClick={this.handlePrimaryAction}
                disabled={this.primaryButtonDisabled}
                id="modal-primary-button"
                type="button"
              >
                {this.primaryButtonText}
              </button>
            </div>
          </div>
        </div>
      </Host>
    );
  }
}
