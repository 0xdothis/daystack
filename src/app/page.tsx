import Growth from "@/components/Growth";
import Header from "@/components/Header";
import SimplePayment from "@/components/Section";
import Showcase from "@/components/Showcase";
import Trusted from "@/components/Trusted";

export default function Home() {
  return (
    <>
      <Header />
      <Showcase />
      <SimplePayment />
      <Trusted />
      <Growth />
    </>
  );
}
