import React from "react";
import styled from "styled-components";

const Comment = props => {
  return (
    <CommentTr>
      <CommentTd>{props.id + 1}</CommentTd>
      <CommentTd className="title">{props.content}</CommentTd>
      <CommentTd>{props.username}</CommentTd>
      <CommentTd>{props.createdAt.split("T")[0]}</CommentTd>
      <CommentTd>{props.like}</CommentTd>
    </CommentTr>
  );
};

Comment.defaultProps = {
  index: "0",
  content: "테스트",
  username: "아무개",
  createdAt: "2000-01-01",
  like: "0",
};

const CommentTr = styled.tr`
  &:hover {
    background-color: #d3d3d3;
  }
`;

const CommentTd = styled.td`
  padding: 20px;
  border-bottom: 0.5px solid #dcdcdc;
  &.title {
    text-align: left;
    padding-left: 15px;
  }
`;

export default Comment;
