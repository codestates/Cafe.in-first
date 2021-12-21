const { dummypost, likes_hash_tag } = require("../../models");

/*get요청 - 단순하게 카페 목록을 전체 불러오는 것 */
module.exports = async (req, res) => {
  const allPost = await dummypost.findAll({
    include: [
      {
        model: likes_hash_tag,
        attributes: { exclude: "id" },
      },
    ],
  });

  res.status(200).send({ data: allPost });
};
