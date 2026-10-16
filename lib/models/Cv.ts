import { Schema, model, models } from "mongoose";

const CvSchema = new Schema({
  _id: { type: String, default: "primary" },
  data: { type: Buffer, required: true, select: false },
  size: { type: Number, required: true },
}, { timestamps: true });

export default models.Cv || model("Cv", CvSchema);
