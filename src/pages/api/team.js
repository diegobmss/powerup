export default (req, res) => {
  res.status(200).json([
    {
      name: "Paloma Barroso",
      email: "palomabarroso@ioasys.com.br",
      avatar: require("../../assets/images/team/paloma.png"),
    },
    {
      name: "Diego Barbosa",
      email: "diegobarbosa@ioasys.com.br",
      avatar: require("../../assets/images/team/diego.png"),
    },
  ]);
};
