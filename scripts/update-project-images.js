const mongoose = require("mongoose");

const MONGODB_URI = process.env.MONGODB_URI;

if (!MONGODB_URI) {
  throw new Error("MONGODB_URI is missing");
}

const ProjectSchema = new mongoose.Schema(
  {
    title: String,
    slug: String,
    images: [String],
  },
  { strict: false }
);

const Project =
  mongoose.models.Project ||
  mongoose.model("Project", ProjectSchema);

const imageUpdates = {
  "socialsphere": [
    "/projects/socialsphere/home-feed.png",
    "/projects/socialsphere/profile.png",
  ],

  "ecommerce-store": [
    "/projects/ecommerce-store/admin-dashboard.png",
    "/projects/ecommerce-store/cart.png",
  ],

  "birthday-surprise": [
    "/projects/birthday-surprise/cake.png",
    "/projects/birthday-surprise/message.png",
  ],

  "neuralops-cinematic-landing-page": [
    "/projects/neuralops/dashboard.png",
    "/projects/neuralops/home.png",
  ],

  "weather-dashboard": [
    "/projects/weather-dashboard/home-light.png",
    "/projects/weather-dashboard/search-history.png",
  ],
};

async function updateImages() {
  try {
    console.log("Connecting to MongoDB...");

    await mongoose.connect(MONGODB_URI);

    console.log("✅ MongoDB connected");

    for (const [slug, images] of Object.entries(imageUpdates)) {
      const project = await Project.findOneAndUpdate(
        { slug },
        { $set: { images } },
        { new: true }
      );

      if (project) {
        console.log(`✅ Updated: ${project.title}`);
      } else {
        console.log(`⚠️ Project not found: ${slug}`);
      }
    }

    console.log("\n🎉 Image paths updated successfully!");

    const projects = await Project.find(
      {},
      { title: 1, slug: 1, images: 1 }
    ).lean();

    console.table(projects);
  } catch (error) {
    console.error("❌ Error:", error.message);
  } finally {
    await mongoose.disconnect();
    console.log("🔌 MongoDB disconnected");
  }
}

updateImages();