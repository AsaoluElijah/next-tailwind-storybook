import Card from "./index";

export default {
  title: "My Cards",
};

const Template = (arguments_) => <Card {...arguments_} />;

// Green Card
export const GreenCard = Template.bind({});

GreenCard.args = {
  title: "Hello World",
  showSub: false,
  background: "green-300",
  imgUrl:
    "https://images.unsplash.com/photo-1474843148229-3163319fcc4c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1738&q=80",
  children:
    "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla, soluta?",
};

// Blue Card
export const BlueCard = Template.bind({});

BlueCard.args = {
  title: "Hola Mundo",
  showSub: true,
  background: "blue-300",
  imgUrl:
    "https://images.unsplash.com/photo-1474843148229-3163319fcc4c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1738&q=80",
  children:
    "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla, soluta?",
};
