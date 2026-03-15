// seed.ts

import "dotenv/config";
import { drizzle } from "drizzle-orm/neon-http";
import { neon } from "@neondatabase/serverless";

import * as schema from "../db/schema";

const sql = neon(process.env.DATABASE_URL!);
const db = drizzle(sql, { schema });

const main = async () => {
  try {
    console.log("Seeding database");

    // Clear tables
    await db.delete(schema.challengeProgress);
    await db.delete(schema.challengeOptions);
    await db.delete(schema.challenges);
    await db.delete(schema.lessons);
    await db.delete(schema.units);
    await db.delete(schema.userProgress);
    await db.delete(schema.courses);

    // Insert courses
    await db.insert(schema.courses).values([
      { id: 1, title: "English", imageSrc: "/en.svg" },
      { id: 2, title: "French", imageSrc: "/fr.svg" },
      { id: 3, title: "Spanish", imageSrc: "/es.svg" },
      { id: 4, title: "Italian", imageSrc: "/it.svg" },
      { id: 5, title: "German", imageSrc: "/de.svg" },
      { id: 6, title: "Portuguese", imageSrc: "/pt.svg" },
    ]);

    // Insert unit
    await db.insert(schema.units).values([
      {
        id: 1,
        courseId: 1,
        title: "Unit 0",
        description: "Learn Punjabi Letters",
        order: 1,
      },
    ]);

    // Insert lessons
    await db.insert(schema.lessons).values([
      { id: 1, unitId: 1, order: 1, title: "Vowels" },
      { id: 2, unitId: 1, order: 2, title: "Fricatives" },
      { id: 3, unitId: 1, order: 3, title: "Velars" },
      { id: 4, unitId: 1, order: 4, title: "Palatals" },
      { id: 5, unitId: 1, order: 5, title: "Retroflexes" },
      { id: 6, unitId: 1, order: 6, title: "Dentals" },
      { id: 7, unitId: 1, order: 7, title: "Labials" },
      { id: 8, unitId: 1, order: 8, title: "Sonorants" },
      { id: 9, unitId: 1, order: 9, title: "Dot Expansion" },
      { id: 10, unitId: 1, order: 10, title: "Diacritics And More" },
    ]);

    // Insert challenges (LESSON 1)
    await db.insert(schema.challenges).values([
      {
        id: 1,
        lessonId: 1,
        type: "SELECT",
        order: 1,
        question: 'Which one of these is "the man"?',
      },
      {
        id: 2,
        lessonId: 1,
        type: "ASSIST",
        order: 2,
        question: '"the man"',
      },
      {
        id: 3,
        lessonId: 1,
        type: "SELECT",
        order: 3,
        question: 'Which one of these is "the robot"?',
      },
      {
        id: 100,
        lessonId: 1,
        type: "MATCH",
        order: 10,
        question: "Match the Punjabi letter to its English sound",
      },
    ]);

    // Challenge Options (SELECT/ASSIST)
    await db.insert(schema.challengeOptions).values([
      // Challenge 1
      {
        challengeId: 1,
        text: "Aadmi",
        correct: true,
        imageSrc: "/man.svg",
        audioSrc: "/es_man.mp3",
      },
      {
        challengeId: 1,
        text: "Aurat",
        correct: false,
        imageSrc: "/woman.svg",
        audioSrc: "/es_woman.mp3",
      },
      {
        challengeId: 1,
        text: "Robot",
        correct: false,
        imageSrc: "/robot.svg",
        audioSrc: "/es_robot.mp3",
      },

      // Challenge 2
      {
        challengeId: 2,
        text: "Aadmi",
        correct: true,
        audioSrc: "/es_man.mp3",
      },
      {
        challengeId: 2,
        text: "Aurat",
        correct: false,
        audioSrc: "/es_woman.mp3",
      },
      {
        challengeId: 2,
        text: "Robot",
        correct: false,
        audioSrc: "/es_robot.mp3",
      },

      // Challenge 3
      {
        challengeId: 3,
        text: "Aadmi",
        correct: false,
        imageSrc: "/man.svg",
        audioSrc: "/es_man.mp3",
      },
      {
        challengeId: 3,
        text: "Aurat",
        correct: false,
        imageSrc: "/woman.svg",
        audioSrc: "/es_woman.mp3",
      },
      {
        challengeId: 3,
        text: "Robot",
        correct: true,
        imageSrc: "/robot.svg",
        audioSrc: "/es_robot.mp3",
      },
    ]);

    // Challenge Options (MATCH - ID & PAIRS must be present)
    await db.insert(schema.challenges).values([
      {
        id: 20,
        lessonId: 2,
        type: "MATCH",
        order: 3,
        question: "Match letters with their sounds",
      },
    ]);
    // Challenges for Lesson 2
    await db.insert(schema.challenges).values([
      {
        id: 4,
        lessonId: 2,
        type: "SELECT",
        order: 1,
        question: 'Which one of these is "the man"?',
      },
      {
        id: 5,
        lessonId: 2,
        type: "ASSIST",
        order: 2,
        question: '"the man"',
      },
      {
        id: 6,
        lessonId: 2,
        type: "SELECT",
        order: 3,
        question: 'Which one of these is "the robot"?',
      },
    ]);

    console.log("Seeding finished");
  } catch (error) {
    console.error(error);
    throw new Error("Failed to seed the database");
  }
};

main();