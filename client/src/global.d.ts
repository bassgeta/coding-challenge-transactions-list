declare global {
  interface Window {
    HSOverlay: {
      open: (element: HTMLElement) => void;
      close: (element: HTMLElement) => void;
      toggle: (element: HTMLElement) => void;
    };
  }
}

export {};
