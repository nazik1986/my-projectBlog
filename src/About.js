import React from "react";
import veronika from "../src/images/veronika2.jpeg";
import logo from "../src/images/logo.png";
import { Container, Card, Row, Col } from "react-bootstrap";
import fon from "../src/images/big.jpg";

export const About = () => (
  <div
    style={{
      display: "flex",
      paddingTop: "10px",
      paddingBottom: "10px",
      backgroundImage: `url(${fon})`,
      backgroundPosition: "center",
      backgroundSize: "cover",
      backgroundRepeat: "no-repeat",
    }}
  >
    <Container>
      <Row>
        <Col md={6}>
          <Card
            style={{
              width: "100%",
              height: "100%",
              backgroundImage: `url("${veronika}")`,
              backgroundRepeat: "no-repeat",
              backgroundSize: "100%",
            }}
          ></Card>
        </Col>
        <Col md={6}>
          <div
            style={{
              backgroundImage: `url(${logo})`,
              backgroundPosition: "center",
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
            }}
          >
            <div
              style={{
                width: "100%",
                height: "100%",
                padding: "20px",
                color: "white",
                backgroundColor: "black",
                opacity: "0.6",
                backgroundPosition: "center",
              }}
            >
              <h2 style={{ alignSelf: "center" }}>Про нас</h2>
              <p>А ви знали, що Вероніка – покровителька фотографів?</p>
              <p>
                Під час навчання в Римі була створена студія «V». Можливо, слово
                «студія» звучить надто голосно для нашої невеличкої авантюри, та
                все ж. Ми не прив’язані до місця, в основну на сторінці і сайті
                виставлялись фото з фотосесії, поза тим знімаємо короткі відео.
                Маємо плани, але вони вичікують, як добре вино 😉
              </p>
              <p>
                Але нині не про це, а про назву. Знаєте, Вероніка, як на мене, є
                ЖІНКОЮ, яка ризикнула перейти межу страху і глянути глибше. Оцей
                її погляд в Ісуса є своєрідною першою фотографією, це зустріч
                сердець! Бо Він, Ісус, вже зі своєї сторони зробив все -
                Воплотився і стався Людиною, а крок заглиблення в Христологію зі
                своєї сторони робить саме Вероніка. Хустка, на якій береглось
                обличчя Ісуса, є зовнішньою ознакою внутрішнього пережиття тієї
                жінки.
              </p>
              <p>
                Через фото і відео можна передати суть. Можна копнути вглиб і
                зануритись в людину. А там можна побачити її страхи, надії,
                очікування, характер, бажання. Можна побачити її комплекси і її
                сильні сторони. Можна торкнутись її «Я» і зберегти у пам’яті.
              </p>
              <p>
                Нині фотографія та відео є дещо знецінені, але я вірю в цінність
                змісту, який можна через цей інструмент передати. Беручи зустріч
                Вероніки та Ісуса як центральну подію зустрічі СЕРДЕЦЬ, хочемо у
                наступних проектах керуватись зануренням в СУТЬ.
              </p>
              <p>
                P.S. У нашому логотипі є хустина у формі букви «V» та обличчя як
                символ, що погляд у Людину є СУТТЮ!
              </p>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  </div>
);
