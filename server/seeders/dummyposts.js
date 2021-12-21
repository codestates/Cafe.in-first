"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert("dummyposts", [
      {
        id: "1",
        title_img: "http://placeimg.com/300/300/arch",
        content_img: "http://placeimg.com/300/300/arch",
        content: "공대생이 많은 슈퍼카페",
        title: "공대카페",
        location: "대구",
        lat: 38.155,
        long: 123.5488,
      },
      {
        id: "2",
        title_img: "http://placeimg.com/300/300/sepia",
        content_img: "http://placeimg.com/300/300/sepia",
        content: "휘핑크림 맛집",
        title: "cafe 달콤",
        location: "오사카",
        lat: 38.155,
        long: 123.5488,
      },
      {
        id: "3",
        title_img: "http://placeimg.com/640/480/people/sepia",
        content_img: "http://placeimg.com/640/480/people/sepia",
        content: "콘센트 多, 1인석 多, 시간제한 無",
        title: "작업하기 좋은 날",
        location: "대전에 있으면 좋겠당",
        lat: 38.155,
        long: 123.5488,
      },
      {
        id: "4",
        title_img: "http://placeimg.com/640/480/arch/sepia",
        content_img: "http://placeimg.com/640/480/arch/sepia",
        content: "무난무난 평범한 카페",
        title: "커피집",
        location: "부산",
        lat: 38.155,
        long: 123.5488,
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("dummyposts", null, {});
  },
};
