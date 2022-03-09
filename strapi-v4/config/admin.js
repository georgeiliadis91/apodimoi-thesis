module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'ea8ced1004c20017f8c54e11bea4a63e'),
  },
});
