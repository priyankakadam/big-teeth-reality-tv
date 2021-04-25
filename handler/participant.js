const db = require("../model");
const asyncHandler = require('../middleware/async');
const Participants = db.participants;
const Op = db.Sequelize.Op;


exports.create = asyncHandler(async (req, res) => {
  const { firstName, lastName, age} = req.body;

  if(!firstName) res.status(400).send({ message: 'First Name cannot be empty'});

  if(!age || age < 18) res.status(400).send({ message: 'Age cannot be empty or less than 18'});

  const participantInfo = {
    firstName,
    lastName,
    age
  };
  
  let createdParticipant;
  try {
    createdParticipant = await Participants.create(participantInfo)
  } catch(error) {
    res.status(500).send({ error: error });
  }
  res.status(201).send(createdParticipant);
});

exports.findAll = asyncHandler(async (req, res) => {
  let allParticipants;
  try {
    allParticipants = await Participants.findAll();
  } catch(error) {
    res.status(500).send(error);
  }
  res.status(200).send(allParticipants);
});

exports.findOne = asyncHandler(async (req, res) => {
  let participantInfo;
  const id = req.params.id;
  try {
    participantInfo = await Participants.findByPk(id);
  } catch(error) {
    res.status(500).send(error);
  }
  res.status(200).send(participantInfo);
});

exports.update = asyncHandler(async (req, res) => {
  const id = req.params.id;
  let isUpdated;
  try {
    isUpdated = await Participants.update(req.body, { where: { id : id }});
  } catch(error) {
    res.status(500).send(error);
  }
  console.log('Is Updated --- ', isUpdated);
  if(isUpdated[0] === 1) {
    res.status(200).send({ message: "Update successful" });
  }  else {
    res.status(500).send({ error: 'Failed to update for id ', id});
  }
});

exports.delete = async (req, res) => {
  const id = req.params.id;
  let isDeleted;
  try {
    isDeleted = await Participants.destroy({ where: { id: id }});
  } catch(error) {
    res.status(500).send(error);
  }
  if(isDeleted === 1) {
    res.status(201).send({ message: `Delete data successfully for id ${id}` });
  } else {
    res.status(500).send({ message: `Failed to delete for id ${id}` })
  }
};

