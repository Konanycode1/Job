# Plateforme Infini Job

## Aperçu

Job Infini est une plateforme complète de gestion d'emploi construite avec NestJS, fournissant une architecture backend robuste pour les offres d'emploi, les candidatures et la gestion des utilisateurs. L'application suit un modèle d'architecture propre avec une séparation claire des préoccupations entre la logique métier, les contrôleurs entrants et les référentiels sortants.

## 📦 Arborescence du projet

```
src/
├── common/                     # Utilitaires communs et modules partagés
│   ├── auth/                   # Authentification et autorisation
│   ├── constants/              # Constantes de l'application
│   ├── decorators/             # Décorateurs personnalisés
│   ├── filters/                # Filtres d'exception
│   ├── guard/                  # Gardes pour la protection des routes
│   ├── interceptors/           # Intercepteurs de requêtes/réponses
│   ├── utils/                  # Fonctions utilitaires
│   └── validators/             # Validateurs personnalisés
├── config/                     # Configuration de l'application ( connexion la Base de données)
├── features/                   # Modules de fonctionnalités
│   ├── Application/            # Gestion des candidatures
|   |    ├── core/              # Modèles de domaine, DTOs, interfaces, logique metier, schema, provider
|   |    ├── inBound            # Contrôleurs (couche HTTP)
|   |    ├── outBound           # Référentiels (couche d'accès aux données)
|   |    └── apply.module.ts
│   ├── Job/                    # Gestion des offres d'emploi
│   │   ├── core/               # Modèles de domaine, DTOs, interfaces, logique metier, schema, provider
│   │   ├── inBound/            # Contrôleurs (couche HTTP)
|   |   ├── outBound/           # Référentiels (couche d'accès aux données)
│   │   └── job.modules.ts        
│   └── User/                   # Gestion des utilisateurs
│       ├── core/               # Modèles de domaine, DTOs, interfaces
│       ├── inBound/            # Contrôleurs (couche HTTP)
|       ├── outBound/           # Référentiels (couche d'accès aux données)
│       └── user.module.ts      
└── main.ts                     # Point d'entrée de l'application
```

## Architecture

Projet job suit un modèle d'architecture propre avec trois couches principales :

1. **Couche Core** : Contient la logique métier, les modèles de domaine, les interfaces, le schema, le provider et les cas d'utilisation
2. **Couche Inbound** : Gère les requêtes HTTP via les contrôleurs
3. **Couche Outbound** : Gère la persistance des données via les référentiels

Cette séparation garantit que la logique métier est isolée des préoccupations externes, rendant l'application plus maintenable et testable.

## Fonctionnalités

  ### Gestion des Utilisateurs
  - Inscription et authentification des utilisateurs
  - Gestion de profil
  - Contrôle d'accès basé sur les rôles

  ### Gestion des Emplois
  - Création, lecture, mise à jour et suppression d'offres d'emploi

  ### Gestion des Candidatures
  - Soumission de candidatures
  - Suivi du statut des candidatures
  - Gestion des candidats pour les employeurs

## 🧱 Modules implémentés

| Module      | Dossier                | Fonctions principales            |
| ----------- | ---------------------- | -------------------------------- |
| Auth        | `common/auth`          | Login, validation JWT, guard     |
| User        | `features/User`        | CRUD utilisateur, rôles          |
| Job         | `features/Job`         | Créer, lister, trouver une offre |
| Application | `features/Application` | Postuler à une offre             |


## Pour Commencer

### Prérequis

- Nestjs 
- MongoDB (Mongoose)
- pnpm

### Installation

1. Cloner le dépôt
```bash
git clone https://github.com/Konanycode1/Job.git
cd Job
```

2. Installer les dépendances
```bash
pnpm install
```

3. build le projet
```bash
pnpm run build
```

4. Configurer les variables d'environnement
Voici un exemple des variables d'environnement nécessaires pour faire fonctionner l'application :
```bash
cp .env.example .env

  NODE_ENV=
  PORT=
  DATABASE_URL=""
  JWT_SECRET=""
  JWT_EXPIRES_IN=''
  JWT_REFRESH_SECRET=''
  JWT_REFRESH_EXPIRES_IN=''   
# Modifier .env avec votre configuration
```

5. Démarrer le serveur de développement
```bash
pnpm run start:dev
```


## 📄 Documentation Swagger

La documentation de l'API est disponible à `/api/docs` lorsque le serveur est en cours d'exécution, alimentée par Swagger.

Une fois le projet démarré :

```bash
GET http://localhost:3000/api/doc

```

### Contient les endpoints pour :

Auth

User

Job

Apply


## Authentification

Infini utilise l'authentification basée sur JWT. Pour accéder aux routes protégées :

1. Inscrivez un nouvel utilisateur ou connectez-vous avec des identifiants existants
2. Utilisez le jeton JWT retourné dans l'en-tête d'autorisation : `Bearer <token>`



## Tests

```bash
# Exécuter les tests unitaires
pnpm run test

# Exécuter les tests d'intégration
pnpm run test:e2e

# Générer la couverture de test
npm run test:cov
```

## Déploiement

### Build de Production

```bash
pnpm run build
pnpm run start:prod
```


## Licence

Ce projet est sous licence MIT - voir le fichier LICENSE pour plus de détails.

## Contact

Pour toute question ou support, veuillez contacter le responsable du projet à abrahamkonany@gmail.com