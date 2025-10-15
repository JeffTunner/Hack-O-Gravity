const express = require('express');
const router = express.Router();
const issuesController = require('../controllers/issuesController');

// Get all issues
router.get('/', issuesController.getIssues);

// Create a new issue
router.post('/', issuesController.createIssue);

// Update an existing issue
router.put('/:id', issuesController.updateIssue);

// Delete an issue
router.delete('/:id', issuesController.deleteIssue);

module.exports = router;