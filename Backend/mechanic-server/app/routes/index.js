import userRoute from "../routes/auth.routes.js";
const setupRoutes = (app) => {
  app.use("/api/v1/auth", userRoute);
};
export default setupRoutes;
