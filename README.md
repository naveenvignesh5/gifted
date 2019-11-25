### GIFTED - A google for gifs. :blush:

A simple react based web application to implement a search engine for gifs and preview them.

### React Components Used

1. SearchBar - Fn component with input to get search queries with callback
   
2. GifView - Fn component which is core building block of the list of gifs. Each component is standalone image with loader and overlay view to show cta when cursor moves to the GIF
   
3. GifList - Simple wrapper based on grid layout to render the GifView component tree.

4. PaginationTab - Pagniation component ui which has list of buttons to navigate.
   
### Development Setup

```shell
$ git clone git@github.com:naveenvignesh5/gifted.git

$ yarn install

$ PORT=5000 yarn start # you can set any port you want
```

### Testing

```shell
$ yarn test
```