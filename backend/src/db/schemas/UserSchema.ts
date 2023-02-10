import mongoose from 'mongoose';

const UserSchema = new mongoose.Schema({
  email: {
    required: true,
    type: String,
  },
  first_name: {
    required: true,
    type: String,
  },
  last_name: {
    required: true,
    type: String,
  },
  about: {
    required: false,
    type: String,
  },
  work: {
    required: false,
    type: String,
  },
  avatar: {
    required: false,
    type: String,
  },
  primary_color: {
    default: '#000',
    type: String,
  },
  secondary_color: {
    default: '#fff',
    type: String,
  },
  timestamps: {
    createdAt: 'created_at',
    updatedAt: 'updated_at',
  },
});

export const User = mongoose.model('User', UserSchema);
