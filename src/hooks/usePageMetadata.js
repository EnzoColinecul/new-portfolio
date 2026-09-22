import { useEffect } from 'react';

function usePageMetadata(title, themeColor, colorScheme) {
  useEffect(() => {
    const themeMeta = document.querySelector('meta[name="theme-color"]');
    const previousThemeColor = themeMeta?.getAttribute('content');
    const previousColorScheme = document.documentElement.style.colorScheme;

    document.title = title;
    themeMeta?.setAttribute('content', themeColor);
    document.documentElement.style.colorScheme = colorScheme;

    return () => {
      if (themeMeta && previousThemeColor) themeMeta.setAttribute('content', previousThemeColor);
      document.documentElement.style.colorScheme = previousColorScheme;
    };
  }, [title, themeColor, colorScheme]);
}

export default usePageMetadata;
