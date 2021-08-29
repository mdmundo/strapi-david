module.exports = ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 1337),
  url: env('URL', 'https://0l5ox8r4.anyfiddle.run'),
  admin: {
    auth: {
      secret: env('ADMIN_JWT_SECRET', 'ae27ce0ee0c093300761374e92536cd2'),
    },
  },
});
