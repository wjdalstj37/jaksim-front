import client from "./client";

// 게시판 목록
export const postList = ({ pageNumber, pageSize }) =>
  client.get("https://jaks1m.shop/api/v1/boards", { pageNumber, pageSize });
// sort 정렬은 나중에 구현할 것

// 게시판 상세
export const postListDetail = ({ boardType }) =>
  client.get("https://jaks1m.shop/api/v1/boards/list", { boardType });

// 게시글 등록
export const postUpload = ({ boardAddRequestDto }) =>
  client.post(
    "https://jaks1m.shop/api/v1/boards/list",
    {
      boardAddRequestDto,
    },
    {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    }
  );

// 게시글 상세
export const contentDetail = ({ id }) =>
  client.get(`https://jaks1m.shop/api/v1/boards/list${id}`, { id });

// 게시글 수정
export const contentUpdate = ({ boardAddRequestDto, files, id }) =>
  client.put(`https://jaks1m.shop/api/v1/boards/list${id}`, {
    boardAddRequestDto,
    files,
    id,
  });

// 게시글 삭제
export const contentDelete = ({ id }) =>
  client.patch(`https://jaks1m.shop/api/v1/boards/list${id}`, { id });

/*
  boardAddRequestDto => 

  title
  bracket 
  content
  boardType 
*/
