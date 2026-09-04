import mongoose, { Schema, model, models } from "mongoose";

const ProjectSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
    },

    slug: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },

    description: {
      type: String,
      required: true,
    },

    longDescription: {
      type: String,
      default: "",
    },

    problem: {
      type: String,
      default: "",
    },

    solution: {
      type: String,
      default: "",
    },

    category: {
      type: String,
      default: "Frontend",
    },

    type: {
      type: String,
      default: "Project",
    },

    technologies: {
      type: [String],
      default: [],
    },

    features: {
      type: [String],
      default: [],
    },

    challenges: {
      type: [String],
      default: [],
    },

    learning: {
      type: String,
      default: "",
    },

    images: {
      type: [String],
      default: [],
    },

    screenshots: {
      type: [String],
      default: [],
    },

    github: {
      type: String,
      default: "",
    },

    liveDemo: {
      type: String,
      default: "",
    },

    demo: {
      type: String,
      default: "",
    },

    featured: {
      type: Boolean,
      default: false,
    },

    status: {
      type: String,
      default: "Completed",
    },
  },
  {
    timestamps: true,
  }
);

const Project = models.Project || model("Project", ProjectSchema);

export default Project;