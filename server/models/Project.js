const mongoose = require('mongoose');

const projectSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  technologies: [String],
  github: { type: String, default: '' },
  demo: { type: String, default: null },
  image: { type: String, default: null }
}, { timestamps: true });


projectSchema.set('toJSON', {
  transform: (doc, ret) => {
    Object.keys(ret).forEach(key => {
      if (ret[key] === null || ret[key] === '' || (Array.isArray(ret[key]) && ret[key].length === 0)) {
        delete ret[key];
      }
    });
    return ret;
  }
});

module.exports = mongoose.model('Project', projectSchema);
