import mongoose, { Schema, models } from "mongoose";

const ProjectSchema = new Schema(
  {
    userId: {
      type: String,
      required: true,
    },

    projectDetails: {
      type: String,
      required: true,
    },

    phone: {
      type: String,
      required: true,
    },

    country: {
      type: String,
      required: true,
    },

    state: {
      type: String,
      required: true,
    },

    city: {
      type: String,
      required: true,
    },

    // 🔥 NEW: project progress
    status: {
      type: String,
      enum: ["pending", "approved", "working", "completed"],
      default: "pending",
    },

    // 💳 NEW: payment fields
    paymentAmount: {
      type: Number,
      default: 0,
    },

    paymentCurrency: {
      type: String,
      enum: ["INR", "USD"],
      default: "USD",
    },

    paymentStatus: {
      type: String,
      enum: ["unpaid", "paid", "failed"],
      default: "unpaid",
    },

    razorpayOrderId: String,
    razorpayPaymentId: String,
  },
  { timestamps: true }
);

const Project = models.Project || mongoose.model("Project", ProjectSchema);

export default Project;