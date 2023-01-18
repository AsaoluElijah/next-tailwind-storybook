import Card from "../components/Card";

export default function Home() {
  return (
    <div>
      <h1 className="text-3xl font-bold underline">Hello world!</h1>
      <Card
        title="Hello World"
        showSub={false}
        background="green-400"
        imgUrl="https://images.unsplash.com/photo-1474843148229-3163319fcc4c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1738&q=80"
      >
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla, soluta?
      </Card>
    </div>
  );
}
