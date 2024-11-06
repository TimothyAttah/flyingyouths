import mongoose from 'mongoose';

const ContactSchema = new mongoose.Schema(
  {
    fullname: {
      type: String,
      required: true,
    },

    email: {
      type: String,
      required: true,
      unique: true,
    },
    phoneNumber: {
      type: String,
      required: true,
    },

    message: {
      type: String,
      required: true,
    },
  },
  { timestamps: true },
);

const Contact = mongoose.model('Contacts', ContactSchema);

export default Contact;
