const express = require('express');
const app = express();
const swaggerJsDoc = require('swagger-jsdoc');
const swaggerUI = require('swagger-ui-express');

const port = process.env.PORT || 8080;

const swaggerOptions = {
    swaggerDefinition: {
        info:{
            version: "1.0.0",
            title:"Customers - API - result",
            description: "Customers result all API",
            contact:{
                name: "caiodaluz04@gmail.com",
            },
            servers:["http://localhost:8080"]
        }
    },
    apis:["index.js"]
}

const swaggerDocs = swaggerJsDoc(swaggerOptions);

app.use("/api-docs",swaggerUI.serve,swaggerUI.setup(swaggerDocs));

//Routes

/**
 * @swagger
 * /customers:
 *   get:
 *      description: Use to request all customers
 * 
 *      responses:
 *          '200':
 *              description: A succesful response
 */
app.get('/customers', (req,res)=>{
    res.status(200).send("Customers result");
})

/**
 * @swagger
 * /customers:
 *   put:
 *      description: Use to update all customers
 *      responses:
 *          '201':
 *              description: A succesfull update
 */
 app.put('/customers', (req,res)=>{
    res.status(200).send("Customers updated successfully");
})

// /**
// * @swagger
// * /customer:
// * put:
// * description: Use to return all customers
// * parameters:
// * - name: customer
// * in: query
// * description: Name of our customer
// * required: false
// * schema:
// * type: string
// * format: string
// * responses:
// * '201':
// * description: Successfully created user
// */
// app.put("/customer", (req, res) => {
//     res.status(200).send("Successfully updated customer");
//     });

app.listen(port, ()=>{
    console.log(`Servidor rodando na porta ${port}`);
});