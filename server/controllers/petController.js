import Pets from "../models/petsSchema.js";
export const createPet = async (req, res) => {
  console.log(req.file.filename);
  console.log(req.body.name);
  const image = req.file.filename;
  const name = req.body.name;
  const description = req.body.description;
  const category = req.body.category;
  const price = req.body.price;
  const color = req.body.color;
  const size = req.body.size;
  const coat = req.body.coat;
  const lifespan = req.body.lifespan;
  const weight = req.body.weight;
  const purpose = req.body.purpose;
  const temperment = req.body.temperment;
  try {
    const newPet = {
      name,
      image,
      color,
      price: JSON.parse(price),
      description,
      weight,
      lifespan,
      size,
      temperment,
      category,
      coat,
      purpose,
    };
    console.log(newPet);
    const newPetData = new Pets(newPet);
    newPetData.save();
    res
      .status(200)
      .json({ success: true, message: "Data added successfully", newPetData });
  } catch (error) {
    res.status(404).json({ success: false, message: "Unidentified error" });
  }
};
//GET ALL PETS

export const getAllpets = async (req, res) => {
  try {
    const allpets = await Pets.find();
    res.status(200).json(allpets);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Server error" });
  }
};

//DELETE PET BY ID
export const deletePet = async (req, res) => {
  try {
    const result = await Pets.findByIdAndDelete(req.params.id);
    if (!result) {
      return res.status(404).json({ error: "Item not found" });
    }
    res.json({ message: "Item deleted successfully" });
  } catch (err) {
    res.status(500).json({ error: "Internal server error" });
  }
};

//UPDATE PET
export const updatePet = async (req, res) => {
  const name = req.body.name;
  const description = req.body.description;
  const price = req.body.price;
  const color = req.body.color;
  const size = req.body.size;
  const coat = req.body.coat;
  const lifespan = req.body.lifespan;
  const weight = req.body.weight;
  const purpose = req.body.purpose;
  const category = req.body.category;
  const temperment = req.body.temperment;
  const post = {
    name,
    description,
    price,
    color,
    coat,
    size,
    weight,
    purpose,
    lifespan,
    category,
    temperment,
  };
  const id = req.params.id;
  if (req.file) {
    post.image = req.file.filename;
  }
  try {
    const updatedPost = await Pets.findByIdAndUpdate(id, post, { new: true });
    if (!updatedPost) {
      res.status(404).json({ success: false, message: "PRODUCT NOT FOUND" });
    } else {
      res
        .status(200)
        .json({ success: true, message: "SUCCESSFULLY UPDATED", updatedPost });
    }
  } catch (error) {
    res
      .status(404)
      .json({ success: false, message: "FAILED TO UPDATE PRODUCT" });
  }
};

//GET SINGLE PET

export const getSinglePet = async (req, res) => {
  const id = req.params.id;
  try {
    const Pet = await Pets.findById(id);
    if (!Pet) {
      return res
        .status(404)
        .json({ success: true, item: Pet, message: "Pet not found" });
    }
    return res.status(200).json(Pet);
  } catch (err) {
    console.error(err);
    return res.status(500).json({ success: false, message: "Server error" });
  }
};

//ADD REVIEW AND RATING

// Update a specific post by ID
export const addReviewAndRatings = async (req, res) => {
  try {
    const { rating, review, userName } = req.body;
    const pet = await Pets.findByIdAndUpdate(
      req.params.id,
      { $push: { review: { rating, review, name: userName } } },
      { new: true }
    );
    res.status(200).json(pet);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

//SEARCH PET BY Category and Price
export const search = async (req, res, next) => {
  const { isCategory, isPrice } = req.body;
  console.log(isCategory, isPrice);
  var matchCriteria = {};
  if (isCategory) {
    matchCriteria.category = isCategory;
  }
  if (isPrice) {
    matchCriteria.price = JSON.parse(isPrice);
  }

  const result = await Pets.aggregate([
    {
      $match: matchCriteria,
    },
  ]);
  res.status(200).json(result);
};
