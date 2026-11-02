import { useEffect } from 'react';
import { pageTitles } from './data/pages';

/** Met à jour le titre de l'onglet ; `full` évite d'ajouter le suffixe « | N7 Consulting ». */
export function usePageTitle(title: string, full = false): void {
  useEffect(() => {
    document.title = full ? title : `${title}${pageTitles.suffix}`;
  }, [title, full]);
}
