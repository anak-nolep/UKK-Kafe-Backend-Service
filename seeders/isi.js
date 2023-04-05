'use strict';
const fs = require("fs");

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('menu', [
      {
        nama_menu: "Kentang",
        jenis: 'makanan',
        deskripsi: 'Kentang',
        gambar: 'tempelate_kentang.jpg',
        harga: 10000
      },
      {
        nama_menu: "Kopi",
        jenis: 'minuman',
        deskripsi: 'Kopi',
        gambar: 'tempelate_kopi.jpg',
        harga: 15000
      },
      /*
      {
        nama_menu: "Kentang",
        jenis: 'makanan',
        deskripsi: 'Kentang',
        gambar: 'tempelate_kentang',
        harga: 10000
      }, */
    ], {});
    fs.copyFileSync('public/tempelate/tempelate_kopi.jpg', 'public/image/tempelate_kopi.jpg');
    fs.copyFileSync('public/tempelate/tempelate_kentang.jpg', 'public/image/tempelate_kentang.jpg');
  },

  //reset
  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('menu', null, {});
    fs.mkdirSync("public/image");
  }
};