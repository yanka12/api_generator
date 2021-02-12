# Profile generator

## Informations générales

C'est une API qui génère de manière aléatoire des profils de  personnes suivant leur :  
- Nom,  
- Job,  
- Adresse,  
- Pays.  

*Hello my name is Albert Legros I, I'm a(an) Central Branding Consultant, I live at 61211 Odie Meadow in Chad.*

## Réalisation  

J'ai créé l'api sous Node.js et j'utilise plusieurs modules :  
- express,  
- joi pour valider le format des donnnées.    
- express-swagger-generator et swagger pour la JS doc, utilisable via la route ```http://localhost:5000/api-docs```  
- pluralize, 
- faker que j'ai utilisé pour générer une base de donnée en json,  

## Installation

### 1. Cloner le repo
- en utilisant la clé SSH
```
git clone git@github.com:yanka12/api_generator.git
```
- en utilisant HTTPS
```
git clone [git@github.com:yanka12/api_generator.git](https://github.com/yanka12/api_generator.git)
```
### 2. Installer les dépendances
```
npm i
```
### 3. Créer un fichier .env reprenant les informations fournies dans le document `.env.example`
### 4. Lancer le script
```
npm start
```
### 5. Tester les routes via swagger
```
http://localhost:<port>/api-docs
```

## Auteur  

Guillaume Cuvillers  

## Licence  

ISC

