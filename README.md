# Original documentation
## Technical documentation
### Default
- [Scripts](./docs/scripts.md)
- [Resources](./docs/resources.md)
- [Create React App](./docs/create-react-app.md)
## Assignment
- [Assignment](./docs/front-end-assignment.md)

# Additions
## Scripts
`npm run scss` lance `node-sass` en mode `watch` pour une compilation live des css.
## Structure du projet
### Composants
L'approche Atomic design a été adoptée mais la structure de certains composant reste à améliorer pour permettre de répondre aux  exigences d'isolation imposées par Storybook.
#### Améliorations possibles
- Optimisation de la structure des composants en vue d'une implémentation des stories.
- Les composants `<Product>` et `<CartItem>` présentent suffisamment de similitudes (image, description, actions) pour envisager un niveau d'abstraction supplémentaire avec un composant générique `<ProductItem>` qui pourrait être instancié sous forme de `Cards` pour le menu ou de `ListItems` pour le panier.
## Linter
`Eslint` avec la  config `Airbnb config`.
## Gestion des styles
Les styles sont gérés avec `SASS` et peuvent être compilés en live pendant le développement avec la commande [npm run scss](#Scripts).

Variables additionnelles ajoutées aux [variables SCSS globales](./src/assets/scss/_variables.scss) :
```scss
$import-google-fonts: true !default;
$font-url: 'https://fonts.googleapis.com/css?family=Lato:400,700,400italic,700italic&subset=latin,latin-ext' !default;
$font-name: 'Lato' !default;
$font-family: $font-name, 'Helvetica Neue', Arial, Helvetica, sans-serif !default;
```
## Tests
Les reducers, actions et composants n'ont été partiellement testés afin de répondre aux autres exigences du projet.
## Hébergement
Le site est hébergé sur [http://unused-patch.surge.sh](http://unused-patch.surge.sh).
## Repository Github
[https://github.com/stleport/shopping-cart](https://github.com/stleport/shopping-cart)