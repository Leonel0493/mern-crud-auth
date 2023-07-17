import { Document, Schema, model } from 'mongoose'

export interface IUser extends Document {
  username: string
  email: string
  password: string
}

const UserSchema = new Schema<IUser>(
  {
    username: { type: String, required: true, trim: true },
    email: { type: String, required: true, trim: true, unique: true },
    password: { type: String, required: true },
  },
  {
    timestamps: true,
  }
)

const _UserModel = model<IUser>('User', UserSchema)

export default _UserModel
