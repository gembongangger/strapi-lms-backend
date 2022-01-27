module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'a1fdd6de4f6958158f22d1c460b3c3cc'),
  },
});
