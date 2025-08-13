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
    profilePic: "https://randomuser.me/api/portraits/women/1.jpg",
  },
  {
    email: "fatima.ahmed@example.com",
    fullName: "Fatima Ahmed",
    password: "123456",
    profilePic: "https://randomuser.me/api/portraits/women/2.jpg",
  },
  {
    email: "zara.malik@example.com",
    fullName: "Zara Malik",
    password: "123456",
    profilePic: "https://randomuser.me/api/portraits/women/3.jpg",
  },
  {
    email: "hiba.shaikh@example.com",
    fullName: "Hiba Shaikh",
    password: "123456",
    profilePic: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    email: "noor.butt@example.com",
    fullName: "Noor Butt",
    password: "123456",
    profilePic: "https://randomuser.me/api/portraits/women/5.jpg",
  },
  {
    email: "maryam.ali@example.com",
    fullName: "Maryam Ali",
    password: "123456",
    profilePic: "https://randomuser.me/api/portraits/women/6.jpg",
  },
  {
    email: "hafsa.chaudhry@example.com",
    fullName: "Hafsa Chaudhry",
    password: "123456",
    profilePic: "https://randomuser.me/api/portraits/women/7.jpg",
  },
  {
    email: "iqra.hassan@example.com",
    fullName: "Iqra Hassan",
    password: "123456",
    profilePic: "https://randomuser.me/api/portraits/women/8.jpg",
  },

  // Male Users
  {
    email: "ahmed.khan@example.com",
    fullName: "Ahmed Khan",
    password: "123456",
    profilePic: "https://randomuser.me/api/portraits/men/1.jpg",
  },
  {
    email: "bilal.ahmed@example.com",
    fullName: "Bilal Ahmed",
    password: "123456",
    profilePic: "https://randomuser.me/api/portraits/men/2.jpg",
  },
  {
    email: "saad.malik@example.com",
    fullName: "Saad Malik",
    password: "123456",
    profilePic: "https://randomuser.me/api/portraits/men/3.jpg",
  },
  {
    email: "hassan.raza@example.com",
    fullName: "Hassan Raza",
    password: "123456",
    profilePic: "https://randomuser.me/api/portraits/men/4.jpg",
  },
  {
    email: "usman.saeed@example.com",
    fullName: "Usman Saeed",
    password: "123456",
    profilePic: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    email: "ali.zafar@example.com",
    fullName: "Ali Zafar",
    password: "123456",
    profilePic: "https://randomuser.me/api/portraits/men/6.jpg",
  },
  {
    email: "farhan.hussain@example.com",
    fullName: "Farhan Hussain",
    password: "123456",
    profilePic: "https://randomuser.me/api/portraits/men/7.jpg",
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
