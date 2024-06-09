import Image from "next/image";
import { Inter } from "next/font/google";
import Button from "@/components/button";
import DscInput from "@/components/Input";
import DscTextArea from "@/components/textArea";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const handleChange = (e: any) => {
    console.log("e", e);
  };
  return (
    <div className="w-full h-[90vh] flex items-center flex-col justify-center gap-2">
      home
    </div>
  );
}
