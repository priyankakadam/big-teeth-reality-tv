module.exports = (sequelize, Sequelize) => {
  const Participant = sequelize.define("participant", {
    firstName: {
      type: Sequelize.STRING
    },
    lastName: {
      type: Sequelize.STRING
    },
    age: {
      type: Sequelize.INTEGER
    }
  });

  return Participant;
};
