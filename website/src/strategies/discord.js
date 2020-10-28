require("dotenv").config();
const passport = require("passport");
const DiscordStrategy = require("passport-discord");
const User = require("../../authSchema.js");

passport.serializeUser((user, done) => {
  return done(null, user.discordId);
});

passport.deserializeUser(async (discordId, done) => {
  try {
    const user = await User.findOne({ discordId });
    return user ? done(null, user) : done(null, null);
  } catch (err) {
    console.error(err);
    return done(err, null);
  }
});

passport.use(
  new DiscordStrategy(
    {
      clientID: process.env.CLIENTID,
      clientSecret: process.env.CLIENTSECRET,
      callbackURL: process.env.CALLBACKURL,
      scope: ["identify", "guilds"],
    },
    async (aToken, rToken, profile, done) => {
      try {
        const { id, username, discriminator, avatar, guilds } = profile;

        const findUser = await User.findOneAndUpdate(
          { discordId: id },
          {
            discordId: id,
            discordTag: `${username}#${discriminator}`,
            avatar,
            guilds,
          },
          {
            upsert: true,
            new: true,
          }
        );
        done(null, findUser);
      } catch (err) {
        console.error(err);
        done(err, null);
      }
    }
  )
);
