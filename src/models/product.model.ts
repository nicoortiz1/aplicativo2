// models/product.model.ts
import mongoose, { Schema, Document } from 'mongoose';

export interface IProduct extends Document {
  nombre: string;
  descripcion: string;
  precio: number;
  imageUrl: string;
}

const productSchema: Schema = new Schema({
  nombre: { type: String, required: true },
  descripcion: { type: String },
  precio: { type: Number, required: true, min: 0 },
  imageUrl: { type: String },
});

export default mongoose.model<IProduct>('Product', productSchema);
