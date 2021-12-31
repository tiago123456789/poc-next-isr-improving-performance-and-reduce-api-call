About the project:
==================

This project is one poc(PROOF OF CONCEPT) where I testing NEXT.JS with IRS(incremental static regenerate) this way in moment that I execute command build will cache data returned api and reused in application prevent access api all moment make request to application.

This strategy reduce api calls and load page more quickly, because no need execute api call.

But data can be modified, so using IRS to rebuild application after time define and execute api call take data modified.

In this project I will test with I can many domains redirect to the application NEXT.JS, but load distinct data based in domain accessed. For example:

- Access domain test.app.br show page with message: "Hello world".
- Access domain test2.app.br show page with message: "Olá mundo".

This way allow I have one application and many clients where each client have page with custom style and content.


Instructions to running project:
================================

- Clone the project
- Execute command **npm install**
- Execute command **npm run server-mock** to create api with fake data.
- Execute command **npm run build** to build application 
- Execute command **npm run start** to running application. You will can that the application no execute api call and after 2 minutes execute api call to get data and cache again.