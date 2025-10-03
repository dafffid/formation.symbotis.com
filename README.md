# Formation à l'utilisation de l'IA - Made by Symbotis

## 🎯 Objectif du projet

Page web professionnelle présentant les formations IA spécialisées par secteur d'activité, développée dans le branding de Symbotis (www.symbotis.com). Cette plateforme permet aux utilisateurs de découvrir et s'inscrire à des formations personnalisées en Intelligence Artificielle.

## ✅ Fonctionnalités actuellement implémentées

### 🏠 Page d'accueil complète
- **Header professionnel** avec logo Symbotis et navigation
- **Section Hero** avec titre principal "Formation à l'utilisation de l'IA - made by Symbotis"
- **Grille de 6 formations** avec blocs cliquables interactifs
- **Section contact** avec coordonnées Symbotis
- **Footer** avec branding cohérent

### 📚 6 Domaines de formation disponibles
1. **Recherche d'emploi** (2 jours) - 590€ HT
   - Optimisation CV avec IA, préparation entretiens, veille automatisée
   
2. **Automatisation dans le BTP** (3 jours) - 1,290€ HT  
   - Planification intelligente, gestion ressources, sécurité prédictive
   
3. **Automatisation dans la Logistique** (3 jours) - 1,290€ HT
   - Prédiction demande, routage intelligent, optimisation entrepôt
   
4. **Marketing Digital & IA** (2 jours) - 790€ HT
   - Personnalisation campagnes, contenu automatisé, analytics prédictifs
   
5. **IA dans la Santé** (4 jours) - 1,890€ HT
   - Diagnostic assisté, gestion dossiers patients, conformité RGPD
   
6. **Finance & IA** (3 jours) - 1,590€ HT
   - Analyse risque, détection fraude, trading algorithmique

### 🎨 Design & UX
- **Branding Symbotis** : couleurs corporate (bleu #6366f1, violet #8b5cf6)
- **Design responsive** optimisé mobile/desktop
- **Animations fluides** : fade-in au scroll, effets hover
- **Accessibilité** : navigation clavier, aria-labels, focus states
- **Typography moderne** avec Google Fonts (Inter)

### ⚡ Interactivité JavaScript
- **Modales détaillées** pour chaque formation (programme, tarifs, outils)
- **Navigation fluide** avec smooth scrolling
- **Système d'inscription** simulé avec alertes
- **Animations au scroll** avec Intersection Observer
- **Support multi-navigateurs** avec polyfills

## 🔗 Points d'entrée fonctionnels

### URLs et Navigation
- **`/index.html`** : Page principale avec grille des formations
- **`#formations`** : Ancre vers la section des formations  
- **`#contact`** : Ancre vers les informations de contact

### Interactions utilisateur
- **Clic sur carte formation** : Ouverture modal avec détails complets
- **Bouton "S'inscrire"** : Simulation inscription avec contact Symbotis
- **Bouton "Plus d'infos"** : Simulation demande information
- **Navigation responsive** : Menu adaptatif mobile/desktop

## 🚀 Fonctionnalités à développer

### Phase 2 - Système de réservation
- [ ] Formulaire d'inscription avec validation
- [ ] Calendrier de sessions disponibles
- [ ] Système de paiement en ligne
- [ ] Confirmation par email automatique

### Phase 3 - Espace utilisateur  
- [ ] Compte personnel avec historique formations
- [ ] Suivi de progression et certificats
- [ ] Recommandations formations personnalisées
- [ ] Système de notation et avis

### Phase 4 - Extensions
- [ ] Blog/actualités IA par secteur
- [ ] Webinaires et formations en ligne
- [ ] Partenariats entreprises et tarifs groupes
- [ ] Version multilingue (EN, ES, DE)

## 📊 Modèles de données utilisés

### Structure des formations
```javascript
{
  id: "emploi|btp|logistique|marketing|sante|finance",
  title: "Titre de la formation",
  duration: "X jours", 
  price: "XXX€ HT",
  content: {
    objectives: [],
    program: [],
    tools: [],
    certification: boolean
  }
}
```

### Informations de contact
```javascript
{
  email: "contact@symbotis.com",
  phone: "+33 (0)6 86 84 64 29",
  company: "Symbotis - Expert IA"
}
```

## 🎨 Branding et Assets

### Couleurs principales (Symbotis)
- **Primary Blue**: #6366f1
- **Secondary Purple**: #8b5cf6  
- **Accent Cyan**: #06b6d4
- **Text Dark**: #1f2937
- **Background**: #ffffff

### Typography
- **Font principale** : Inter (Google Fonts)
- **Poids utilisés** : 300, 400, 500, 600, 700

### Icônes
- **Font Awesome 6** pour tous les pictogrammes
- **Icônes spécifiques** par domaine de formation

## 🛠 Technologies utilisées

- **HTML5** sémantique avec structure accessible
- **CSS3** avec variables CSS et flexbox/grid
- **JavaScript ES6+** avec modules et classes
- **Font Awesome** pour l'iconographie  
- **Google Fonts** pour la typographie
- **Intersection Observer API** pour les animations
- **CSS Grid & Flexbox** pour le layout responsive

## 📱 Responsive Design

- **Mobile First** : optimisé pour smartphones
- **Breakpoints** : 480px, 768px, 1024px, 1200px
- **Navigation adaptative** : menu hamburger mobile
- **Grille flexible** : 1-2-3 colonnes selon écran
- **Modales adaptées** : plein écran sur mobile

## 🔍 SEO et Performance

- **Meta tags** optimisés pour le référencement
- **Structure sémantique** avec balises HTML5
- **Images optimisées** et lazy loading
- **Fonts préchargées** pour améliorer les performances
- **Code minifiable** pour la production

## 📞 Contact et Support

**Symbotis - Expert IA**
- 📧 Email : contact@symbotis.com  
- 📱 Téléphone : +33 (0)6 86 84 64 29
- 🌐 Site web : www.symbotis.com

---

*Page créée avec le branding et l'expertise Symbotis en Intelligence Artificielle, Cybersécurité et Innovation digitale.*