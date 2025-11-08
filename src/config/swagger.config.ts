import swaggerJsdoc from "swagger-jsdoc";
import swaggerUi from "swagger-ui-express";

const swaggerDocument = swaggerJsdoc({
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Divar Express API",
      description: "Divar Express API",
      version: "1.0.0",
    },
  },
  apis: [],
});

export const swaggerConfig = swaggerUi.setup(swaggerDocument, {});
