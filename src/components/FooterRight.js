import React from 'react';
import styled from 'styled-components';
import Icons from "../shared/img/incons.png";

const FooterRight = (props) => {

    return (
      <React.Fragment>
        <FootR>
          <Company>
            <SiteInfo>컬리소개</SiteInfo>
            <SiteInfo>컬리소개영상</SiteInfo>
            <SiteInfo>인재채용</SiteInfo>
            <SiteInfo>이용약관</SiteInfo>
            <SiteInfo>개인정보처리방침</SiteInfo>
            <SiteInfo>이용안내</SiteInfo>
          </Company>
          <CompanyInfo>
            법인명 (상호) : 주식회사 컬리 | 사업자등록번호 : 261-81-23567{" "}
            <InfoColor>사업자정보확인</InfoColor>
            <br />
            통신판매업 : 제 2018-서울강남-01646호 | 개인정보보호책임자 : 이원준
            <br />
            주소 : 서울특별시 강남구 테헤란로 133,18층(역삼동) | 대표이사 : 김슬아
            <br />
            입점문의 : <InfoColor>입점문의하기</InfoColor> | 제휴문의 :{" "}
            <InfoColor>business@kurlycorp.com</InfoColor>
            <br />
            채용문의 : <InfoColor>recruit@kurlycorp.com</InfoColor>
            <br />
            팩스:070-7500-6098 | 이메일 : <InfoColor>help@kurlycorp.com</InfoColor>
            <br/>
            대량주문 문의 : <InfoColor>kurlygift@kurlycorp.com</InfoColor>
            <Corp>© KURLY CORP. ALL RIGHTS RESERVED</Corp>
            <IconsImg src={Icons}/>
          </CompanyInfo>
        </FootR>
      </React.Fragment>
    );
}

const FootR = styled.div`
padding : 29px 0 2px;
font-weight : 700;
color : #333;
line-height : 24px;
width:  50%;
`
const Company = styled.div`
    padding-bottom : 29px;
    display : flex;
    margin : 23.4px 0px 0px 0px;
`
const SiteInfo = styled.a`
    padding-right : 16px;
    font-size : 14px;
    color : #333;
    line-height : 18px;
    &:hover {
      cursor : pointer;
    }
`
const CompanyInfo = styled.div`
padding : 10px 0;
text-align : left;
font-size : 13px;
color : #999999;
`
const InfoColor = styled.span`
    color : #5f0080;

    &:hover {
        cursor : pointer;
    }
`
const Corp = styled.div`
    font-size : 12px;
    padding-top : 35px;
`

const IconsImg = styled.img`
`

export default FooterRight;