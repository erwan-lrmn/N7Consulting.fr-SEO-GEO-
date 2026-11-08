import { useEffect, useLayoutEffect } from 'react';

/** `useLayoutEffect` côté client, `useEffect` côté serveur (évite l'avertissement SSR). */
export const useIsomorphicLayoutEffect = typeof window !== 'undefined' ? useLayoutEffect : useEffect;
