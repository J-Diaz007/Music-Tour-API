const express = require('express');
const { Stage } = require('../models'); // Import your Stage model

const router = express.Router();

// Route to get all stages
router.get('/', async (req, res) => {
  try {
    const stages = await Stage.findAll();
    return res.status(200).json(stages);
  } catch (error) {
    return res.status(500).json({ error: 'Error fetching stages' });
  }
});

// Route to create a new stage
router.post('/', async (req, res) => {
  try {
    const stage = await Stage.create(req.body);
    return res.status(201).json(stage);
  } catch (error) {
    return res.status(500).json({ error: 'Error creating the stage' });
  }
});


// Add more routes as needed

//INDEX ROUTE
router.get('/', async (req, res) => {
    try {
      const stages = await Stage.findAll();
      return res.status(200).json(stages);
    } catch (error) {
      return res.status(500).json({ error: 'Error fetching stages' });
    }
  });

  //SHOW ROUTE
router.get('/:stageName', async (req, res) => {
    const stageName = req.params.stageName;
  
    try {
      const stage = await Stage.findOne({ where: { name: stageName } });
  
      if (!stage) {
        return res.status(404).json({ error: 'Stage not found' });
      }
  
      return res.status(200).json(stage);
    } catch (error) {
      return res.status(500).json({ error: 'Error fetching the stage' });
    }
  });
  

  //CREATE ROUTE
  router.post('/', async (req, res) => {
    try {
      const stage = await Stage.create(req.body);
      return res.status(201).json(stage);
    } catch (error) {
      return res.status(500).json({ error: 'Error creating the stage' });
    }
  });

//UPDATE ROUTE
  router.put('/:stageId', async (req, res) => {
    const stageId = req.params.stageId;
  
    try {
      const [updatedCount] = await Stage.update(req.body, { where: { stage_id: stageId } });
      if (updatedCount === 0) {
        return res.status(404).json({ error: 'Stage not found' });
      }
      return res.status(200).json({ message: 'Stage updated successfully' });
    } catch (error) {
      return res.status(500).json({ error: 'Error updating the stage' });
    }
  });
  
  //DELETE ROUTE
  router.delete('/:stageId', async (req, res) => {
    const stageId = req.params.stageId;
  
    try {
      const deletedCount = await Stage.destroy({ where: { stage_id: stageId } });
      if (deletedCount === 0) {
        return res.status(404).json({ error: 'Stage not found' });
      }
      return res.status(200).json({ message: 'Stage deleted successfully' });
    } catch (error) {
      return res.status(500).json({ error: 'Error deleting the stage' });
    }
  });

module.exports = router;