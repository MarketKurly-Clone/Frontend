import axios from "axios";
const instance = axios.create({
  // 백엔드 배포 주소
  baseURL: "http://15.165.159.211",
  // 제이슨 서버(npx json-server ./data.json --port 4000)
  // baseURL: "http://localhost:4000",
  // headers: {
  //   "content-type": "application/json;charset=UTF-8",
  //   accept: "application/json",
  //   // authorization: `${localStorage.getItem("token")}`,
  //   // "Access-Control-Allow-Origin": "*",
  // },
});
export const headers = {
  "content-type": "application/json;charset=UTF-8",
  accept: "application/json",
  authorization: `${localStorage.getItem("token")}`,
  // "Access-Control-Allow-Origin": "http://localhost:3000/",
};
export const apis = {
  // 메인 상품리스트 불러오기
  getProduct: () =>
    instance.get("/products?category1=&category2=&query=", {
      headers: {
        "content-type": "application/json;charset=UTF-8",
        accept: "application/json",
      },
    }),
  // 메인 배너 불러오기
  getBanner: () =>
    instance.get("/banners", {
      headers: {
        "content-type": "application/json;charset=UTF-8",
        accept: "application/json",
      },
    }),
  // 상세페이지 상품 조회
  getProductDetail: (id) =>
    instance.get(`products/${id}`, {
      headers: {
        "content-type": "application/json;charset=UTF-8",
        accept: "application/json",
      },
    }),
  // 상세페이지 후기 추가
<<<<<<< HEAD
  addReviews: data =>
=======
  addReviews: (data) =>
>>>>>>> 24a8027ef11b3ab2a6482c53652d230b314d1284
    instance.post(`/reviews`, data, {
      headers: { authorization: `${localStorage.getItem("token")}` },
    }),
  // 상세페이지 후기 조회
<<<<<<< HEAD
  getReviews: id =>
=======
  getReviews: (id) =>
>>>>>>> 24a8027ef11b3ab2a6482c53652d230b314d1284
    instance.get(`/reviews?productId=${id}&page=1&display=10`, {
      headers: {
        "content-type": "application/json;charset=UTF-8",
        accept: "application/json",
      },
    }),
  // 상세페이지 후기 삭제
<<<<<<< HEAD
  deleteReviews: id =>
=======
  deleteReviews: (id) =>
>>>>>>> 24a8027ef11b3ab2a6482c53652d230b314d1284
    instance.delete(`/reviews/${id}`, {
      headers: { authorization: `${localStorage.getItem("token")}` },
    }),
  // 장바구니 상품리스트 조회
  getCartProduct: () =>
    instance.get("/cart", {
      headers: { authorization: `${localStorage.getItem("token")}` },
    }),
  // 장바구니 상품 추가
<<<<<<< HEAD
  AddProductToCart: cart =>
=======
  AddProductToCart: (cart) =>
>>>>>>> 24a8027ef11b3ab2a6482c53652d230b314d1284
    instance.post("/cart", cart, {
      headers: { authorization: `${localStorage.getItem("token")}` },
    }),
  // 장바구니 상품 삭제
<<<<<<< HEAD
  RemoveCartProduct: productId =>
=======
  RemoveCartProduct: (productId) =>
>>>>>>> 24a8027ef11b3ab2a6482c53652d230b314d1284
    instance.delete(`/cart/${productId}`, {
      headers: { authorization: `${localStorage.getItem("token")}` },
    }),
  // 회원가입
  signUp: (user) =>
    instance.post(`/user/register`, user, {
      headers: {
        "content-type": "application/json;charset=UTF-8",
        accept: "application/json",
      },
    }),
  // 이메일 유효확인
<<<<<<< HEAD
  emailValidation: email => instance.get(`/user/register?email=${email}`),
=======
  emailValidation: (email) => instance.get(`/user/register?email=${email}`),
>>>>>>> 24a8027ef11b3ab2a6482c53652d230b314d1284
  //로그인
  logIn: (user) =>
    instance.post(`/user/login`, user, {
      headers: {
        "content-type": "application/json;charset=UTF-8",
        accept: "application/json",
      },
    }),
  //회원정보 요청
  getUser: () =>
    instance.get(`/user/info`, {
      headers: { authorization: `${localStorage.getItem("token")}` },
    }),
};
