# 📮 Kata Web 4 — Formulaire de contact (Formspree)

Ce projet est un exercice de développement web réalisé en HTML et CSS.  
Il consiste à créer un formulaire de contact simple permettant d’envoyer un message via **Formspree**, sans backend.

---

## 🚀 Objectif du projet

L’objectif est de :

- Créer une page HTML structurée
- Construire un formulaire fonctionnel
- Utiliser des champs de saisie (`textarea`, `input`)
- Comprendre l’utilisation de `label`, `required` et `autocomplete`
- Tester l’envoi de données via un service externe (Formspree)
- Intégrer une police Google Fonts

---

## 🧱 Technologies utilisées

- HTML5
- CSS (inline dans le `<style>`)
- Google Fonts (Poppins)
- Formspree (service d’envoi de formulaire)

---

## 📩 Fonctionnement du formulaire

Le formulaire envoie les données directement via Formspree :

- Un message est saisi dans un champ texte
- Lors de l’envoi, les données sont envoyées à une adresse Formspree
- Aucun backend n’est nécessaire

```html
<form action="https://formspree.io/f/xaqzpldr" method="POST">