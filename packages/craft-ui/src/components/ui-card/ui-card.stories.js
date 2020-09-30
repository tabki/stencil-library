// import React from "react";
// import { storiesOf } from "@storybook/react";
// import PageWrapper from "../../components/PageWrapper";
// import PageTitle from "../../components/PageTitle";
// import SectionTitle from "../../components/SectionTitle";
// import HtmlView from "../../components/HtmlView";
// import { Flex, Box } from "grid-styled";
// import storyTemplate from "../../components/storyTemplate";
// import { Row, Col } from "antd";
//
// const cardsArray = [
//   <ui-card elevation={0}>
//     <ui-card-content>Simple card</ui-card-content>
//   </ui-card>,
//   <ui-card elevation={1}>
//     <ui-card-content>Simple card</ui-card-content>
//   </ui-card>,
//   <ui-card elevation={2} interactive>
//     <ui-card-content>Simple card</ui-card-content>
//   </ui-card>,
//   <ui-card elevation={3}>
//     <ui-card-content>Simple card</ui-card-content>
//   </ui-card>
// ];
//
// const CardsSnippet = () => cardsArray;
//
// const CardSnippetContainer = () => (
//   <div>
//     <Row type="flex" gutter={14}>
//       <Col span={8}>{cardsArray[0]}</Col>
//       <Col span={8}>{cardsArray[1]}</Col>
//       <Col span={8}>{cardsArray[2]}</Col>
//     </Row>
//     <hr />
//     <Row type="flex" gutter={14}>
//       <Col span={8}>{cardsArray[3]}</Col>
//     </Row>
//   </div>
// );
//
// storiesOf("Core/Cards", module)
//   .addDecorator(story => storyTemplate(story))
//   .add("Simple", () => (
//     <PageWrapper>
//       <PageTitle title="Cards" />
//       <CardSnippetContainer />
//       <HtmlView componentToDisplay={CardsSnippet} />
//     </PageWrapper>
//   ));
