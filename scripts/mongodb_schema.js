Mongo
[Function (anonymous)] { help: [Function (anonymous)] Help }
use DiversityLensBD
switched to db DiversityLensBD
db.categories.insertMany([
  { _id: ObjectId(), name: "Animalia" },
  { _id: ObjectId(), name: "Plantae" }
]);
{
  acknowledged: true,
  insertedIds: {
    '0': ObjectId('682fa96c6d12443f1fe4a469'),
    '1': ObjectId('682fa96c6d12443f1fe4a46a')
  }
}
db.species.insertMany([
  {
    _id: ObjectId(),
    scientificName: "Lycalopex culpaeus",
    commonName:     "Zorro Andino",
    family:         "Cánido",
    categoryId:     db.categories.findOne({ name: "Animalia" })._id
  },
  {
    _id: ObjectId(),
    scientificName: "Acer",
    commonName:     "Pino",
    family:         "Aceraceae",
    categoryId:     db.categories.findOne({ name: "Plantae" })._id
  }
]);
{
  acknowledged: true,
  insertedIds: {
    '0': ObjectId('682fa97b6d12443f1fe4a46b'),
    '1': ObjectId('682fa97b6d12443f1fe4a46c')
  }
}
db.locations.insertMany([
  {
    _id: ObjectId(),
    name: "Parque Grau",
    coordinates: { type: "Point", coordinates: [ -75.196454, -12.050451 ] }
  },
  {
    _id: ObjectId(),
    name: "Palcamayo",
    coordinates: { type: "Point", coordinates: [ -75.805103, -11.232055 ] }
  }
]);
{
  acknowledged: true,
  insertedIds: {
    '0': ObjectId('682fa9846d12443f1fe4a46d'),
    '1': ObjectId('682fa9846d12443f1fe4a46e')
  }
}
db.users.insertMany([
  {
    _id: ObjectId(),
    name:      "Ana Ruiz",
    email:     "ana.ruiz@example.com",
    password:  "hashed_pw_123",
    role:      "investigator",
    verified:  true,
    titleCert: null
  },
  {
    _id: ObjectId(),
    name:      "José Pérez",
    email:     "jose.perez@example.com",
    password:  "hashed_pw_456",
    role:      "park_ranger",
    verified:  true,
    titleCert: BinData(0,"")  // reemplaza "" por tu binario real si lo tienes
  },
  {
    _id: ObjectId(),
    name:      "María López",
    email:     "maria.lopez@example.com",
    password:  "hashed_pw_789",
    role:      "research_assistant",
    verified:  false,
    titleCert: null
  }
]);
{
  acknowledged: true,
  insertedIds: {
    '0': ObjectId('682fa98c6d12443f1fe4a46f'),
    '1': ObjectId('682fa98c6d12443f1fe4a470'),
    '2': ObjectId('682fa98c6d12443f1fe4a471')
  }
}
db.sightings.insertMany([
  {
    _id: ObjectId(),
    userId:     db.users.findOne({ email: "ana.ruiz@example.com" })._id,
    speciesId:  db.species.findOne({ commonName: "Zorro Andino" })._id,
    locationId: db.locations.findOne({ name: "Parque Grau" })._id,
    description: "Avistamiento cerca del río, ejemplar adulto",
    timestamp:   new Date("2025-05-20T10:15:00Z"),
    imageUrl:    "http://img1.jpg"
  },
  {
    _id: ObjectId(),
    userId:     db.users.findOne({ email: "jose.perez@example.com" })._id,
    speciesId:  db.species.findOne({ commonName: "Pino" })._id,
    locationId: db.locations.findOne({ name: "Palcamayo" })._id,
    description: "Varios pinos en florecimiento",
    timestamp:   new Date("2025-05-21T14:30:00Z"),
    imageUrl:    "http://img2.jpg"
  },
  {
    _id: ObjectId(),
    userId:     db.users.findOne({ email: "ana.ruiz@example.com" })._id,
    speciesId:  db.species.findOne({ commonName: "Pino" })._id,
    locationId: db.locations.findOne({ name: "Parque Grau" })._id,
    description: "Semillas caídas al suelo",
    timestamp:   new Date("2025-05-22T09:00:00Z"),
    imageUrl:    "http://img3.jpg"
  }
]);
{
  acknowledged: true,
  insertedIds: {
    '0': ObjectId('682fa9996d12443f1fe4a472'),
    '1': ObjectId('682fa9996d12443f1fe4a473'),
    '2': ObjectId('682fa9996d12443f1fe4a474')
  }
}
DiversityLensBD

