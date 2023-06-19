const Parent = require("../models/Parent");
const Request = require("../models/Request");
const Sitter = require("../models/Sitter");

const allRequests = async (req, res) => {
  try {
    const requests = await Request.findAll();
    res.json(requests);
  } catch (error) {
    console.log("Error searching requests:", error);
    // throw error;
  }
};

const findRequestById = async (req, res) => {
  try {
    const { requestId } = req.params; // Lấy id từ request parameters

    const request = await Request.findByPk(requestId); // Tìm request theo id

    if (!request) {
      res.status(404).json({ error: "Request not found" });
    } else {
      const sitter = await Sitter.findByPk(request.sitter_id);
      const parent = await Parent.findByPk(request.parent_id);
      const response = {
        ...request.dataValues,
        sitter,
        parent,
      };
      res.json(response);
    }
  } catch (error) {
    console.log("Error searching requests:", error);
    // throw error;
  }
};

const createRequest = async (req, res) => {
  try {
    const { start_time, end_time, data, state, parent_id, sitter_id } =
      req.body;

    // Tạo request mới
    const newRequest = await Request.create({
      start_time,
      end_time,
      data,
      state,
      parent_id,
      sitter_id,
    });

    res.status(201).json(newRequest);
  } catch (error) {
    console.log("Error searching requests:", error);
    // throw error;
  }
};

const updateRequest = async (req, res) => {
  try {
    const { requestId } = req.params;
    const { start_time, end_time, data, state } = req.body;

    const existingRequest = await Request.findByPk(requestId);
    if (!existingRequest) {
      return res.status(404).json({ error: "Request not found" });
    }

    // Cập nhật thông tin của request
    existingRequest.start_time = !start_time
      ? existingRequest.start_time
      : start_time;

    existingRequest.end_time = !end_time ? existingRequest.end_time : end_time;

    existingRequest.data = !data ? existingRequest.data : data;

    existingRequest.state = !state ? existingRequest.state : state;

    await existingRequest.save();

    res.status(200).json(existingRequest);
  } catch (error) {
    console.log("Error updating request:", error);
    // throw error;
  }
};

const deleteRequest = async (req, res) => {
  try {
    const { requestId } = req.params;

    const existingRequest = await Request.findByPk(requestId);
    if (!existingRequest) {
      return res.status(404).json({ error: "Request not found" });
    }

    // Xóa request
    await existingRequest.destroy();

    res.status(200).json({ message: "Request deleted successfully" });
  } catch (error) {
    console.log("Error deleting request:", error);
    // throw error;
  }
};

module.exports = {
  findRequestById,
  allRequests,
  createRequest,
  updateRequest,
  deleteRequest,
};
