# API Example 
An example on how to generate a docusaurus documentation from Open API specifications. 

## Steps 

- Add your specs on open api folder
- Generate JSON specs thanks to @redocly/cli
```bash
cd openapi
npx @redocly/cli@latest bundle openapi.yaml --output dist/openapi.json
```
- Copy your open api specs on your docusaurus website 
```bash
cd ../my-website
cp ../openapi/dist/openapi.json static/
```
- Clean previous Docusaurus API docs and generate new API documentation
```bash
npm run docusaurus clean-api-docs all
npm run docusaurus gen-api-docs all
```
- Start your website 
```bash
npm start
```

And voila ! 