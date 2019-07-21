# Original documentation
## Technical documentation
### Default
- [Scripts](./scripts.md)
- [Resources](./resources.md)
- [Create React App](./create-react-app.md)
## Assignment
- [Assignment](./front-end-assignment.md)

# Additions
## Scripts
`npm run scss` lance `node-sass` en mode `watch` pour une compilation live des css.
## Structure du projet
L'approche Atomic design a été adoptée. Quelques améliorations sont possibles :

- Optimisation de la structure de certains composants en vue d'une implémentation des stories.
- Les composants `<Product>` et `<CartItem>` présentent suffisamment de similitudes (image, description, actions) pour envisager un niveau d'abstraction supplémentaire avec un composant générique `<ProductItem>` qui pourrait être instancié sous forme de `Cards` pour le menu ou de `ListItems` pour le panier.
## Linter
`Eslint` avec la  config `Airbnb config`.
## Gestion des styles
Les styles sont gérés avec `node-sass` et peuvent être compilés via [npm run scss](#Scripts).

Variables additionnelles ajoutées aux [variables SCSS globales](../src/assets/scss/_variables.scss) :
```scss
$import-google-fonts: true !default;
$font-url: 'https://fonts.googleapis.com/css?family=Lato:400,700,400italic,700italic&subset=latin,latin-ext' !default;
$font-name: 'Lato' !default;
$font-family: $font-name, 'Helvetica Neue', Arial, Helvetica, sans-serif !default;
```
## Tests
Sous contrainte de temps, les reducers, actions et composants n'ont été que partiellement testés afin de pouvoir répondre aux autres exigences du projet.
## Hébergement
Le site est hébergé sur [http://unused-patch.surge.sh](http://unused-patch.surge.sh).
## Repository Github
[https://github.com/stleport/shopping-cart](https://github.com/stleport/shopping-cart)