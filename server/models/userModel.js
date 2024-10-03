import mongoose from 'mongoose';

const UserSchema = new mongoose.Schema(
  {
    firstname: {
      type: String,
      required: true,
    },
    lastname: {
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
    dateOfBirth: {
      type: String,
      required: true,
    },
    stateOfResidence: {
      type: String,
      required: true,
    },
    courseToLearn: {
      type: String,
      required: true,
    },
    highestQualification: {
      type: String,
      required: true,
    },
    intentions: {
      type: String,
      required: true,
    },
    paymentTerms: {
      type: Boolean,
      required: true,
      default: false,
    },
    programAdvert: {
      type: [],
      required: true,
    },
    termsAndConditions: {
      type: Boolean,
      required: true,
      default: false,
    },
  },
  { timestamps: true },
);

const User = mongoose.model('Users', UserSchema);

export default User;
