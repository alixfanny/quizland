/*cliquez sur le bouton jouez = lance le jeu 

la 1er question s'affiche 

l'utilisateur entre son choix
valide le choix 
affiche du resultat
s'auvegarde du resultat
indication bonne reponse 

passe a la 2 eme question 

l'utilisateur entre son choix
valide le choix 
affiche du resultat
s'auvegarde du resultat
indication bonne reponse 

passe a la 3 eme question 

l'utilisateur entre son choix
valide le choix 
affiche du resultat
s'auvegarde du resultat
indication bonne reponse 

le jeu s'arrete indique le score du joueurs.*/


const quiz = {
	"Quel est le numéro de la maison des Dursley à Privet Drive ?" : [ 
        4,
        6,
        15
    ],
    "Où vont Dudley et ses parents pour l'anniversaire de celui-ci ?": [
        "Au parc d'attraction",
        "Au zoo",
        "Chez la tante de Dudley",
    ],
    "Combien de cadeau reçoit-il ?": [
        37,
        38,
        39,
    ],
    "Comment s'appelle le pub qui mène au chemin de traverse ?": [
        "Le chaudron baveur",
        "Le repère des sorciers",
        "A la bave de crapaud",
    ],
    "Quelle matière enseigne Quirrel ?": [
        "Les potions",
        "La métamorphose",
        "La défense contre les forces du mal",
    ],
    "Comment s'appelle le miroir magique ?": [
       " Le miroir du désir",
        "Le miroir su sirdé",
       " Le miroir du rised",
    ],
    "quel est le métier de Hagrid ?": [
        "Professeur des créatures magiques",
        "Garde-chasse",
       " Élève à Poudlard",
    ],
    "Comment s'appelle la friandise qui se transforme en grenouille ?": [
       " Le chocogrenouille",
       " Le magigrenouille",
        "Les dragées de bertie crochu",
    ],
    "Combien de Weasley sont à l'école cette année ?": [
        4,
        5,
        6,
    ],
    "Quelle est la formule magique qui permet d'ouvrir une porte ?": [
        "Petrificus totalus",
        "Alohomorah",
        "Locomotor mortis",
    ],
    "Comment s'appelle le chien qui garde la trappe ?": [
       " Troistêtes",
        "Touffu",
        "Poipoils",
    ],
    "Comment faire pour passer devant lui ?":[
        "Utiliser la formule magique permettant de parler comme les chiens",
        "Lui carresser le cou",
        "Jouer de la musique",
    ],
    "Quelle est la particularité du plafond de la Grande Salle?": [
        "Professeur Rogue",
        "Professeur McGonagall",
        "Professeur Quirrell",
    ],
    "Qu'est-ce qui se cache sous la trappe?": [
        "Une nouvelle formule magique",
        "Une pierre qui permet la vie éternelle",
        "Du sang de licorne",
    ],
    "Qui est-ce qui était sous la trappe d'après Harry ?": [
        "Il est couvert d'étoiles",
        "On y voit les matchs de quidditch",
        "Il est tapissé avec les drapeaux représentant les maisons",
    ],
    "Quelles sont les 4 maisons de Poudlard ?": [
       " Serdaigle, gryffodor, poufsouffle et serpentard",
        "Serdaigle, gryffondor, poufsouffle et serpentard",
        "Cerf-d'aigles, gryffondor, poufsouffle et serpentard",
    ],
    "Que contient la baguette magique de Harry ?": [
        "Une plume de phoenix",
        "De la bave de crapaud",
        "De la sueur de dragon",
    ],
    "Quelle pièce de l'échiquier Harry remplace-t-il ?": [
        "Un cavalier",
        "Un fou",
        "Une tour",
    ],
    "Comment s'appelle le train qui mène à l'école de Poudlard ?": [
        "Le Poudlard Express",
        "Le train Poudlard",
        "Le Poudlard rouge",
    ],
    "comment s'apelle la voix d'embarquement du train pour poudlard?":[
        "9 3/4",
        "3/4 9",
        "9",
    ],
}

for (let question of quiz) {
   console.log(question);

}