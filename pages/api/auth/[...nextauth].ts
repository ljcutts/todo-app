import NextAuth from "next-auth";
import AppleProvider from "next-auth/providers/apple"
import GoogleProvider from "next-auth/providers/google"
import EmailProvider from "next-auth/providers/email"
import GithubProvider from "next-auth/providers/github"
import { MongoDBAdapter } from "@next-auth/mongodb-adapter";
//import {clientPromise, client} from "@/mongodb";
import mongoose from "mongoose";
//import express from "express";
//import { ExpressAdapter } from "next-auth/express-adapter";

//const expressApp = express();

// Configure NextAuth.js providers
const providers = [
  // OAuth authentication providers
  AppleProvider({
    clientId: process.env.APPLE_ID as string,
    clientSecret: process.env.APPLE_SECRET as string,
  }),
  GoogleProvider({
    clientId: process.env.GOOGLE_ID as string,
    clientSecret: process.env.GOOGLE_SECRET as string,
  }),

  GithubProvider({
    clientId: process.env.GITHUB_ID as string,
    clientSecret: process.env.GITHUB_SECRET as string
  }),
];



// Configure NextAuth.js options
const options = {
  providers,
  //adapter: MongoDBAdapter(clientPromise),
};

export default NextAuth(options);