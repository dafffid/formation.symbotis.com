// Formation à l'utilisation de l'IA - Symbotis
// Script pour l'interactivité des blocs de formation

// Données des formations
const formationsData = {
    emploi: {
        title: "Formation IA - Recherche d'emploi",
        duration: "2 jours",
        content: `
            <div class="formation-details">
                <h4>🎯 Objectifs de la formation</h4>
                <ul>
                    <li>Optimiser votre CV avec l'IA</li>
                    <li>Préparer vos entretiens avec des simulations IA</li>
                    <li>Utiliser l'IA pour analyser le marché de l'emploi</li>
                    <li>Automatiser votre recherche d'opportunités</li>
                </ul>

                <h4>📚 Programme détaillé</h4>
                <div class="program-day">
                    <strong>Jour 1 :</strong> Optimisation du profil professionnel
                    <ul>
                        <li>Rédaction de CV assistée par IA (ChatGPT, Jasper)</li>
                        <li>Optimisation LinkedIn avec l'IA</li>
                        <li>Création de lettres de motivation personnalisées</li>
                    </ul>
                </div>
                <div class="program-day">
                    <strong>Jour 2 :</strong> Recherche et préparation
                    <ul>
                        <li>Veille automatisée des offres d'emploi</li>
                        <li>Préparation d'entretiens avec IA conversationnelle</li>
                        <li>Analyse de marché et stratégie de candidature</li>
                    </ul>
                </div>

                <h4>🛠 Outils utilisés</h4>
                <p>ChatGPT, LinkedIn Sales Navigator, Indeed API, Notion AI</p>

                <h4>💰 Tarif</h4>
                <p><strong>590€ HT</strong> par participant (support et suivi inclus)</p>
            </div>
        `
    },
    btp: {
        title: "Formation IA - Automatisation BTP",
        duration: "3 jours",
        content: `
            <div class="formation-details">
                <h4>🎯 Objectifs de la formation</h4>
                <ul>
                    <li>Planifier les projets BTP avec l'IA prédictive</li>
                    <li>Optimiser la gestion des ressources et matériaux</li>
                    <li>Implémenter la sécurité prédictive sur chantier</li>
                    <li>Automatiser le suivi et reporting</li>
                </ul>

                <h4>📚 Programme détaillé</h4>
                <div class="program-day">
                    <strong>Jour 1 :</strong> Planification intelligente
                    <ul>
                        <li>Estimation automatique des coûts et délais</li>
                        <li>Planification optimisée avec contraintes multiples</li>
                        <li>Prédiction des risques projet</li>
                    </ul>
                </div>
                <div class="program-day">
                    <strong>Jour 2 :</strong> Gestion des ressources
                    <ul>
                        <li>Optimisation des équipes et matériaux</li>
                        <li>Maintenance prédictive des équipements</li>
                        <li>Gestion intelligente des stocks</li>
                    </ul>
                </div>
                <div class="program-day">
                    <strong>Jour 3 :</strong> Sécurité et monitoring
                    <ul>
                        <li>Détection automatique des situations à risque</li>
                        <li>Surveillance par vision artificielle</li>
                        <li>Reporting automatisé et tableaux de bord IA</li>
                    </ul>
                </div>

                <h4>🛠 Outils utilisés</h4>
                <p>Autodesk Construction Cloud, Procore AI, Computer Vision, IoT Sensors</p>

                <h4>💰 Tarif</h4>
                <p><strong>1,290€ HT</strong> par participant (support technique inclus)</p>
            </div>
        `
    },
    logistique: {
        title: "Formation IA - Automatisation Logistique",
        duration: "3 jours",
        content: `
            <div class="formation-details">
                <h4>🎯 Objectifs de la formation</h4>
                <ul>
                    <li>Prédire et optimiser la demande client</li>
                    <li>Automatiser le routage et la livraison</li>
                    <li>Optimiser la gestion d'entrepôt avec l'IA</li>
                    <li>Réduire les coûts logistiques de 20-30%</li>
                </ul>

                <h4>📚 Programme détaillé</h4>
                <div class="program-day">
                    <strong>Jour 1 :</strong> Prédiction de demande
                    <ul>
                        <li>Modèles prédictifs de demande client</li>
                        <li>Optimisation des stocks avec IA</li>
                        <li>Analyse des tendances saisonnières</li>
                    </ul>
                </div>
                <div class="program-day">
                    <strong>Jour 2 :</strong> Optimisation transport
                    <ul>
                        <li>Algorithmes de routage intelligent</li>
                        <li>Optimisation des tournées de livraison</li>
                        <li>Gestion dynamique des flottes</li>
                    </ul>
                </div>
                <div class="program-day">
                    <strong>Jour 3 :</strong> Automatisation entrepôt
                    <ul>
                        <li>Picking automatisé et robotisation</li>
                        <li>Optimisation de l'espace de stockage</li>
                        <li>Surveillance qualité par IA</li>
                    </ul>
                </div>

                <h4>🛠 Outils utilisés</h4>
                <p>TensorFlow, Optimization APIs, WMS AI, Fleet Management Systems</p>

                <h4>💰 Tarif</h4>
                <p><strong>1,290€ HT</strong> par participant (cas d'usage inclus)</p>
            </div>
        `
    },
    marketing: {
        title: "Formation IA - Marketing Digital",
        duration: "2 jours",
        content: `
            <div class="formation-details">
                <h4>🎯 Objectifs de la formation</h4>
                <ul>
                    <li>Personnaliser les campagnes avec l'IA</li>
                    <li>Automatiser la création de contenu</li>
                    <li>Optimiser le ciblage et ROI publicitaire</li>
                    <li>Analyser les comportements clients avec IA</li>
                </ul>

                <h4>📚 Programme détaillé</h4>
                <div class="program-day">
                    <strong>Jour 1 :</strong> Personnalisation et contenu
                    <ul>
                        <li>Segmentation client intelligente</li>
                        <li>Génération automatique de contenu</li>
                        <li>Personnalisation des parcours clients</li>
                    </ul>
                </div>
                <div class="program-day">
                    <strong>Jour 2 :</strong> Optimisation et analyse
                    <ul>
                        <li>Optimisation des campagnes publicitaires</li>
                        <li>Analytics prédictifs et attribution</li>
                        <li>Chatbots et service client automatisé</li>
                    </ul>
                </div>

                <h4>🛠 Outils utilisés</h4>
                <p>Google AI Platform, Facebook AI, Salesforce Einstein, Adobe Sensei</p>

                <h4>💰 Tarif</h4>
                <p><strong>790€ HT</strong> par participant (templates inclus)</p>
            </div>
        `
    },
    sante: {
        title: "Formation IA - Santé & Médical",
        duration: "4 jours",
        content: `
            <div class="formation-details">
                <h4>🎯 Objectifs de la formation</h4>
                <ul>
                    <li>Assister le diagnostic médical avec l'IA</li>
                    <li>Optimiser la gestion des dossiers patients</li>
                    <li>Automatiser la planification des soins</li>
                    <li>Respecter la conformité RGPD santé</li>
                </ul>

                <h4>📚 Programme détaillé</h4>
                <div class="program-day">
                    <strong>Jour 1 :</strong> Diagnostic assisté
                    <ul>
                        <li>IA pour l'analyse d'imagerie médicale</li>
                        <li>Aide au diagnostic différentiel</li>
                        <li>Détection précoce de pathologies</li>
                    </ul>
                </div>
                <div class="program-day">
                    <strong>Jour 2 :</strong> Gestion des dossiers
                    <ul>
                        <li>Dossiers patients intelligents</li>
                        <li>Transcription automatique consultations</li>
                        <li>Alertes et rappels automatisés</li>
                    </ul>
                </div>
                <div class="program-day">
                    <strong>Jour 3 :</strong> Planification et suivi
                    <ul>
                        <li>Optimisation des plannings consultations</li>
                        <li>Prédiction des besoins en ressources</li>
                        <li>Suivi personnalisé des traitements</li>
                    </ul>
                </div>
                <div class="program-day">
                    <strong>Jour 4 :</strong> Conformité et sécurité
                    <ul>
                        <li>RGPD et données de santé</li>
                        <li>Sécurisation des systèmes IA médicaux</li>
                        <li>Audit et traçabilité des décisions IA</li>
                    </ul>
                </div>

                <h4>🛠 Outils utilisés</h4>
                <p>IBM Watson Health, Google Cloud Healthcare AI, Système HIS/PACS</p>

                <h4>💰 Tarif</h4>
                <p><strong>1,890€ HT</strong> par participant (certification incluse)</p>
            </div>
        `
    },
    finance: {
        title: "Formation IA - Finance & FinTech",
        duration: "3 jours",
        content: `
            <div class="formation-details">
                <h4>🎯 Objectifs de la formation</h4>
                <ul>
                    <li>Analyser les risques financiers avec l'IA</li>
                    <li>Détecter les fraudes automatiquement</li>
                    <li>Optimiser les stratégies d'investissement</li>
                    <li>Automatiser la conformité réglementaire</li>
                </ul>

                <h4>📚 Programme détaillé</h4>
                <div class="program-day">
                    <strong>Jour 1 :</strong> Analyse de risque
                    <ul>
                        <li>Modèles prédictifs de risque crédit</li>
                        <li>Évaluation automatique de solvabilité</li>
                        <li>Stress testing avec IA</li>
                    </ul>
                </div>
                <div class="program-day">
                    <strong>Jour 2 :</strong> Détection de fraude
                    <ul>
                        <li>Systèmes de détection temps réel</li>
                        <li>Analyse comportementale des transactions</li>
                        <li>Machine Learning pour la prévention</li>
                    </ul>
                </div>
                <div class="program-day">
                    <strong>Jour 3 :</strong> Trading et compliance
                    <ul>
                        <li>Algorithmes de trading automatisé</li>
                        <li>Robo-advisory et gestion de portefeuille</li>
                        <li>Conformité réglementaire automatisée</li>
                    </ul>
                </div>

                <h4>🛠 Outils utilisés</h4>
                <p>Python/R, Bloomberg API, TradingView, RegTech Solutions</p>

                <h4>💰 Tarif</h4>
                <p><strong>1,590€ HT</strong> par participant (modèles inclus)</p>
            </div>
        `
    }
};

// DOM Elements
let modal, modalTitle, modalContent, closeBtn;

// Initialisation
document.addEventListener('DOMContentLoaded', function() {
    initializeElements();
    setupEventListeners();
    addAnimations();
});

function initializeElements() {
    modal = document.getElementById('formationModal');
    modalTitle = document.getElementById('modalTitle');
    modalContent = document.getElementById('modalContent');
    closeBtn = document.getElementById('closeModal');
}

function setupEventListeners() {
    // Event listeners pour les cartes de formation
    const formationCards = document.querySelectorAll('.formation-card');
    formationCards.forEach(card => {
        // Seulement pour les cartes cliquables
        if (card.classList.contains('clickable')) {
            card.addEventListener('click', handleCardClick);
            card.addEventListener('keydown', handleCardKeydown);
            
            // Rendre les cartes focusables pour l'accessibilité
            card.setAttribute('tabindex', '0');
            card.setAttribute('role', 'button');
            card.setAttribute('aria-label', `Voir les détails de la formation ${card.querySelector('h3').textContent}`);
        }
    });

    // Event listeners pour la modal
    if (closeBtn) {
        closeBtn.addEventListener('click', closeModal);
    }

    if (modal) {
        modal.addEventListener('click', function(e) {
            if (e.target === modal) {
                closeModal();
            }
        });
    }

    // Fermer la modal avec Escape
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && modal && modal.style.display === 'block') {
            closeModal();
        }
    });

    // Event listeners pour les boutons d'action
    setupActionButtons();

    // Smooth scrolling pour la navigation
    setupSmoothScrolling();
}

function handleCardClick(event) {
    const domain = event.currentTarget.getAttribute('data-domain');
    
    // Redirection spéciale pour recherche d'emploi
    if (domain === 'emploi') {
        window.open('https://formation.symbotis.com/Guide%20IA%20pour%20la%20Recherche%20d\'Emploi%20_%20Symbotis.html', '_blank');
        return;
    }
    
    // Pour les autres formations (au cas où)
    openModal(domain);
}

function handleCardKeydown(event) {
    if (event.key === 'Enter' || event.key === ' ') {
        event.preventDefault();
        const domain = event.currentTarget.getAttribute('data-domain');
        
        // Redirection spéciale pour recherche d'emploi
        if (domain === 'emploi') {
            window.open('https://formation.symbotis.com/Guide%20IA%20pour%20la%20Recherche%20d\'Emploi%20_%20Symbotis.html', '_blank');
            return;
        }
        
        // Pour les autres formations (au cas où)
        openModal(domain);
    }
}

function openModal(domain) {
    const formation = formationsData[domain];
    if (!formation) return;

    // Mettre à jour le contenu de la modal
    if (modalTitle) modalTitle.textContent = formation.title;
    if (modalContent) modalContent.innerHTML = formation.content;

    // Afficher la modal
    if (modal) {
        modal.style.display = 'block';
        document.body.style.overflow = 'hidden'; // Empêcher le scroll du body
        
        // Focus sur le bouton de fermeture pour l'accessibilité
        setTimeout(() => {
            if (closeBtn) closeBtn.focus();
        }, 100);
    }
}

function closeModal() {
    if (modal) {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto'; // Restaurer le scroll du body
    }
}

function setupActionButtons() {
    // Event delegation pour les boutons dynamiques
    document.addEventListener('click', function(e) {
        if (e.target.classList.contains('btn-primary')) {
            handleInscription();
        } else if (e.target.classList.contains('btn-secondary')) {
            handleMoreInfo();
        }
    });
}

function handleInscription() {
    // Simuler une action d'inscription
    alert('Redirection vers le formulaire d\'inscription...\n\nContactez-nous au +33 (0)6 86 84 64 29 ou contact@symbotis.com pour finaliser votre inscription.');
    closeModal();
}

function handleMoreInfo() {
    // Simuler une demande d'informations
    alert('Demande d\'informations envoyée !\n\nNos experts Symbotis vous recontacteront sous 24h pour personnaliser votre formation.');
    closeModal();
}

function setupSmoothScrolling() {
    const navLinks = document.querySelectorAll('.nav a[href^="#"]');
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

function addAnimations() {
    // Observer pour les animations au scroll
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-in');
                
                // Animation en cascade pour les cartes
                if (entry.target.classList.contains('formation-grid')) {
                    const cards = entry.target.querySelectorAll('.formation-card');
                    cards.forEach((card, index) => {
                        setTimeout(() => {
                            card.classList.add('animate-in');
                        }, index * 100);
                    });
                }
            }
        });
    }, observerOptions);

    // Observer les éléments à animer
    const elementsToAnimate = document.querySelectorAll('.section-header, .formation-grid, .contact-content');
    elementsToAnimate.forEach(el => observer.observe(el));

    // Effet de parallax léger pour le hero
    setupParallax();
}

function setupParallax() {
    const hero = document.querySelector('.hero');
    if (!hero) return;

    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        const parallaxSpeed = 0.5;
        hero.style.transform = `translateY(${scrolled * parallaxSpeed}px)`;
    });
}

// Fonctions utilitaires
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Gestion du redimensionnement de fenêtre
window.addEventListener('resize', debounce(() => {
    // Ajuster la modal si elle est ouverte
    if (modal && modal.style.display === 'block') {
        // Recalculer les dimensions si nécessaire
    }
}, 250));

// Analytics et tracking (simulation)
function trackFormationClick(domain) {
    console.log(`Formation clicked: ${domain}`);
    // Ici on pourrait ajouter du tracking Google Analytics, etc.
}

// Performance monitoring
function measurePerformance() {
    if ('performance' in window) {
        window.addEventListener('load', () => {
            const loadTime = performance.timing.loadEventEnd - performance.timing.navigationStart;
            console.log(`Page loaded in: ${loadTime}ms`);
        });
    }
}

measurePerformance();

// Support pour les anciens navigateurs
if (!Element.prototype.closest) {
    Element.prototype.closest = function(s) {
        var el = this;
        do {
            if (Element.prototype.matches.call(el, s)) return el;
            el = el.parentElement || el.parentNode;
        } while (el !== null && el.nodeType === 1);
        return null;
    };
}