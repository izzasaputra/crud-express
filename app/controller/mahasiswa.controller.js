const db = require("../models");
const mahasiswa = db.mahasiswa;

exports.create = (req, res) => {
  req.body.tanggal_lahir = new Date(req.body.tanggal_lahir);
  mahasiswa
    .create(req.body)
    .then(() => res.send({ status: "201", message: "Data Berhasil Disimpan" }))
    .catch((err) =>
      res.status(500).send({ status: "500", message: err.message })
    );
};

exports.findAll = (req, res) => {
  mahasiswa
    .find()
    .then((data) => res.send({ status: "200", data: data }))
    .catch((err) =>
      res.status(500).send({ status: "500", message: err.message })
    );
};

exports.show = (req, res) => {
  const id = req.params.id;
  mahasiswa
    .findById(id)
    .then((data) => {
      if (!data) {
        return res
          .status(404)
          .send({ status: "404", message: "Data tidak ditemukan" });
      }
      res.send(data);
    })
    .catch((err) =>
      res.status(500).send({ status: "500", message: err.message })
    );
};

exports.update = (req, res) => {
  const id = req.params.id;

  mahasiswa
    .findByIdAndUpdate(id, req.body, { userFindAndModify: false })
    .then((data) => {
      if (!data) {
        return res
          .status(404)
          .send({ status: "404", message: "Data tidak ditemukan" });
      }
      res.send({ status: "200", message: "Data berhasil diupdate" });
    })
    .catch((err) =>
      res.status(500).send({ status: "500", message: err.message })
    );
};
exports.delete = (req, res) => {
  const id = req.params.id;

  mahasiswa
    .findByIdAndDelete(id)
    .then((data) => {
      if (!data) {
        return res
          .status(404)
          .send({ status: "404", message: "Data tidak ditemukan" });
      }
      res.send({ status: "200", message: "Data berhasil dihapus" });
    })
    .catch((err) => {
      res.status(500).send({ status: "500", message: err.message });
    });
};
