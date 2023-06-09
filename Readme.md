## Style components
allow you write CSS in JS

``` npm install styled-components@5.3.10 ```

## To cover all screen with heigh 100hv
in index.html, before body tag

```
<style>
      * {
        padding: 0;
        margin: 0;
        <!-- font-family: 'Roboto', sans-serif; -->
      }
    </style>

```


## React icons 
npm install react-icons --save


## React maps
npm i -S react-simple-maps


## three.js
npm install three @react-three/fiber @react-three/drei

## gltf, look models in sketchfab
npm install -g gltf-pipeline
* gltf-pipeline -i scene.gltf -o laptopcp.gltf -d
* npx gltfjsx laptopcp.gltf --transform


## in eslintrc.cjs, to deloy in vercel
add {
  ...
  env: {
    node: true
  }
  ...
}