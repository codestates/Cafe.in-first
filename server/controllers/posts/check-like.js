// const { post, dislikes_hash_tag, likes_hash_tag } = require("../../models");

// /*get요청 - 단순하게 카페 목록을 전체 불러오는 것 */
// module.exports = async (req, res) => {
//   const accessToken = req.cookies.accessToken;
//   if (accessToken === null || !accessToken) {
//     return res.status(401).send({
//       data: null,
//       message: "인증되지 않은 사용자 입니다.",
//     });
//   }

//   const hash = await likes_hash_tag.findOne({
//       where: { id: req.params.id}
//   })

//   await hash.addLike()

//   res.status(200).send({data: , message: '좋아요가 눌렸습니다요'});
// };
