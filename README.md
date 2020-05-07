# Utilisation du Git
```
git clone https://github.com/jefflawsn/Carte.git  
```

### Pour Pull
```
git pull/git pull origin master  
```

### Pour Push
```
git add .  
git commit -m "message"  
git push/git push origin master  
```

### Si problem en Push
```
git fetch/git fetch origin master  
git rebase/git rebase origin master  
git add .  
git commit -m "message"  
git push/git push origin master  
```

# Projet Carte déconfinement Jeff&4T
Après le déconfinement nous aurions le droit de nous déplacer dans un rayon de 100km à vol d'oiseau !  
  
Mais que faire ?  
Nous proposon s avec notre application aux internautes, de découvrir de nouveaux lieux autour de chez eux, tout en respectant le rayon de 100km, vous pouvez ainsi vous amuser !!!  

# Organisation  
## DATABASE 
Trouver une liste de POI, avec titredescription, image et catégorie  
Afficher les POI sur la carte  
Enregistrer les informations sur une base de données  
Retourner les POIs dans le Rayon de 100km  

## ONGLET MAP
Entrer Ville, Lieu, addresse...  
Trouver coordonnées GPS (trouver position automatique)  
Enregistrer coordonnées pour réutilisable  
Afficher carte cercle 100km  
Afficher les POI  
Tags de catégories pertinente pour les POI  
Pin cliquable, avec photo, titre et lien vers onglet POI  

## ONGLET POI
Titre POI  
Categories POI  
Distance vol d'oiseau, itinéraire google maps, temps de trajets...  
Description  
Contacts  
POI enregistrable dans Favoris  

## Favoris
Liste visuel des POI  
Lien vers Onglet POI  

# Code developpers.amadeus
API : WcldMsB2tLE920ukmAPwKRFDWz0LF5wc  
Pass : H2Od7bLf6ALCEsun  
Alternative MapQuests  
https://geo.api.gouv.fr/adresse
distance entre 2 point par latitude longitude (X1, Y1) - (X2, Y2)
acos(sin(radians(X1))*sin(radians(X2))+cos(radians(X1))*cos(radians(X2))*cos(radians(Y1-Y2)))*6371

# Installation
npm install amadeus --save
npm i node-fetch --save
