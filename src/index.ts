import { MikroORM } from "@mikro-orm/core";
import { __prod__ } from "./constants";

const main = async () => {
  const orm = await MikroORM.init({
    entities: [],
    dbName: "readit",
    user: "admin",
    password: "admin",
    type: "postgresql",
    debug: !__prod__,
  });
};
