import type { ContactContent, LegalContent, NewsContent, NotFoundContent, PageTitles } from '../types';
import { CDN } from './site';

export const contactContent: ContactContent = {
  hero: {
    title: 'Contact',
    background: `${CDN}/68542b55c318cbafa92aad7c_photogrp-12%20(1).webp`,
  },
  title: 'Un besoin particulier ? Cela nous intéresse !',
  intro:
    'Vous voulez un devis ? Vous avez une question ou vous avez besoin d’un rendez-vous ? Remplissez le formulaire et nous vous répondrons dans les plus brefs délais !',
  servicesLabel: 'Services',
  services: [
    { name: 'Digital-Data', label: 'Digital & Data' },
    { name: 'Ingenierie', label: 'Ingénierie' },
    { name: 'Eco-Ingenierie', label: 'Eco-Ingénierie' },
    { name: 'Autre-service', label: 'Autre' },
  ],
  infoLabel: 'Informations',
  fields: [
    { name: 'Nom', type: 'text', placeholder: 'Nom', required: true, width: 'half' },
    { name: 'Prenom', type: 'text', placeholder: 'Prénom', required: true, width: 'half' },
    { name: 'Email', type: 'email', placeholder: 'Adresse Email', required: true, width: 'half' },
    { name: 'Entreprise', type: 'text', placeholder: 'Entreprise', required: false, width: 'half' },
    { name: 'Telephone', type: 'tel', placeholder: 'Téléphone', required: false, width: 'full' },
    { name: 'Sujet', type: 'text', placeholder: 'Sujet', required: false, width: 'full' },
    { name: 'Message', type: 'textarea', placeholder: 'Votre message', required: true, width: 'full' },
  ],
  sourceLabel: 'Comment nous avez vous connu ?',
  sources: [
    { name: 'LinkedIn', label: 'LinkedIn' },
    { name: 'Instagram', label: 'Instagram' },
    { name: 'Google', label: 'Google' },
    { name: 'Evenement', label: 'Evènement' },
    { name: 'Recommandation', label: 'Recommandation' },
    { name: 'Autre-source', label: 'Autre' },
  ],
  submitLabel: 'Envoyer',
  successMessage: 'Merci! Votre de demande a été envoyée, nous reviendrons vers vous dans les plus brefs délais!',
  errorMessage: "Nous avons eu un problème au moment de l'envoie, veuillez réessayer.",
  recipient: 'contact@n7consulting.fr',
};

export const newsContent: NewsContent = {
  title: 'Actualités',
  intro:
    "Études de cas, événements, vie de la Junior et guides pratiques : suivez l'actualité de N7 Consulting, la Junior-Entreprise de l'ENSEEIHT.",
  background: `${CDN}/6ad77c47d06d7f0085ce089d_Toulouse_Capitole_Night_Wikimedia_Commons.webp`,
  backLink: { label: 'Toutes les actualités', href: '/actualites' },
  readMore: "Lire l'article",
  feedbackQuestion: 'Cet article vous a plu ?',
  feedbackButton: { label: "Découvrez d'autres articles", href: '/actualites' },
};

export const legalContent: LegalContent = {
  title: 'Mentions légales',
  sections: [
    {
      body: 'Éditeur du site Nom de l’entreprise : N7Consulting\nForme juridique : Association\nAdresse : 2 rue Charles Camichel, 31000 Toulouse\nE-mail : contact@n7consulting.fr\nN° SIRET : 344 162 490 00017\nDirecteur de la publication : DSI du mandat en cours\nHébergeur du site Nom : Webflow',
    },
    {
      heading: "Conditions générales d'utilisation",
      body: 'L’utilisation du site www.n7consulting.fr implique l’acceptation pleine et entière des présentes conditions générales d’utilisation.\nLe site a pour objet de proposer des demandes de devis.\nAucune vente directe n’est réalisée en ligne.\nL’utilisateur s’engage à fournir des informations exactes dans les formulaires et à ne pas utiliser le site à des fins frauduleuses.',
    },
    {
      heading: 'Politique de confidentialité',
      body: 'Conformément au Règlement Général sur la Protection des Données (RGPD), nous nous engageons à protéger vos données personnelles.\n\n**Données collectées**\nLes données que vous nous fournissez via les formulaires de contact ou de demande de devis (nom, prénom, adresse email, numéro de téléphone, etc.) sont uniquement utilisées pour traiter votre demande.\n\n**Finalité**\nVos données sont utilisées uniquement pour :\n- répondre à vos demandes\n- vous envoyer un devis\n- assurer un suivi de la relation commerciale\n\n**Destinataires**\nLes données ne sont transmises à aucun tiers sans votre consentement, sauf obligation légale.\n\n**Droits**\nConformément à la législation en vigueur, vous disposez des droits suivants :\n- droit d’accès\n- droit de rectification\n- droit à l’effacement\n- droit à la limitation du traitement\n- droit d’opposition\n- droit à la portabilité\nPour exercer ces droits, vous pouvez nous contacter à l’adresse suivante : contact@n7consulting.fr',
    },
  ],
};

export const notFoundContent: NotFoundContent = {
  title: 'Page introuvable',
  text: 'La page que vous recherchez n’existe pas ou a été déplacée.',
  button: { label: 'Retour à l’accueil', href: '/' },
};

export const pageTitles: PageTitles = {
  home: 'N7 Consulting | Junior-Entreprise de l’ENSEEIHT à Toulouse',
  servicesOverview: 'Nos prestations à Toulouse',
  about: 'Qui sommes-nous à Toulouse ?',
  contact: 'Contact à Toulouse',
  news: 'Actualités à Toulouse',
  legal: 'Mentions légales',
  notFound: 'Page introuvable',
  suffix: ' | N7 Consulting',
};
