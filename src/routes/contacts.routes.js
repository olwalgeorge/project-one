const express = require("express");
const routes = express.Router();
const {
  createContact,
  getAllContacts,
  getDevelopers,
  getContactById,
  updateContact,
  replaceContact,
  deleteContact,
  deleteAllContacts,
} = require("../controllers/contacts.controller");

/**
 * @swagger
 * /contacts:
 *   post:
 *     summary: Create a new contact
 *     tags: [Contacts]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               firstName:
 *                 type: string
 *               lastName:
 *                 type: string
 *               email:
 *                 type: string
 *             example:
 *               firstName: John
 *               lastName: Doe
 *               email: john@example.com
 *     responses:
 *       201:
 *         description: Created
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                 data:
 *                   type: object
 *                   properties:
 *                     id:
 *                       type: string
 *                     firstName:
 *                       type: string
 *                     lastName:
 *                       type: string
 *                     email:
 *                       type: string
 *             example:
 *               message: Contact created successfully
 *               data:
 *                 id: 1
 *                 firstName: John
 *                 lastName: Doe
 *                 email: john@example.com
 *       500:
 *         description: Internal Server Error
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                 error:
 *                   type: object
 *                   properties:
 *                     name:
 *                       type: string
 *                     message:
 *                       type: string
 *                     stack:
 *                       type: string
 *             example:
 *               message: Failed to create contact
 *               error:
 *                 name: Error
 *                 message: Failed to create contact
 *                 stack: Error: Failed to create contact
 *                 at createContact (C:\Users\john\Documents\GitHub\w01-project\src\controllers\contacts.controller.js:13:19)
 *                 at processTicksAndRejections (internal/process/task_queues.js:93:5)
 *   get:
 *     summary: Get all contacts
 *     tags: [Contacts]
 *     responses:
 *       200:
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   id:
 *                     type: string
 *                   firstName:
 *                     type: string
 *                   lastName:
 *                     type: string
 *                   email:
 *                     type: string
 *       500:
 *         description: Internal Server Error
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                 error:
 *                   type: object
 *                   properties:
 *                     name:
 *                       type: string
 *                     message:
 *                       type: string
 *                     stack:
 *                       type: string
 *             example:
 *               message: Failed to retrieve contacts
 *               error:
 *                 name: Error
 *                 message: Failed to retrieve contacts
 *                 stack: Error: Failed to retrieve contacts
 *                 at getAllContacts (C:\Users\john\Documents\GitHub\w01-project\src\controllers\contacts.controller.js:36:19)
 *                 at processTicksAndRejections (internal/process/task_queues.js:93:5)
 *   delete:
 *     summary: Delete all contacts
 *     tags: [Contacts]
 *     responses:
 *       200:
 *         description: OK
 *       500:
 *         description: Internal Server Error
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                 error:
 *                   type: object
 *                   properties:
 *                     name:
 *                       type: string
 *                     message:
 *                       type: string
 *                     stack:
 *                       type: string
 *             example:
 *               message: Failed to delete all contacts
 *               error:
 *                 name: Error
 *                 message: Failed to delete all contacts
 *                 stack: Error: Failed to delete all contacts
 *                 at deleteAllContacts (C:\Users\john\Documents\GitHub\w01-project\src\controllers\contacts.controller.js:73:19)
 *                 at processTicksAndRejections (internal/process/task_queues.js:93:5)
 * /contacts/{contactId}:
 *   get:
 *     summary: Get a contact by ID
 *     tags: [Contacts]
 *     parameters:
 *       - in: path
 *         name: contactId
 *         required: true
 *         schema:
 *           type: string
 *         description: ID of the contact
 *     responses:
 *       200:
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: string
 *                 firstName:
 *                   type: string
 *                 lastName:
 *                   type: string
 *                 email:
 *                   type: string
 *       404:
 *         description: Not Found
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                 error:
 *                   type: object
 *                   properties:
 *                     name:
 *                       type: string
 *                     message:
 *                       type: string
 *                     stack:
 *                       type: string
 *             example:
 *               message: Contact not found
 *               error:
 *                 name: Error
 *                 message: Contact not found
 *                 stack: Error: Contact not found
 *                 at getContactById (C:\Users\john\Documents\GitHub\w01-project\src\controllers\contacts.controller.js:54:19)
 *                 at processTicksAndRejections (internal/process/task_queues.js:93:5)
 *       500:
 *         description: Internal Server Error
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                 error:
 *                   type: object
 *                   properties:
 *                     name:
 *                       type: string
 *                     message:
 *                       type: string
 *                     stack:
 *                       type: string
 *             example:
 *               message: Failed to retrieve contact
 *               error:
 *                 name: Error
 *                 message: Failed to retrieve contact
 *                 stack: Error: Failed to retrieve contact
 *                 at getContactById (C:\Users\john\Documents\GitHub\w01-project\src\controllers\contacts.controller.js:54:19)
 *                 at processTicksAndRejections (internal/process/task_queues.js:93:5)
 *   patch:
 *     summary: Update a contact by ID
 *     tags: [Contacts]
 *     parameters:
 *       - in: path
 *         name: contactId
 *         required: true
 *         schema:
 *           type: string
 *         description: ID of the contact
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               firstName:
 *                 type: string
 *               lastName:
 *                 type: string
 *               email:
 *                 type: string
 *             example:
 *               firstName: UpdatedJohn
 *               lastName: UpdatedDoe
 *               email: updated@example.com
 *     responses:
 *       200:
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: string
 *                 firstName:
 *                   type: string
 *                 lastName:
 *                   type: string
 *                 email:
 *                   type: string
 *       404:
 *         description: Not Found
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                 error:
 *                   type: object
 *                   properties:
 *                     name:
 *                       type: string
 *                     message:
 *                       type: string
 *                     stack:
 *                       type: string
 *             example:
 *               message: Contact not found
 *               error:
 *                 name: Error
 *                 message: Contact not found
 *                 stack: Error: Contact not found
 *                 at updateContact (C:\Users\john\Documents\GitHub\w01-project\src\controllers\contacts.controller.js:90:19)
 *                 at processTicksAndRejections (internal/process/task_queues.js:93:5)
 *       500:
 *         description: Internal Server Error
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                 error:
 *                   type: object
 *                   properties:
 *                     name:
 *                       type: string
 *                     message:
 *                       type: string
 *                     stack:
 *                       type: string
 *             example:
 *               message: Failed to update contact
 *               error:
 *                 name: Error
 *                 message: Failed to update contact
 *                 stack: Error: Failed to update contact
 * /contacts/developer:
 *   get:
 *     summary: Get all contacts with the Developer role
 *     tags: [Contacts]
 *     responses:
 *       200:
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   id:
 *                     type: string
 *                   firstName:
 *                     type: string
 *                   lastName:
 *                     type: string
 *                   email:
 *                     type: string
 *       500:
 *         description: Internal Server Error
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                 error:
 *                   type: object
 *                   properties:
 *                     name:
 *                       type: string
 *                     message:
 *                       type: string
 *                     stack:
 *                       type: string
 *             example:
 *               message: Failed to retrieve developers
 *               error:
 *                 name: Error
 *                 message: Failed to retrieve developers
 *                 stack: Error: Failed to retrieve developers
 */

routes
  .post("/", createContact)
  .get("/", getAllContacts)
  .get("/developer", getDevelopers)
  .get("/:contactId", getContactById)
  .patch("/:contactId", updateContact)
  .put("/:contactId", replaceContact)
  .delete("/:contactId", deleteContact)
  .delete("/", deleteAllContacts);

module.exports = routes;
