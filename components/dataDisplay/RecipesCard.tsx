"use client";
import { Card } from "antd";
import Image from "next/image";
import { useState } from "react";
import DefaultImg from "../../public/img/default.png";
import Btn from "../buttons/Btn";
import Link from "next/link";
const { Meta } = Card;

interface RecipesCardProps {
  img: string;
  name: string;
  type?: string;
  slug: string;
}

const RecipesCard = ({ img, name, type, slug }: RecipesCardProps) => {
  const [imageSrc, setImageSrc] = useState(img);

  const handleImageError = () => {
    setImageSrc(DefaultImg.src);
  };

  return (
    <Card
      hoverable
      className="w-full md:w-64 p-2 max-h-[280px] md:max-h-[350px]"
      cover={
        <div
          style={{ position: "relative", width: "100%", paddingTop: "56.25%" }}
        >
          <Image
            src={imageSrc || DefaultImg.src}
            alt="recipe-img"
            layout="fill"
            objectFit="cover"
            onError={handleImageError}
          />
        </div>
      }
    >
      <Meta
        title={name}
        description={type === "002" ? "သက်သက်လွတ်" : "အသားစား"}
      />
      <Link className="" href={`/instructions/${slug}`}>
        <Btn className="bg-pink-500 w-full py-2 rounded-md mt-10 font-bold shadow-lg text-black">
          ချက်စားမယ်
        </Btn>
      </Link>
    </Card>
  );
};

export default RecipesCard;
