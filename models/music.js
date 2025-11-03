module.exports = (sequelize, DataTypes) => {
    const music = sequelize.define('Music', {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    nama: {
      type: DataTypes.STRING,
    },
    author: {
      type: DataTypes.STRING
    },
    tahun_terbit: {   
        type: DataTypes.STRING,
        Date: DataTypes.DATE
    },
    genre: {   
        type: DataTypes.STRING,
    }
});
    return music;
}
