# Bumblebee
Bumblebee... Bumblebee... Bumblebee...

### Prerequisites

```
Node

Yarn or NPM
```

### Installing

1. Clone the code
2. Run `npm install` or `yarn install` under root directory
3. Create a new mini program project from the `Wechat Development Tool`
4. Copy all generated files from `Wechat Development Tool` to the folder `src`
5. Run `npm run dev`
6. Open the `mp-target-folder` folder from `Wechat Development Tool` to preview the mini program screen
7. Edit your code from `src`

If you have mutile mini account like dev account or prod account, you could specify you mini program config files to the file `env.${YOUR-ENVIRONMENT}.json` like `env.dev.json` or `env.prod.jsonn`

if you wish to switch the mini program account, change the `scripts` section from package.json and specify the name.

## Deployment

run `npm run build-dev` or `npm run build-stg` or `npm run build-prod` to build the final release files. 
The final files for releasing are under folder `mp-target-folder`

## Authors

Liu Cheng <liucheng@flyingant.me>