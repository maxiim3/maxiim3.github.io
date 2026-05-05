Lis AGENTS.md puis initialise les fichiers de contexte du dossier .ai/context pour ce projet.

Objectif :
Remplir les fichiers suivants avec des informations concrètes, utiles et compactes, basées sur le code réel du repo :

- .ai/context/project.md
- .ai/context/architecture.md
- .ai/context/conventions.md
- .ai/context/commands.md

Contraintes :

- Ne modifie aucun fichier applicatif.
- Ne refactorise rien.
- Ne corrige aucun bug.
- Ne lance aucune commande destructive.
- Ne crée pas de story BMAD.
- Ne développe rien.
- Ne fais que lire, analyser et documenter.

Méthode :

1. Inspecte la structure du projet.
2. Identifie le framework, le langage, les librairies majeures et les patterns dominants.
3. Lis les fichiers de configuration utiles : package.json, tsconfig, vite/next/nuxt/angular config, eslint, prettier, vitest/jest/playwright, docker, supabase, etc.
4. Identifie les commandes disponibles : dev, build, test, lint, typecheck, format, preview.
5. Identifie les conventions du projet : structure de dossiers, nommage, style composants, gestion état, routing, API, tests.
6. Identifie les zones sensibles : auth, permissions, DB, state management, paiement, temps réel, migrations, intégrations externes.
7. Mets à jour uniquement les fichiers .ai/context/\*.md.

Format attendu :

- Informations synthétiques.
- Listes courtes.
- Pas de blabla.
- Pas d’hypothèses non signalées.
- Si une information est incertaine, écris “À confirmer”.
- Si une commande n’existe pas clairement dans package.json ou équivalent, ne l’invente pas.

À la fin, donne-moi un résumé avec :

- fichiers de contexte mis à jour
- stack détectée
- commandes principales
- zones à risque
- informations manquantes ou à confirmer
