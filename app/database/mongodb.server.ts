import { Collection, Document, MongoClient } from "mongodb";
import { Nullable } from "~/type/common";

let _mongoDBClient: Nullable<MongoClient> = null;
const _mongoClient = (): MongoClient => {
  if (!_mongoDBClient) {
    const uri = process.env.MONGO_DB || 'mongodb://localhost:27017';
    _mongoDBClient = new MongoClient(uri);
  }
  return _mongoDBClient;
};

export const mongoDB = <T extends Document>(collection: string): Collection<T> => {
  return _mongoClient().db().collection(collection);
};