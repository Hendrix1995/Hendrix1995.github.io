export const useOpenNewTab = () => {
  const openNewTab = (url: string) => {
    return window.open(url, '_blank', 'noopener, noreferrer');
  };

  return openNewTab;
};
