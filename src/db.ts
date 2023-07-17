import mongoose from 'mongoose'
import { CONNECTION_STIRNG } from './config'

export const connectDB = async () => {
  try {
    mongoose.connect(CONNECTION_STIRNG)
    console.log(`Mongo connection is done`)
  } catch (ex) {
    console.log(ex)
  }
}
