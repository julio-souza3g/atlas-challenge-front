import { Card } from "../components/Card";
import { Header } from "../components/Header";

export function FriendsList() {
  return (
    <>
      <Header />
      <div className="grid grid-cols-1 sm:grid-cols-2  md:grid-cols-3 lg:grid-cols-4 gap-4 my-10 mx-10">
          <Card />
          <Card />
          <Card />
          <Card />    
      </div>
    </>
  );
}
