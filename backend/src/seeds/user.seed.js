import { config } from "dotenv";
import  connectDB  from "../lib/db.js";
import User from "../models/user.model.js";

config();

const seedUsers = [
  // Female Users
  {
    email: "ayesha.khan@example.com",
    fullName: "Ayesha Khan",
    password: "123456",
  },
  {
    email: "fatima.ahmed@example.com",
    fullName: "Fatima Ahmed",
    password: "123456",
  },
  {
    email: "zara.malik@example.com",
    fullName: "Zara Malik",
    password: "123456",
  },
  {
    email: "maryam.ali@example.com",
    fullName: "Maryam Ali",
    password: "123456",
  },
  {
    email: "hafsa.chaudhry@example.com",
    fullName: "Hafsa Chaudhry",
    password: "123456",
  },
  {
    email: "iqra.hassan@example.com",
    fullName: "Iqra Hassan",
    password: "123456",
  },

  // Male Users
  {
    email: "ahmed.khan@example.com",
    fullName: "Ahmed Khan",
    password: "123456",
  },
  {
    email: "hassan.raza@example.com",
    fullName: "Hassan Raza",
    password: "123456",
  },
  {
    email: "usman.saeed@example.com",
    fullName: "Usman Saeed",
    password: "123456",
  },
  {
    email: "ali.zafar@example.com",
    fullName: "Ali Zafar",
    password: "123456",
  },
  {
    email: "farhan.hussain@example.com",
    fullName: "Farhan Hussain",
    password: "123456",
  },
];

const seedDatabase = async () => {
  try {
    await connectDB();
    await User.insertMany(seedUsers);
    console.log("Database seeded successfully");
  } catch (error) {
    console.error("Error seeding database:", error);
  }
};

// Call the function
seedDatabase();
