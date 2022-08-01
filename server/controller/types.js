const {Type} = require('../models');

const createType = async (req, res) => {
    try {
        const type = await new Type(req.body)
        await type.save()
        return res.status(201).json({
            type,
        });
    } catch (error) {
        return res.status(500).json({ error: error.message })
    }
}

const getAllType = async (req, res) => {
    try {
        const types = await Type.find()
        return res.status(200).json({ types })
    } catch (error) {
        return res.status(500).send(error.message);
    }
}

const getTypeById = async (req, res) => {
    try {
        const { id } = req.params;
        const type = await Type.findById(id)
        if (type) {
            return res.status(200).json({ type });
        }
        return res.status(404).send('Does Not Exist');
    } catch (error) {
        return res.status(500).send(error.message);
    }
}

const updateType = async (req, res) => {
    try {
        const { id } = req.params;
        await Type.findByIdAndUpdate(id, req.body, { new: true }, (err, type) => {
            if (err) {
                res.status(500).send(err);
            }
            if (!type) {
                res.status(500).send('Type not found!');
            }
            return res.status(200).json(type);
        })
    } catch (error) {
        return res.status(500).send(error.message);
    }
}

const deleteType = async (req, res) => {
    try {
        const { id } = req.params;
        const deleted = await Type.findByIdAndDelete(id)
        if (deleted) {
            return res.status(200).send("Type deleted");
        }
        throw new Error("Type not found");
    } catch (error) {
        return res.status(500).send(error.message);
    }
}
module.exports = {
    createType,
    getAllType,
    getTypeById,
    updateType,
    deleteType

}