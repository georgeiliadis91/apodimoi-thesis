module.exports = ({ env }) => ({
  email: {
    config: {
      provider: "sendmail",
      settings: {
        defaultFrom: "qabalma769@gaduguda.xyz",
        defaultReplyTo: "qabalma769@gaduguda.xyz",
        testAddress: "qabalma769@gaduguda.xyz",
      },
    },
  },
});
