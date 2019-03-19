import passport from "passport";
import { Strategy as LocalStrategy } from "passport-local";

const user = {
  id: "xxx",
  nickname: "Taro",
  username: "test",
  password: "password"
};

passport.serializeUser((u: typeof user, done) => {
  done(null, u.id);
});

passport.deserializeUser((_: string, done) => {
  done(null, user);
});

passport.use(
  "local",
  new LocalStrategy((username: string, password: string, done) => {
    if (username === user.username && password === user.password) {
      done(null, user);
    } else {
      done(null, false, { message: "Invalid username or password" });
    }
  })
);

export { passport };
