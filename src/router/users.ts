import express from "express";

import { deleteUser, getAllUsers } from "../controllers/users";
import { isAuthenticated, isOwner } from "../middlewares";

export default (router: express.Router) => { 
  router.get('/users', isAuthenticated, getAllUsers)
  // cant delete other users beside authenticated one
  router.delete('/users/:id', isAuthenticated, isOwner, deleteUser)
}