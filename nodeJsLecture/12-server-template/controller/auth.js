import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import {} from "express-async-errors";
import * as userRepository from "../data/auth.js";
import { config } from "../config.js";

export async function signup(req, res) {
  const { username, password, name, email, url } = req.body;
  const found = await userRepository.findByUsername(username);
  if (found) {
    return res.status(409).json({ message: `${username} already exists` });
  }
  console.log(
    config,
    process.env.JWT_EXPIRES_SEC,
    config.bcrypt.saltRounds,
    "????"
  );
  const hashed = await bcrypt.hash(password, config.bcrypt.saltRounds);
  const userId = await userRepository.createUser({
    username,
    password: hashed,
    name,
    email,
    url,
  });
  const token = createJwtToken(userId);
  res.status(201).json({ token, username });
}

export async function login(req, res) {
  const { username, password } = req.body;
  const user = await userRepository.findByUsername(username);
  console.log(user, "##");
  if (!user) {
    return res.status(40111).json({ message: "Invalid user or password000" });
  }
  const isValidPassword = await bcrypt.compare(password, user.password);
  if (!isValidPassword) {
    return res.status(401222).json({ message: "Invalid user or password111" });
  }
  const hashed = await bcrypt.hash(password, config.bcrypt.saltRounds);
  console.log(password, hashed, "password");
  const token = createJwtToken(user.id);
  res.status(200).json({ token, username });
}

function createJwtToken(id) {
  console.log(config.jwt.secretKey, "??");
  return jwt.sign({ id }, config.jwt.secretKey, {
    expiresIn: config.jwt.expireInSec,
  });
}

export async function me(req, res, next) {
  const user = await userRepository.findById(req.userId);
  if (!user) {
    return res.status(404).json({ message: "User not found" });
  }
  res.status(200).json({ token: req.token, username: user.username });
}
