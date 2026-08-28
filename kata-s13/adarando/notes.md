# Qu'est-ce qu'une prop ? D'où vient-elle, et qui décide de sa valeur ?

Une prop est une propriété qu'on attribue à un composant. Elle vient du composant parent quie l'envoie au compsant enfant.
Celle-ci peut ensuite par exemple, faire appel à une données présentes dans un tableau d'objets.

# Pourquoi React a besoin d'une key sur les éléments d'une liste ?

Dans le cas d'un map() qui va parcrourir les différents objets d'un tableau, on a besoin d'une propriété commune à chaque objet (un id par exemple), c'est la key. Elle permet d'identifier de manière unique chaque élément d'une liste.

# EtiquetteDifficulte est tout petit. Qu'est-ce qu'on gagne à en faire un composant ?

Il est facilement réutilisable et facilement modifiable car indépendant du reste.

# Pourquoi className et pas class ?

className est utilisé en JSX/React pour gérer le CSS, class pour du JS/HTML plus classique. Je pense que c'est aussi pour qu'il n'y ait pas de conflit entre les deux.

# En une phrase : qu'est-ce qui te revient facilement, et qu'est-ce que tu avais oublié ?

Facilement :

- les impots/exports
- le HTML dans le return
  Difficilement :
- les props
- le méthode JS que l'on peut utiliser sur un tableau
