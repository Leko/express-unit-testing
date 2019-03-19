import { createApp, addRoutes } from "./app";

const { PORT = 8888 } = process.env;

const app = addRoutes(createApp());

app.listen(PORT, () => {
  console.log(`Listening on :${PORT}`);
});
