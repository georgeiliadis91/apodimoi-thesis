module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '7b5098939652527d2ef5af798e171275'),
  },
});
