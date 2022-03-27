import { v4 as uuid } from "uuid";
import { bridgeCameraCoverImage, compactCameraCoverImage, dslrCoverImage, mirrorLessCoverImage } from "../../assets/main-images";

/**
 * Category Database can be added here.
 * You can add category of your wish with different attributes
 * */

export const categories = [
  {
    _id: uuid(),
    categoryName: "DSLR",
    imageSrc: dslrCoverImage
  },
  {
    _id: uuid(),
    categoryName: "Compact",
    imageSrc: compactCameraCoverImage
  },
  {
    _id: uuid(),
    categoryName: "Mirrorless",
    imageSrc: mirrorLessCoverImage
  },
  {
    _id: uuid(),
    categoryName: "Bridge",
    imageSrc: bridgeCameraCoverImage
  }
];
