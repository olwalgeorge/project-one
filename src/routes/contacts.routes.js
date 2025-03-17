const express = require("express");
const routes = express.Router();
const {
  createContact,
  getAllContacts,
  getContactById,
  updateContact,
  deleteContact,
} = require("../controllers/contacts.controller");

/**
 * @swagger
 * /contacts:
 *   post:
 *     tags:
 *       - Contacts
 *     summary: Create a new contact
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
 *       500:
 *         description: Internal Server Error
 *   get:
 *     tags:
 *       - Contacts
 *     summary: Get all contacts
 *     responses:
 *       200:
 *         description: OK
 *       500:
 *         description: Internal Server Error
 *
 * /contacts/{contactId}:
 *   get:
 *     tags:
 *       - Contacts
 *     summary: Get a contact by ID
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
 *       404:
 *         description: Not Found
 *       500:
 *         description: Internal Server Error
 *   patch:
 *     tags:
 *       - Contacts
 *     summary: Update a contact by ID
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
 *       404:
 *         description: Not Found
 *       500:
 *         description: Internal Server Error
 *   delete:
 *     tags:
 *       - Contacts
 *     summary: Delete a contact by ID
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
 *       404:
 *         description: Not Found
 *       500:
 *         description: Internal Server Error
 */

routes
  .post("/", createContact)
  .get("/", getAllContacts)
  .get("/:contactId", getContactById)
  .patch("/:contactId", updateContact)
  .delete("/:contactId", deleteContact);

module.exports = routes;
