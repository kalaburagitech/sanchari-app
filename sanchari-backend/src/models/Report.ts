import mongoose, { Schema, Document } from 'mongoose';

export interface IReport extends Document {
  title: string;
  description: string;
  userId: string;
}

const ReportSchema: Schema = new Schema(
  {
    title: { type: String, required: true },
    description: { type: String, required: true },
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  },
  { timestamps: true }
);

export default mongoose.model<IReport>('Report', ReportSchema);
